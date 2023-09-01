let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');
let rectangleSpan = document.querySelectorAll('.rectangle');

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{
        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        })
    })

    setTimeout(()=>{
        rectangleSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        })
    }, 1000)

    setTimeout(()=>{
        intro.style.opacity = '0';
    }, 4000)

    setTimeout(()=>{
        intro.style.opacity = '0';
        intro.style.display = 'none';
    }, 5300)
})