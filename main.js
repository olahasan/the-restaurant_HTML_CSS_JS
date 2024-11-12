let uuu = document.getElementById("up")
console.log(uuu);

window.onscroll = function(){
    if(scrollY >= 300){
        uuu.classList.add("add");
    }else{
        uuu.classList.remove("add");
    }
}


uuu.onclick = function(){
    scroll({
        top:0,
        behavior:"smooth",
    })
}


// ICON
let ICON = document.getElementById("ICON");
let LIST = document.getElementById("LIST");
console.log(ICON);
console.log(LIST);

ICON.onclick = function(){
    // LIST.style.display="block"
    LIST.classList.toggle("seee")
}