import gsap from 'gsap';
import './scss/main.scss';
//Pages
const attract = document.getElementById('Attract');
const nav = document.querySelector('nav');
const home = document.getElementById('Home');
const clump = document.getElementById('Clump');
const ensemble = document.getElementById('Ensemble');
const accessories = document.getElementById('Accessories');
const help = document.getElementById('Help');
const info = document.getElementById('Info');
const onTop = document.getElementById('onTop');
const helpBtn = document.getElementById('helpBtn');
const homeBtn = document.getElementById('homeBtn');

//setup
if (window.api !== undefined) {
  window.api.getImages('images').then(images => {
    console.log(images);
  });
}
gsap.set([attract], { alpha: 1, zIndex: 10 });
gsap.set([home, clump, ensemble, accessories, help, info], {
  alpha: 0,
  zIndex: 0,
});
gsap.set(nav, { alpha: 0 });

attract.addEventListener('click', () => {
  let tl = gsap.timeline();
  tl.fromTo(
    attract,
    { zIndex: 10, alpha: 1 },
    { duration: 1, alpha: 0, zIndex: 0, ease: 'sine.inOut' },
  );
  tl.fromTo(
    home,
    { zIndex: 0, alpha: 0 },
    {
      duration: 1,
      zIndex: 10,
      alpha: 1,
      ease: 'sine.inOut',
      onComplete: () => {
        attract.classList.add('off');
      },
    },
    '-=1',
  );
  tl.fromTo(
    nav,
    { alpha: 0 },
    { duration: 1, alpha: 1, ease: 'power2.inOut' },
    '-=1',
  );
});

function addVisFeedback() {
  document.addEventListener('click', createVisFeedback);

  function createVisFeedback(e) {
    let visFeedback = document.createElement('div');
    visFeedback.classList.add('visFeedback');
    onTop.appendChild(visFeedback);
    gsap.set(visFeedback, { x: e.clientX, y: e.clientY });
    gsap.fromTo(
      visFeedback,
      { scale: 1, alpha: 0.2 },
      {
        duration: 0.5,
        scale: 2,
        alpha: 0,
        ease: 'sine.inOut',
        onComplete: () => {
          visFeedback.remove();
        },
      },
    );
  }
}

addVisFeedback();

const navLogo = document.getElementById('navLogo');

navLogo.addEventListener('click', () => {
  console.log('click');
  let tl = gsap.timeline();
  tl.fromTo(
    home,
    { zIndex: 10, alpha: 1 },
    { duration: 1, zIndex: 0, alpha: 0, ease: 'sine.inOut' },
  );
  tl.fromTo(
    nav,
    { alpha: 1 },
    { duration: 1, alpha: 0, ease: 'power2.inOut' },
    '-=1',
  );
  tl.fromTo(
    attract,
    { zIndex: 0, alpha: 0 },
    {
      duration: 1,
      zIndex: 10,
      alpha: 1,
      ease: 'sine.inOut',
      onComplete: () => {
        attract.classList.remove('off');
      },
    },
    '-=1',
  );
});

//Clumps section

const clumps = document.querySelectorAll('.figure');
clumps.forEach(clump => {});

function homeToClump(clump, e) {
  let clumpCopy = clump.cloneNode(true);
  clumpCopy.classList.add('clumpCopy');

  let tl = gsap.timeline();
  tl.to(navLogo, { height: 100, duration: 1, ease: 'sine.inOut' });
  tl.fromTo(
    home,
    { zIndex: 10, alpha: 1 },
    { duration: 1, zIndex: 0, alpha: 0, ease: 'sine.inOut' },
  );
  tl.fromTo(
    clump,
    { zIndex: 0, alpha: 0 },
    { duration: 1, zIndex: 10, alpha: 1, ease: 'sine.inOut' },
    '-=1',
  );
  tl.fromTo(
    homeBtn,
    { alpha: 1 },
    { duration: 1, alpha: 0, ease: 'power2.inOut' },
    '-=1',
  );
}

//help section

helpBtn.addEventListener('click', () => {
  helpBtn.classList.add('vanish');

  setTimeout(() => {
    helpBtn.classList.remove('vanish');
  }, 3000);
});
