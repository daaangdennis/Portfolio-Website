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