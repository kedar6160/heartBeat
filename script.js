const heart_div = document.getElementById("heart");
const heartLeft_div = document.getElementById("heart-left");


function showMessage(){
var x = document.createElement("audio");
x.setAttribute("src","Suriel Hess - Little Bit More (Lyrics).mp3");
x.setAttribute("type","audio/mpeg" )
x.autoplay=true;
x.setAttribute("id","audi");

}

function main(){
    heart_div.addEventListener("click", ()=> showMessage());
}

main();
