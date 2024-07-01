/**
 * Changes the page from the current page to the target page using GSAP animation.
 * @param {HTMLElement} currentPage - The current page element.
 * @param {HTMLElement} targetPage - The target page element.
 */
import gsap from 'gsap';

export default function pageChange(currentPage, targetPage) {
  gsap.set(targetPage, { alpha: 0, zIndex: 2 });
  gsap.set(currentPage, { alpha: 1, zIndex: 1 });
  let tl = gsap.timeline();

  tl.fromTo(
    currentPage,
    { alpha: 1 },
    {
      duration: 1,
      alpha: 0,
      ease: 'sine.inOut',
    },
    '0',
  );
  tl.fromTo(
    targetPage,
    { alpha: 0 },
    {
      duration: 1,

      alpha: 1,
      ease: 'sine.inOut',
    },
    '0',
  );
}
