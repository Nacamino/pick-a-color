//slider value and design
var red = document.getElementById("red-bar");
var green = document.getElementById("green-bar");
var blue = document.getElementById("blue-bar");
var output1 = document.getElementById("span1");
var output2 = document.getElementById("span2");
var output3 = document.getElementById("span3");

output1.innerHTML = red.value;

output2.innerHTML = green.value;

output3.innerHTML = blue.value;

red.style.background = 'linear-gradient(to right, #ff5739 50%,  white 50%)'

green.style.background = 'linear-gradient(to right, #69c33b 50%,  white 50%)'

blue.style.background = 'linear-gradient(to right, #41a5ff 50%,  white 50%)'

red.oninput=function(){
  output1.innerHTML= this.value;
      this.style.background = 'linear-gradient(to right, #ff5739 0%, #ff5739 ' +  this.value / 2.55 + '%,  white 0%)'
};

green.oninput = function() {
  output2.innerHTML = this.value;
  this.style.background = 'linear-gradient(to right, #69c33b 0%, #69c33b ' + this.value / 2.55 + '%,  white 0%)'
};

blue.oninput = function() {
  output3.innerHTML = this.value;
  this.style.background = 'linear-gradient(to right, #41a5ff 0%, #41a5ff ' + this.value / 2.55 + '%,  white 0%)'
};
//color code 
var hexC = document.getElementById("hexC")
 
function hexCode(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
};

function rgbToHex(r, g, b) { 
  return  "#"+hexCode(r)+""+hexCode(g)+""+hexCode(b)+"";
};


//change color background

var input = document.querySelectorAll("input")

const color=(color)=>{
  var rgb= color.value
  if (rgb > 100 ){
    return (rgb = 50 ) 
  }

 //cambiar despues cuando haga diseño-
  
};

for( var i=0; i< input.length;i++){
  input[i].addEventListener("input", function(){
    var rgb = document.getElementById("rgb")
    rgb.style.border= "5px solid rgb("+color(red) +", "+color(green) +", "+color(blue) +",0.5 )"
    document.body.style.background= "rgb("+red.value+", "+green.value+", "+blue.value+")"
    hexC.innerHTML= rgbToHex(parseInt(red.value),parseInt(green.value),parseInt(blue.value))
    document.getElementById("hexC").style.background="rgb("+color(red) +", "+color(green) +", "+color(blue) +",0.5)" 
  })
}


  







