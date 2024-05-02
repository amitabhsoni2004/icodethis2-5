let pointersEl = document.querySelectorAll(".pointer");

pointersEl.forEach(pointer => {
    pointer.dataset.rotated = "false"; 

    pointer.addEventListener("click", () => {

        pointersEl.forEach(p => {
            if (p !== pointer) {
                p.style.transform = 'rotate(0deg)';
                p.dataset.rotated = "false"; 
            }
        });
        if (pointer.dataset.rotated === "false") {
            pointer.style.transform = 'rotate(180deg)';
            pointer.dataset.rotated = "true";
        } else {
            pointer.style.transform = 'rotate(0deg)';
            pointer.dataset.rotated = "false";
        }
    });
});


var navBar = document.querySelector(".nav");
let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click",()=>{
    navBar.style.transform = 'translateX(0px)';
})

let close1 = document.querySelector(".close");
close1.addEventListener("click",()=>{
    navBar.style.transform = 'translateX(-1000px)';
})