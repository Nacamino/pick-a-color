
class ColorPicker{
    constructor(){
        this.sliderR = getEl("red-bar");
        this.sliderG = getEl("green-bar");
        this.sliderB = getEl("blue-bar");
        this.outputR= getEl("span1");
        this.outputG= getEl("span2");
        this.outputB= getEl("span3");
        this.fondo= document.body;
        this.isImgSelected= false
        this.imgFile= getEl("img");
        this.img= getEl("image");
        this.canvas= getEl("cv");
        this.preview= getEl("preview");
        this.clean=getEl("clean");
        this.container= getEl("main_container");
        this.hexC= getEl("hexC");
        this.random= getEl("random");
        this.colorList= new library(this);
        this.r=128
        this.g=128
        this.b=128
        
        this.init();
       
    }
    init(){
        //valores iniciales de los inputs
        this.outputR.innerHTML=this.sliderR.value
        this.outputG.innerHTML=this.sliderG.value
        this.outputB.innerHTML=this.sliderB.value
        this.setBackground()
        this.buttonFunction()
       this.colorRandom()
        //se abre la imagen del input
        this.imgFile.onchange= (e)=>{   
            var file = this.imgFile.files[0];
            var reader= new FileReader();
            reader.onloadend = ()=> {
            var imgResult = reader.result;
            this.img.src = imgResult;
            this.isImgSelected = true;
            this.img.classList.add("image_open")
            this.preview.classList.add("preview_visible")
            this.img.onload=()=>{
                
                this.canvas.width=this.img.width;
                this.canvas.height= this.img.height;
                this.canvas.getContext('2d').drawImage(
                this.img, 0, 0, this.img.width , this.img.height);
                
            } 
            //manejo seleccion de color por click   
            this.img.onclick=(e)=>{
                if (!this.isImgSelected) {
                    return;
                  }
                if(e.offsetX){
                    let x= e.offsetX
                    let y=e.offsetY
                    let info= this.getColor(x,y)
                    this.r = info[0]
                    this.g = info[1]
                    this.b = info[2]
                   this.setBackground(this.r,this.g,this.b)
                   this.hexCode(this.r,this.g,this.b)
                   this.outputR.innerHTML= this.r
                   this.outputG.innerHTML= this.g
                   this.outputB.innerHTML= this.b
                   this.setColorBarr()
                   this.addCurrentColor()
                 
                }
               
                
            }
            //manejo preview de color
            this.img.onmousemove=(e)=>{
                if (!this.isImgSelected) {
                    return;
                  }
                if(e.offsetX){
                    let x= e.offsetX
                    let y=e.offsetY
                    let info= this.getColor(x,y)
                    this.r = info[0]
                    this.g = info[1]
                    this.b = info[2]
                   this.setPreview(this.r,this.g,this.b)
                   
                 
                }
                
            }
          
      
           
        }
        if (file) {
            reader.readAsDataURL(file);
          }
         
        };
        
        
    }
    addCurrentColor(){
        this.colorList.addColorToList(this.r,this.g,this.b)
    }
    getColor(x,y){
        //obtengo color por pixel
        var     data = this.canvas.getContext("2d").getImageData(x,y,1,1).data;
        return data

    }
    
    sliderValue(){
        //CONTROLO LOS SLIDER
        let r_value = this.outputR
        let g_value = this.outputG
        let b_value = this.outputB
        

        this.sliderR.oninput = (e)=>{
            r_value.innerHTML = e.target.value
            
            this.setColorSlider()
        }
        this.sliderG.oninput = (e)=>{
            g_value.innerHTML = e.target.value
            this.setColorSlider()
        }
      
        this.sliderB.oninput = (e)=>{
            b_value.innerHTML = e.target.value
            this.setColorSlider()
        }
        
       
    }
    setColorSlider(){
        //elñ fondo cambia con los slider
        var inputs= document.querySelectorAll("input")
            this.r =this.sliderR.value 
            this.g =this.sliderG.value 
            this.b =this.sliderB.value
     for( let i=0; i< inputs.length;i++){
         inputs[i].addEventListener("input", ()=>{
            this.hexCode(this.sliderR.value,this.sliderG.value,this.sliderB.value)
            this.fondo.style.background= `rgb(${this.r}, ${this.g},${this.b})`
           this.setColorBarr()
           
           
         })
         
     }
     
    }
    setColorBarr(){
        this.sliderR.style.background= 'linear-gradient(to right, #ff5739 0%, #ff5739 ' + this.sliderR.value / 2.55 + '%,  white 0%)';
        this.sliderG.style.background= 'linear-gradient(to right, #69c33b 0%, #69c33b ' +  this.sliderG.value / 2.55 + '%,  white 0%)';
        this.sliderB.style.background= 'linear-gradient(to right, #41a5ff 0%, #41a5ff ' +  this.sliderB.value / 2.55 + '%,  white 0%)';
    }
  
    setBackground(r,g,b){
        this.fondo.style.background= `rgb(${r}, ${g},${b})`
        this.sliderR.value = this.r
        this.sliderG.value = this.g
        this.sliderB.value = this.b
        this.setColorBarr()
        this.sliderValue() 
        
       
    }

    setPreview(r,g,b){
        this.preview.style.background= `rgb(${r}, ${g},${b})`
        

    }
    buttonFunction(){
        this.clean.onmousemove=()=>{     
            this.container.classList.add("container_none")
           
        }
        this.clean.onmouseout=()=>{    
             this.container.classList.remove("container_none")
           
         }      
    }
    hexCode(r,g,b){        
        this.hexC.innerHTML= rgbToHex(parseInt(r),parseInt(g),parseInt(b))
        
    }
    colorRandom(){
        this.random.onclick=()=>{
            this.r= Math.round(Math.random()* 255);
            this.g= Math.round(Math.random()* 255);
            this.b= Math.round(Math.random()* 255)
            this.setColorBarr()
           this.setBackground(this.r,this.g,this.b)
           this.hexCode(this.r,this.g,this.b)
           this.outputR.innerHTML= this.r
            this.outputG.innerHTML= this.g
            this.outputB.innerHTML= this.b
            this.addCurrentColor()
        }
       
    }

}
var colorpicker = new ColorPicker();