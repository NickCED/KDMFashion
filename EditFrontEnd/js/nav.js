import pageChange from './utils/pageChange.js';
import gsap from 'gsap';
import { glowTL, removeEnsemble } from './home/home.js';

let pages = {
  attract: document.getElementById('Attract'),
  home: document.getElementById('Home'),
  clump: document.getElementById('Clump'),
  ensemble: document.getElementById('Ensembles'),
  accessories: document.getElementById('Accessories'),
  help: document.getElementById('Help'),
  info: document.getElementById('Info'),
  onTop: document.getElementById('onTop'),
  helpBtn: document.getElementById('helpBtn'),
  homeBtn: document.getElementById('homeBtn'),
};

// variable for current page object with all the data
const currentPage = {
  depth: 0,
  title: 'attract',
  data: {},
  currentUserId: 0,
  userSettings: {},
};
const navLogo = document.getElementById('navLogo');
const nav = document.querySelector('nav');

gsap.set([pages.attract], { alpha: 1, zIndex: 10 });
gsap.set(
  [
    pages.home,
    pages.clump,
    pages.ensemble,
    pages.accessories,
    pages.help,
    pages.info,
  ],
  {
    alpha: 0,
    zIndex: 0,
  },
);
gsap.set(nav, { alpha: 0 });

pages.attract.addEventListener('click', () => {
  currentPage.title = 'home';
  currentPage.depth = 1;
  pageChange(pages.attract, pages.home);
  glowTL.play();
  gsap.to(nav, { alpha: 1, duration: 1, ease: 'sine.inOut' });
});

navLogo.addEventListener('click', () => {
  if (currentPage.title === 'home') {
    console.log('why slower?');

    gsap.to(nav, {
      alpha: 0,
      duration: 1,
      ease: 'sine.inOut',
      onComplete: () => {
        glowTL.pause();
      },
    });
    pageChange(pages[currentPage.title], pages.attract);
    currentPage.title = 'attract';
    currentPage.depth = 0;

    return;
  }
  console.log('navLogo clicked');
  glowTL.play();
  gsap.to('#navLogo', {
    height: 141,
    duration: 1,
    ease: 'sine.inOut',
    onComplete: removeEnsemble,
  });
  pageChange(pages[currentPage.title], pages.home);
  currentPage.title = 'home';
  currentPage.depth = 1;
  // remove ensemble figure
});

export { pages, currentPage };
