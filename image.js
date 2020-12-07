class Picture{
    constructor(){
        this.init()

    }
    init(){
        this.showPicture()
    }
    showPicture(){
        var img = document.getElementById("pictures");
        var file    = document.getElementById("img").files[0];
        var reader  = new FileReader();

        reader.onloadend = function () {
        img.src = reader.result;
        }

        if (file) {
        reader.readAsDataURL(file);
        } else {
        img.src = "";
        }
    }
}
var picture = new Picture();
document.getElementById("img").onclick=()=>{
    picture.init();
}