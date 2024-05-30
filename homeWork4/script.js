let myIndex = 0;
const colors = ["lightblue", "lightgreen", "lightcoral", "lightpink", "lightyellow"];
let currentIndex = 0;
carouselLampe();
carousel();


function carouselLampe(){
    document.getElementById("myLam").style.backgroundColor = colors[currentIndex];
    currentIndex++;
    if(currentIndex >= colors.length){
        currentIndex = 0;
    }
    setTimeout(carouselLampe, 1000);
}

function carousel() {
    let i;
    let x = document.getElementsByClassName("firstSectionImg");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 4000);
}

document.addEventListener("DOMContentLoaded", () => {
    const icons = document.querySelectorAll(".iconSM");
    let currentIndex = 0;
    
    function jumpIcon() {
        icons[currentIndex].classList.add("jump");
        
        setTimeout(() => {
            icons[currentIndex].classList.remove("jump");
            currentIndex = (currentIndex + 1) % icons.length;
            jumpIcon();
        }, 900);
    }
    
    jumpIcon();
});
