---
tags: resources, projects, hire
layout: voiapp.njk

title: The Voi mobile app, ahead of Edinburgh launch

---

Voi app, as per time of publishing (Thursday 21st August, 2025). Click down into the images to see a description for each. You can move between them with arrow keys or the buttons on-screen.

<link rel="stylesheet" href="/projects/2025-08-voi-app/assets/photoswipe/photoswipe.css">

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
  .pswp-gallery__item a img {
    max-width: 14rem;
  }
  .pswp--zoom-allowed .pswp__button--zoom {
    display: none;
  }
  .pswp__img {
    max-height: 92vh;
    width: auto !important;
    transform: translateX(4%);
  }
</style>

<script type="module">
import PhotoSwipeLightbox from '/projects/2025-08-voi-app/assets/photoswipe/photoswipe-lightbox.esm.min.js';
const options = {
  gallery:'#gallery--voi-app',
  children:'.pswp-gallery__item',
  showHideAnimationType: 'fade',
  
  pswpModule: () => import('/projects/2025-08-voi-app/assets/photoswipe/photoswipe.esm.min.js')
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

<div class="pswp-gallery pswp-gallery--with-caption" id="gallery--voi-app">
  <div class="pswp-gallery__item">
    <a href="./assets/images/1.PNG" data-pswp-width="1179" data-pswp-height="2556" target="_blank">
      <img src="./assets/images/1.PNG" alt="Caption 1">
    </a>
    <div class="hidden-caption-content">Edinburgh's not got a perimiter of use available yet, so the app actually defaults to the next closest, Liverpool.</div>
  </div>
  <div class="pswp-gallery__item">
    <a href="./assets/images/2.PNG" data-pswp-width="1179" data-pswp-height="2556" target="_blank">
      <img src="./assets/images/2.PNG" alt="Caption 1">
    </a>
    <div class="hidden-caption-content">Here's an example (Liverpool) of how the perimeter of use manifests on the map, with zones and rentable bikes/scooters.</div>
  </div>
    <div class="pswp-gallery__item">
    <a href="./assets/images/3.PNG" data-pswp-width="1179" data-pswp-height="2556" target="_blank">
      <img src="./assets/images/3.PNG" alt="Caption 1">
    </a>
    <div class="hidden-caption-content">Zooming in closer we can start to see individual scooters - which won't be in Edinburgh, pending legislation required to allow them - and different zones, parking etc.</div>
  </div>
    <div class="pswp-gallery__item">
    <a href="./assets/images/4.PNG" data-pswp-width="1179" data-pswp-height="2556" target="_blank">
      <img src="./assets/images/4.PNG" alt="Caption 1">
    </a>
    <div class="hidden-caption-content">The top icon on the map view - the direction arrow - looks to offer GPS navigation / directions, but will show a warning if the destination is outside the usage perimiter in your city.</div>
  </div>  
  <div class="pswp-gallery__item">
    <a href="./assets/images/5.PNG" data-pswp-width="1179" data-pswp-height="2556" target="_blank">
      <img src="./assets/images/5.PNG" alt="Caption 1">
    </a>
    <div class="hidden-caption-content">The second icon in the top corner of the map view is a filter to show only bikes or scooters on the map.</div>
  </div>
    <div class="pswp-gallery__item">
    <a href="./assets/images/6.PNG" data-pswp-width="1179" data-pswp-height="2556" target="_blank">
      <img src="./assets/images/6.PNG" alt="Caption 1">
    </a>
    <div class="hidden-caption-content">The 'Voi pass' tab shows pricing options - this, and the next shot, are plans in Liverpool.</div>
  </div>
    <div class="pswp-gallery__item">
    <a href="./assets/images/7.PNG" data-pswp-width="1179" data-pswp-height="2556" target="_blank">
      <img src="./assets/images/7.PNG" alt="Caption 1">
    </a>
    <div class="hidden-caption-content">Scrolling through the different (Liverpool) monthly plans.</div>
  </div>
    <div class="pswp-gallery__item">
    <a href="./assets/images/8.PNG" data-pswp-width="1179" data-pswp-height="2556" target="_blank">
      <img src="./assets/images/8.PNG" alt="Caption 1">
    </a>
    <div class="hidden-caption-content">The 'Scan' tab prompts scanning a QR code on the vehicle handlebars or entering it manually to get started.</div>
  </div>
    <div class="pswp-gallery__item">
    <a href="./assets/images/9.PNG" data-pswp-width="1179" data-pswp-height="2556" target="_blank">
      <img src="./assets/images/9.PNG" alt="Caption 1">
    </a>
    <div class="hidden-caption-content">The 'help' tab has several options, which we'll look through one by one.</div>
  </div>
    <div class="pswp-gallery__item">
    <a href="./assets/images/10.PNG" data-pswp-width="1179" data-pswp-height="2556" target="_blank">
      <img src="./assets/images/10.PNG" alt="Caption 1">
    </a>
    <div class="hidden-caption-content">'How to ride bikes' has several following screens with advice.</div>
  </div>
    <div class="pswp-gallery__item">
    <a href="./assets/images/11.PNG" data-pswp-width="1179" data-pswp-height="2556" target="_blank">
      <img src="./assets/images/11.PNG" alt="Caption 1">
    </a>
    <div class="hidden-caption-content">We're yet to see if Voi bikes will provide less assistance (move more slowly) during initial rides until your 'intro' to the bike is finished, as other providers do.</div>
  </div>
    <div class="pswp-gallery__item">
    <a href="./assets/images/12.PNG" data-pswp-width="1179" data-pswp-height="2556" target="_blank">
      <img src="./assets/images/12.PNG" alt="Caption 1">
    </a>
    <div class="hidden-caption-content">'On the road, around the potholes' might be more fitting.</div>
  </div>
    <div class="pswp-gallery__item">
    <a href="./assets/images/13.PNG" data-pswp-width="1179" data-pswp-height="2556" target="_blank">
      <img src="./assets/images/13.PNG" alt="Caption 1">
    </a>
    <div class="hidden-caption-content">Most providers allow a journey to be 'paused' without the bike being in a geofenced parking zone, e.g. to pop into a shop; assumedly this is where any parking conflicts will arise.</div>
  </div>
    <div class="pswp-gallery__item">
    <a href="./assets/images/14.PNG" data-pswp-width="1179" data-pswp-height="2556" target="_blank">
      <img src="./assets/images/14.PNG" alt="Caption 1">
    </a>
    <div class="hidden-caption-content">Helmet advice is interesting given the bikes aren't provided with one!</div>
  </div>
    <div class="pswp-gallery__item">
    <a href="./assets/images/15.PNG" data-pswp-width="1179" data-pswp-height="2556" target="_blank">
      <img src="./assets/images/15.PNG" alt="Caption 1">
    </a>
    <div class="hidden-caption-content">We'd expect these zone types to match in Edinburgh, by and large.</div>
  </div>
    <div class="pswp-gallery__item">
    <a href="./assets/images/16.PNG" data-pswp-width="1179" data-pswp-height="2556" target="_blank">
      <img src="./assets/images/16.PNG" alt="Caption 1">
    </a>
    <div class="hidden-caption-content">What you're faced with if you choose 'Chat with Us' from the 'Help Centre' tab.</div>
  </div>
    <div class="pswp-gallery__item">
    <a href="./assets/images/17.PNG" data-pswp-width="1179" data-pswp-height="2556" target="_blank">
      <img src="./assets/images/17.PNG" alt="Caption 1">
    </a>
    <div class="hidden-caption-content">The Help Centre's 'Ridesafe Academy' links out to the web browser to <a href="https://ridesafe.voi.com/" target="_blank" rel="nofollow">this page →</a></div>
  </div>
  <div class="pswp-gallery__item">
    <a href="./assets/images/18.PNG" data-pswp-width="1179" data-pswp-height="2556" target="_blank">
      <img src="./assets/images/18.PNG" alt="Caption 1">
    </a>
    <div class="hidden-caption-content">The same is true of the Help Centre's 'Safety Content', which links out to <a href="https://www.voi.com/ride-safe" target="_blank" rel="nofollow">This page →</a></div>
  </div>
  <div class="pswp-gallery__item">
    <a href="./assets/images/19.PNG" data-pswp-width="1179" data-pswp-height="2556" target="_blank">
      <img src="./assets/images/19.PNG" alt="Caption 1">
    </a>
    <div class="hidden-caption-content">The 'Profile' tab has a range of controls to access personal details, payment methods, rewards and your rating / score.</div>
  </div>
  <div class="pswp-gallery__item">
    <a href="./assets/images/20.PNG" data-pswp-width="1179" data-pswp-height="2556" target="_blank">
      <img src="./assets/images/20.PNG" alt="Caption 1">
    </a>
    <div class="hidden-caption-content">'Wallet' includes any currently active Voi passes, and discount codes. This one is offered if I add my driving licence in the next five days (required to ride scooters).</div>
  </div>
  <div class="pswp-gallery__item">
    <a href="./assets/images/21.PNG" data-pswp-width="1179" data-pswp-height="2556" target="_blank">
      <img src="./assets/images/21.PNG" alt="Caption 1">
    </a>
    <div class="hidden-caption-content">Referral schemes are always popular when new services launch, as a quick way to get a free try-out.</div>
  </div>
  <div class="pswp-gallery__item">
    <a href="./assets/images/22.PNG" data-pswp-width="1179" data-pswp-height="2556" target="_blank">
      <img src="./assets/images/22.PNG" alt="Caption 1">
    </a>
    <div class="hidden-caption-content">Your 'activity score' looks like a rating based on how well you're following rules on parking and ending trips, and other guidance.</div>
  </div>
  <div class="pswp-gallery__item">
    <a href="./assets/images/23.PNG" data-pswp-width="1179" data-pswp-height="2556" target="_blank">
      <img src="./assets/images/23.PNG" alt="Caption 1">
    </a>
    <div class="hidden-caption-content">Activity Score 'How it works' 1 of 3</div>
  </div>
  <div class="pswp-gallery__item">
    <a href="./assets/images/24.PNG" data-pswp-width="1179" data-pswp-height="2556" target="_blank">
      <img src="./assets/images/24.PNG" alt="Caption 1">
    </a>
    <div class="hidden-caption-content">Activity Score 'How it works' 2 of 3</div>
  </div>
  <div class="pswp-gallery__item">
    <a href="./assets/images/25.PNG" data-pswp-width="1179" data-pswp-height="2556" target="_blank">
      <img src="./assets/images/25.PNG" alt="Caption 1">
    </a>
    <div class="hidden-caption-content">Activity Score 'How it works' 3 of 3</div>
  </div>
  <div class="pswp-gallery__item">
    <a href="./assets/images/26.PNG" data-pswp-width="1179" data-pswp-height="2556" target="_blank">
      <img src="./assets/images/26.PNG" alt="Caption 1">
    </a>
    <div class="hidden-caption-content">The link from 'Profile' for 'Give us some feedback' links to what appears to be a branded Google form to reach the team.</div>
  </div>
</div>