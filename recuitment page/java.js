const join = document.getElementById("join_btn");
const logo =document.getElementById("Logo");
const icon =document.getElementById("icon");
const FirstCover =document.getElementById("cover1");
const apply = document.getElementById("application");
join.addEventListener("click", function(){
    logo.style.opacity = 0;
    join.style.opacity = 0;
    join.style.cursor = "default";
    logo.style.transition = "0.5s all ease-out";
    join.style.transition = "0.5s all ease-out";
    icon.style.opacity = 100;
    icon.style.transition = "0.2s all ease-out";
    icon.style.animation = "fly 5s";
    icon.style.animationDelay = "0.5s";
    icon.style.animationFillMode = "forwards";
    function hideCover(){
        FirstCover.style.height = 0;
        FirstCover.style.transition = "3.75s all ease-out";
    }
    window.setTimeout(hideCover,900);
    apply.style.opacity = 100;
    function showApp(){
        apply.style.zIndex = 650;
        apply.style.transition = "1s all ease-out";
    }
    window.setTimeout(showApp, 3500);
   
})