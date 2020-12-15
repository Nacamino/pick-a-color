const drawImage=(canvas,img,callback)=>{
   
    canvas.width = img.width;
    canvas.height = img.height; 
    canvas.getContext('2d').drawImage(img, 0, 0, img.width , img.height);
    
    return callback(), console.log("listo")

}
   
var preview = document.getElementById("preview")
var imgs = document.getElementById("pictures");  
var fondo = document.body; 
var x = "";
var y = ""
var cv = document.getElementById("cv") ;
var  hexC = document.getElementById("hexC") ;
var width = cv.width;
var height= cv.height;
var input = document.getElementById("img")
class Picture{
    constructor(){
        this.init()

    }
    init(){
        this.showPicture()
        this.showColor()
        
    }
    
  
    showColor(){      
        imgs.addEventListener('click',(e)=>{
            if(e.offsetX){
                x= e.offsetX
                y=e.offsetY
            }
            imgs.onload=drawImage(cv,imgs,()=>{
                
            var data=cv.getContext("2d").getImageData(x, y, 1, 1 ).data; 
            hexC.innerHTML= rgbToHex((data[0]),(data[1]),(data[2]));
            document.body.style.background= "rgb("+data[0]+", "+data[1]+", "+data[2]+")";
            changeValue(red,'linear-gradient(to right, #ff5739 0%, #ff5739 ' +  red.value / 2.55 + '%,  white 0%)', data[0], output1);
            changeValue(green,'linear-gradient(to right, #69c33b 0%, #69c33b ' + green.value / 2.55 + '%,  white 0%)',data[1], output2)
            changeValue(blue,'linear-gradient(to right, #41a5ff 0%, #41a5ff ' + blue.value / 2.55 + '%,  white 0%)', data[2], output3)
         },false)
        });
        imgs.addEventListener('mousemove',(e)=>{
            if(e.offsetX){
                x= e.offsetX
                y=e.offsetY
            }
            imgs.onload=drawImage(cv,imgs,()=>{
                
            var data=cv.getContext("2d").getImageData(x, y, 1, 1 ).data; 
            preview.style.backgroundColor = "rgb("+data[0]+", "+data[1]+", "+data[2]+")";
            preview.style.display= "block"

            
            
         },false)
        })
    }
    showPicture(){
        
        var file    = document.getElementById("img").files[0];
        var reader  = new FileReader();

        reader.onloadend = function () {
        imgs.src = reader.result;
        imgs.style.border= "5px solid white"  
        }

        if (file) {
        reader.readAsDataURL(file);
        } else {
        imgs.src = "";
         
        }
        cv.style.display= "none"
        
       
    }
}
var picture = new Picture();
document.getElementById("pictures").onloadend=()=>{
    picture.init();
}