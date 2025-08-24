---
tags: articles, hire, press
layout: article.njk

title: Edinburgh hire bike supplier 'Voi' host press launch ahead of 3rd September start date

---

We attended the media launch of Edinburgh's new hire e-bikes last Friday, the 22nd August.

Amidst the scrum for carefully choreographed photographs, Council quotes and on-bike videos with the 'real' press, we managed to get some answers from Voi representatives about various aspects of the scheme - as well as finding out which bits are still being fine-tuned ahead of the public launch **next Wednesday 3rd September**. We've laid all of these out below.

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
    <figcaption class="hidden-caption-content">Cllr Stephen Jenkinson and Voi UK's General Manager James Bolton take to North Meadow Walk on Voi's hire e-bikes for press onlookers.</figcaption>
  </figure>
  <figure class="pswp-gallery__item">
    <a href="./assets/images/3.jpeg" data-pswp-width="1200" data-pswp-height="900" target="_blank">
      <img src="./assets/images/3.jpeg" alt="Caption 1">
    </a>
    <figcaption class="hidden-caption-content">The larger of Voi's two e-bike models coming to Edinburgh, the Explorer 4.</figcaption>
  </figure>
  <figure class="pswp-gallery__item">
    <a href="./assets/images/4.jpeg" data-pswp-width="1200" data-pswp-height="900" target="_blank">
      <img src="./assets/images/4.jpeg" alt="Caption 1">
    </a>
    <figcaption class="hidden-caption-content">The smaller from Voi's cycles destined for Edinburgh, the Explorer Light 1, is 25% lighter and slightly more powerful on hill climbs.</figcaption>
  </figure>  
  <figure class="pswp-gallery__item">
    <a href="./assets/images/5.jpeg" data-pswp-width="1200" data-pswp-height="900" target="_blank">
      <img src="./assets/images/5.jpeg" alt="Caption 1">
    </a>
    <figcaption class="hidden-caption-content">'Cities made for living', Voi's slogan, adorning their pop-up demo shelter.</figcaption>
  </figure>
  <figure class="pswp-gallery__item">
    <a href="./assets/images/6.jpeg" data-pswp-width="1200" data-pswp-height="900" target="_blank">
      <img src="./assets/images/6.jpeg" alt="Caption 1">
    </a>
    <figcaption class="hidden-caption-content">Cllr Jenkinson and James Bolton from Voi pose for the cameras.</figcaption>
  </figure>
  <figure class="pswp-gallery__item">
    <a href="./assets/images/7.jpeg" data-pswp-width="1200" data-pswp-height="900" target="_blank">
      <img src="./assets/images/7.jpeg" alt="Caption 1">
    </a>
    <figcaption class="hidden-caption-content">One last shot for the media, with the whole young team in tow.</figcaption>
  </figure>
   
</div>

<hr/>

## 🧮 So what's the extent of the imminent rollout?

**Fifty bikes** will be on-street from Wednesday 3rd September, with around **twenty geofenced parking locations**. To begin with, these will be primarily sited on open public spaces off the carriageway, but in other cities Voi have a track record of working with local authorities to get the appropriate traffic orders in place to turn over car parking spaces to hire cycle parking, fitting twelve bikes in a typical single-car space.

## 🗺️ What exactly does 'City Centre' mean, in terms of the perimiter of use?

This is still being pinned down by team Voi, along with exact parking locations; they're targeting the inclusion of as many higher education campuses as possible, and we're definitely 'beyond the meadows' in terms of the initial zone.

In terms of forward notice, it seems pretty likely we won't see any further details until the scheme goes live on Wednesday 3rd September.

## 🚲 What's on offer?

Voi's all-electric fleet for Edinburgh consists of two e-bike models; the Voi Explorer 4 and the Voi Explorer Light 1 - both in a delightfully _heritage-appropriate_ pastel 'coral' colour scheme, which looks pretty classy compared to some of the competitors who lost out on the contract.

### Voi Explorer 4

This is the larger of the two cycles, ridden by Cllr Jenkinson in our photos. At 36kg it's substantial, and offers a soft, height-adjustable saddle, front cargo basket, 'be seen' running lights and a bell. While the app encourages you to use a helmet - listing it in the app along with the rules for riding - they're not provided with the hire of the bike.  

![The Voi Explorer 4 cycle](./assets/images/3.jpeg)

### Voi Explorer Light 1

This cycle is a little more nimble, nippier up a hill, and weighs significantly less than its Explorer 4 counterpart at 25kg. If like us you'll be recommending pals get a first try of an e-bike using the scheme, this might be the one to highlight for a first try. Smaller wheels might not contend as well with Edinburgh's pothole-slash-crater situation and accompanying road ravines, but given how driven by usage data this scheme will be as it grows, we'll soon see if riders have a preference.

![The Voi Explorer Light 1 bicycle](./assets/images/4.jpeg)