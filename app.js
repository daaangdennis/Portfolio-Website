let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoWords = document.querySelector('.logo');
let rectangle = document.querySelector('.rectangle');

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{
        logoWords.classList.add('active');
        setTimeout(()=>{
            rectangle.classList.add('active');
            setTimeout(()=>{
                intro.classList.add('fade');
                setTimeout(()=>{
                    intro.remove();
                }, 500)
            }, 1860)
        }, 1000)
    })
})

function toggleStyleSheet(){
    var styleSheet = document.getElementById("mainStyleSheet");
    var currentStyle = styleSheet.getAttribute("href");
    var newStyle = currentStyle == "style.css" ? "style2.css" : "style.css";
    styleSheet.setAttribute("href", newStyle);
    localStorage.setItem("style", newStyle);
}

window.onload = function(){
    var currentStyle = localStorage.getItem("style");
    var styleSheet = document.getElementById("mainStyleSheet");
    styleSheet.setAttribute("href", currentStyle);
    
}
