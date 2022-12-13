const navIconEl = document.querySelector('.nav-icon');
const navCloseEl = document.querySelector('.nav-close');
const navList = document.querySelector('.nav-list');
const navBgoverlayEl = document.querySelector('.nav-bgoverlay');


const navOpen = () => {
    navList.classList.add('show');
    navBgoverlayEl.classList.add('active');
    document.body.style='visbility: visible; height: 100vh; width:100vw; overflow: hidden;';

}

const navClose = () => {
    navList.classList.remove('show');
    navBgoverlayEl.classList.remove('active');
    document.body.style='visbility: visible; height: initial; width:100%; overflow-x: hidden;  ';

}


navIconEl.addEventListener('click' , navOpen);
navCloseEl.addEventListener('click' , navClose);
navBgoverlayEl.addEventListener('click' , navClose);


AOS.init({
    offset: 200,
    delay: 100,
    duration: 1400,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom'

})

