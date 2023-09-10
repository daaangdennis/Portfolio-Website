
window.addEventListener('DOMContentLoaded', ()=>{
    var intro = document.querySelector('.intro');
    var logoWords = document.querySelector('.logo');
    var rectangle = document.querySelector('.rectangle');
    var styleSheet = document.getElementById("mainStyleSheet");
    var currentStyle = styleSheet.getAttribute("href");
    if(currentStyle == "style.css")
    {
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
    }
})

function toggleStyleSheet(){
    var styleSheet = document.getElementById("mainStyleSheet");
    var currentStyle = styleSheet.getAttribute("href");
    var newStyle = currentStyle == "style.css" ? "style2.css" : "style.css";
    styleSheet.setAttribute("href", newStyle);
    localStorage.setItem("style", newStyle);

    var logopic = document.querySelector('.logoPic');
    var icon = document.getElementById('mainIcon')

    if(newStyle == "style2.css")
    {
        logopic.setAttribute("src", "images/logo2.svg");
        icon.setAttribute("href", "images/icon2.ico")
    }
    else
    {
        logopic.setAttribute("src", "images/logo.svg");
        icon.setAttribute("href", "images/icon.ico")
    }
    
}

window.onload = function(){
    var currentStyle = localStorage.getItem("style");
    if (currentStyle == null)
    {
        currentStyle = "style.css";
    }
    var styleSheet = document.getElementById("mainStyleSheet");
    styleSheet.setAttribute("href", currentStyle);

    var logopic = document.querySelector('.logoPic');
    var icon = document.getElementById('mainIcon')

    if(currentStyle == "style2.css")
    {
        logopic.setAttribute("src", "images/logo2.svg");

        icon.setAttribute("href", "images/icon2.ico")
        var intro = document.querySelector('.intro');
        intro.remove();
    }
}
