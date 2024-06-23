const gsap = require('gsap');

const home = document.getElementById('home');
const homeClumps = home.querySelectorAll('.clump');

function loadHome() {
    gsap.to(home, { autoAlpha: 1, duration: 1 });
    homeClumps.forEach(clump => {
        gsap.set(clump, { autoAlpha: 0,xPercent: 20 });
    });
  
}


