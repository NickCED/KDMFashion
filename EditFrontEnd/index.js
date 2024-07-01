import gsap from 'gsap';
import './scss/main.scss';
import pageChange from './js/utils/pageChange';
import './js/home/home';
//Pages
const attract = document.getElementById('Attract');
const nav = document.querySelector('nav');
const home = document.getElementById('Home');
const clump = document.getElementById('Clump');
const ensemble = document.getElementById('Ensembles');
const accessories = document.getElementById('Accessories');
const help = document.getElementById('Help');
const info = document.getElementById('Info');
const onTop = document.getElementById('onTop');
const helpBtn = document.getElementById('helpBtn');
const homeBtn = document.getElementById('homeBtn');

// //setup
// if (window.api !== undefined) {
//   window.api.getImages('images').then(images => {
//     console.log(images);
//   });
// }

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

//help section

helpBtn.addEventListener('click', () => {
  helpBtn.classList.add('vanish');

  setTimeout(() => {
    helpBtn.classList.remove('vanish');
  }, 3000);
});
