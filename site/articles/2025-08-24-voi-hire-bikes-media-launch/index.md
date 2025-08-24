---
tags: articles, hire, press
layout: article.njk

title: Edinburgh hire bike supplier 'Voi' host press launch ahead of 3rd September start date

---

We attended the media launch of Edinburgh's new hire e-bikes last Friday, the 22nd August.

Amidst the scrum for carefully choreographed photographs, Council quotes and on-bike videos with the 'real' press, we managed to get some answers from Voi representatives about various aspects of the scheme - as well as finding out which bits are still being fine-tuned ahead of the public launch **next Wednesday 3rd September**.

Click down into the images below view larger with description. _You can move through the gallery with arrow keys, swiping on a touchscreen device, or the buttons on-screen for non-touchscreen devices._

<link rel="stylesheet" href="/articles/2025-08-24-voi-hire-bikes-media-launch/assets/photoswipe/photoswipe.css">

<style>
  .pswp__custom-caption {
    background: rgba(38, 2, 58, 0.9);
    font-size: 1.1rem;
    color: #fff;
    width: 90vw;
    max-width: 60rem;
    padding: 0.8rem 1.2rem;
    border-radius: 4px;
    position: absolute;
    left: 50%;
    bottom: 8px;
    transform: translateX(-50%);
  }
  .pswp__custom-caption a {
    color: #fff;
    text-decoration: underline;
  }
  .hidden-caption-content {
    display: none;
  }
  .pswp-gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
  .pswp-gallery__item {
    margin: 0;
  }
  .pswp-gallery__item a img {
    max-width: 14rem;
  }
  .pswp__img {
    max-height: 92vh;
    width: auto !important;
    transform: translateX(4%);
  }
</style>

<script type="module">
import PhotoSwipeLightbox from '/articles/2025-08-24-voi-hire-bikes-media-launch/assets/photoswipe/photoswipe-lightbox.esm.min.js';
const options = {
  gallery:'#gallery--voi-media-launch',
  children:'.pswp-gallery__item',
  showHideAnimationType: 'fade',
  arrowPrev: true,
  arrowNext: true,
  zoom: false,
  pswpModule: () => import('/articles/2025-08-24-voi-hire-bikes-media-launch/assets/photoswipe/photoswipe.esm.min.js')
};
const lightbox = new PhotoSwipeLightbox(options);
lightbox.on('uiRegister', function() {
  lightbox.pswp.ui.registerElement({
    name: 'custom-caption',
    order: 9,
    isButton: false,
    appendTo: 'root',
    html: 'Caption text',
    onInit: (el, pswp) => {
      lightbox.pswp.on('change', () => {
        const currSlideElement = lightbox.pswp.currSlide.data.element;
        let captionHTML = '';
        if (currSlideElement) {
          const hiddenCaption = currSlideElement.querySelector('.hidden-caption-content');
          if (hiddenCaption) {
            // get caption from element with class hidden-caption-content
            captionHTML = hiddenCaption.innerHTML;
          } else {
            // get caption from alt attribute
            captionHTML = currSlideElement.querySelector('img').getAttribute('alt');
          }
        }
        el.innerHTML = captionHTML || '';
      });
    }
  });
});
lightbox.init();
</script>

<div class="pswp-gallery pswp-gallery--with-caption" id="gallery--voi-media-launch">
  <figure class="pswp-gallery__item">
    <a href="./assets/images/1.jpeg" data-pswp-width="1200" data-pswp-height="900" target="_blank">
      <img src="./assets/images/1.jpeg" alt="Caption 1">
    </a>
    <figcaption class="hidden-caption-content">The Voi team ready the bikes for press and political figures, while CEC Transport & Environment Convener Cllr Stephen Jenkinson is interviewed in the background.</figcaption>
  </figure>
  <figure class="pswp-gallery__item">
    <a href="./assets/images/2.jpeg" data-pswp-width="1200" data-pswp-height="900" target="_blank">
      <img src="./assets/images/2.jpeg" alt="Caption 1">
    </a>
    <figcaption class="hidden-caption-content">Here's an example (Liverpool) of how the perimeter of use manifests on the map, with zones and rentable bikes/scooters.</figcaption>
  </figure>
  <figure class="pswp-gallery__item">
    <a href="./assets/images/3.jpeg" data-pswp-width="1200" data-pswp-height="900" target="_blank">
      <img src="./assets/images/3.jpeg" alt="Caption 1">
    </a>
    <figcaption class="hidden-caption-content">Zooming in closer we can start to see individual scooters - which won't be in Edinburgh, pending legislation required to allow them - and different zones, parking etc.</figcaption>
  </figure>
  <figure class="pswp-gallery__item">
    <a href="./assets/images/4.jpeg" data-pswp-width="1200" data-pswp-height="900" target="_blank">
      <img src="./assets/images/4.jpeg" alt="Caption 1">
    </a>
    <figcaption class="hidden-caption-content">The top icon on the map view - the direction arrow - looks to offer GPS navigation / directions, but will show a warning if the destination is outside the usage perimiter in your city.</figcaption>
  </figure>  
  <figure class="pswp-gallery__item">
    <a href="./assets/images/5.jpeg" data-pswp-width="1200" data-pswp-height="900" target="_blank">
      <img src="./assets/images/5.jpeg" alt="Caption 1">
    </a>
    <figcaption class="hidden-caption-content">The second icon in the top corner of the map view is a filter to show only bikes or scooters on the map.</figcaption>
  </figure>
  <figure class="pswp-gallery__item">
    <a href="./assets/images/6.jpeg" data-pswp-width="1200" data-pswp-height="900" target="_blank">
      <img src="./assets/images/6.jpeg" alt="Caption 1">
    </a>
    <figcaption class="hidden-caption-content">The 'Voi pass' tab shows pricing options - this, and the next shot, are plans in Liverpool.</figcaption>
  </figure>
  <figure class="pswp-gallery__item">
    <a href="./assets/images/7.jpeg" data-pswp-width="1200" data-pswp-height="900" target="_blank">
      <img src="./assets/images/7.jpeg" alt="Caption 1">
    </a>
    <figcaption class="hidden-caption-content">Scrolling through the different (Liverpool) monthly plans.</figcaption>
  </figure>
   
</div>