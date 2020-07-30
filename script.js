function init(){
    document.getElementById("jay").classList.remove("hidden");
    document.getElementById("jay").classList.remove("down");
    document.getElementById("title").classList.remove("hidden");
    document.getElementById("title").classList.remove("up");
    document.getElementById("links").classList.remove("hidden");
    document.getElementById("links").classList.remove("left");
}

function updateScroll(){

    if(window.scrollY>window.innerHeight/2){
        document.getElementById("scroll-top").classList.remove("hidden");
    }else{
        document.getElementById("scroll-top").classList.add("hidden");
    }

}