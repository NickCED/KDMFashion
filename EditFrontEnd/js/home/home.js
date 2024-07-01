import gsap from 'gsap';
import pageChange from '../utils/pageChange';
import { currentPage } from '../nav.js';
const home = document.getElementById('Home');
const ensemble = document.getElementById('Ensembles');

function loadHome() {
  gsap.to(home, { autoAlpha: 1, duration: 1 });
}

const glowTL = gsap.timeline({ paused: true, repeat: -1 });

let figures = home.querySelectorAll('.figure');
// glowTL.fromTo(
//   figures,
//   { filter: 'drop-shadow(0 0 0px #F1B251)' },
//   {
//     filter: 'drop-shadow(0 0 10px #F1B251)',
//     duration: 1,
//     stagger: {
//       amount: 5,
//       yoyo: true,
//     },
//     repeat: -1,
//     repeatDelay: 10,
//     ease: 'sine.inOut',
//   },
// );
figures.forEach(figure => {
  glowTL.fromTo(
    figure,
    { filter: 'drop-shadow(0 0 0px #F1B251)' },
    {
      filter: 'drop-shadow(0 0 10px #F1B251)',
      duration: 1,
      yoyo: true,
      repeat: 1,
      ease: 'sine.inOut',
    },
    '>+.25',
  );
});

figures.forEach(figure => {
  figure.addEventListener('click', selectFigure);
});

function selectFigure(event) {
  pageChange(home, ensemble);
  currentPage.title = 'ensemble';
  currentPage.depth = 2;
  loadEnsemble(event.target);
  gsap.to('#navLogo', {
    height: 100,
    duration: 1,
    ease: 'sine.inOut',
    onComplete: () => {
      glowTL.pause();
    },
  });
}

function loadEnsemble(target) {
  let selectedFigure = target.cloneNode(false);
  console.log(selectedFigure);
  selectedFigure.id = 'selected-figure-' + target.id.split('fig')[1];
  selectedFigure.classList.remove('figure');
  selectedFigure.classList.add('selected-figure');
  selectedFigure.style.filter = '';
  let ensembleSections = document.getElementById('ensemble-cont');
  ensembleSections.appendChild(selectedFigure);
}
function removeEnsemble() {
  let selectedFigure = document.querySelector('.selected-figure');
  selectedFigure.remove();
  console.log('removed');
}

export { glowTL, removeEnsemble };
