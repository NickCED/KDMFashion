import gsap from 'gsap';

const home = document.getElementById('home');

function loadHome() {
  gsap.to(home, { autoAlpha: 1, duration: 1 });
  homeClumps.forEach(clump => {
    gsap.set(clump, { autoAlpha: 0, xPercent: 20 });
  });
}
