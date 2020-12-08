const drawImage=(canvas,img,callback)=>{
   
    canvas.width = img.width;
    canvas.height = img.height; 
    canvas.getContext('2d').drawImage(img, 0, 0, img.width , img.height);
    
    return callback(), console.log("listo")
}


function hexCode(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  };
  
  function rgbToHex(r, g, b) { 
    return  "#"+hexCode(r)+""+hexCode(g)+""+hexCode(b)+"";
  };
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
            document.body.style.background= "rgb("+data[0]+", "+data[1]+", "+data[2]+")"   
         },false)
        })
    }
    showPicture(){
        
        var file    = document.getElementById("img").files[0];
        var reader  = new FileReader();

        reader.onloadend = function () {
        imgs.src = reader.result;
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