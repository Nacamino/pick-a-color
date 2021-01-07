const getEl = id => document.getElementById(id);
const cleanDiv = el =>{
    while(el.lastChild){
        el.lastChild.remove()
    }
}
const hexCode= c=> {
    var hex = c.toString(16);
    
    return hex.length == 1 ? "0" + hex : hex;
    
  };
const rgbToHex= (r, g, b) => {

    return  "#"+hexCode(parseInt(r))+""+hexCode(parseInt(g))+""+hexCode((parseInt(b)))+"";
  };