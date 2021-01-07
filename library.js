class library{
    constructor(){
     this.colorList=[] 
     this.colorPalette= getEl("library") 
     this.init() 
    }

    init(){
        let savedColors= this.getColorFromLocal()
        if(savedColors){
            this.colorList= savedColors
        }
        this.updateColor()
    }
    removeColor(i){
        this.colorList= this.colorList.filter((el,index)=>index != i);
        this.saveColorToLocal()
        this.updateColor()
    }
    updateColor(){
        cleanDiv(this.colorPalette)
        this.colorList.forEach((color, i)=>{
         let colordiv= document.createElement("div");
        colordiv.className= "color"
        colordiv.style.background=color
        colordiv.ondblclick= ()=>{
            console.log("holi")
            this.removeColor(i)
        }
        this.colorPalette.appendChild(colordiv)
        
    
    })
       
    }
    saveColorToLocal(){
        localStorage.setItem("colorpalette", JSON.stringify({
            "colorList":this.colorList
        }))
        
    }
   getColorFromLocal(){
       let colors= localStorage.getItem("colorPalette")
       if (colors){
        colors = JSON.parse(colors)['colorList']
    }
    
   }
       
    
    addColorToList(r,g,b){
        this.colorList.push(`rgb(${r}, ${g},${b})`)
        this.saveColorToLocal()
       this.updateColor()
    };
    
}