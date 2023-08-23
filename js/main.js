let modifiers = {
    imgShowcaseThumbnailActive: 'img-showcase__thumbnail--active',
    siteHeaderCartModalOpen: 'site-header__cart-modal--open',
    lightboxOpen: 'lightbox--open'
}


// Site header cart link
const elSiteHeaderCartLink = document.querySelector('.js-site-header__cart-link');
const elSiteHeaderCartModal = document.querySelector('.site-header__cart-modal');


if (elSiteHeaderCartLink) {
    elSiteHeaderCartLink.addEventListener('click', function (evt) {
        evt.preventDefault();

        elSiteHeaderCartModal.classList.toggle(modifiers.siteHeaderCartModalOpen);

    });

}

// Img showcase
const elProductPageGallery = document.querySelector('.product-page__gallery');
const elImgShowcaseActiveImg = elProductPageGallery.querySelector('.img-showcase__active-img');
const elsImgShowcaseThumbnailButton = elProductPageGallery.querySelectorAll('.js-img-showcase-thumbnail-button');
const elsImgShowcaseThumbnail = elProductPageGallery.querySelectorAll('.img-showcase__thumbnail');

elsImgShowcaseThumbnailButton.forEach(function (elButton) {
    elButton.addEventListener('click', function () {
        // Remove active state from all buttons
        elsImgShowcaseThumbnail.forEach(function (elImgThumbnail) {
            elImgThumbnail.classList.remove(modifiers.imgShowcaseThumbnailActive);
        });

        // Add active state to clicked button
        elButton.parentElement.classList.add(modifiers.imgShowcaseThumbnailActive);

        // Update image src accordingly
        elImgShowcaseActiveImg.src = elButton.dataset.imgShowcaseBig;
        elImgShowcaseActiveImg.srcset = `${elButton.dataset.imgShowcaseBig} 1x, ${elButton.dataset.imgShowcaseRetina} 2x`;


    });
});

// LIGHBOX
const elLightboxToggler = document.querySelector('.js-lightbox-toggler');
const elLightbox = document.querySelector('.lightbox');
const elLightboxClose = document.querySelector('.js-lightbox__close');

if (elLightboxToggler) {
    elLightboxToggler.addEventListener('click', function () {
        elLightbox.classList.add(modifiers.lightboxOpen);
    });
};

if (elLightboxClose) {
    elLightboxClose.addEventListener('click', function () {
        elLightbox.classList.remove(modifiers.lightboxOpen);
    });
};


// THUMBNAIL CLICK

const elImgLightboxActiveImg = elLightbox.querySelector('.img-showcase__active-img');
const elsImgLightboxThumbnailButton = elLightbox.querySelectorAll('.js-img-lightbox-thumbnail-button');
const elsLightboxImgThumbnail = elLightbox.querySelectorAll('.img-showcase__thumbnail');

elsImgLightboxThumbnailButton.forEach(function (elButton) {
    elButton.addEventListener('click', function () {
        // Remove active state from all buttons
        elsLightboxImgThumbnail.forEach(function (elImgThumbnail) {
            elImgThumbnail.classList.remove(modifiers.imgShowcaseThumbnailActive);
        });

        // Add active state to clicked button
        elButton.parentElement.classList.add(modifiers.imgShowcaseThumbnailActive);

        // Update image src accordingly
        elImgLightboxActiveImg.src = elButton.dataset.imgShowcaseBig;
        elImgLightboxActiveImg.srcset = `${elButton.dataset.imgShowcaseBig} 1x, ${elButton.dataset.imgShowcaseRetina} 2x`;


    });
});



// Lightbox control

const elLightboxControlPrev = elLightbox.querySelector('.js-lightbox-control-prev');
const elLightboxControlNext = elLightbox.querySelector('.js-lightbox-control-next');

if (elLightboxControlNext) {
    elLightboxControlNext.addEventListener('click', function () {

        // Find active element
        const elActiveItem = elLightbox.querySelector('.img-showcase__thumbnail--active');

        // Remove active state from active element
        elActiveItem.classList.remove(modifiers.imgShowcaseThumbnailActive)


        let elNextActiveItem;
        if (elActiveItem.nextElementSibling === null) {
            elNextActiveItem = elsLightboxImgThumbnail[0];
        }
        else {
            elNextActiveItem = elActiveItem.nextElementSibling;
        }
        elNextActiveItem.classList.add(modifiers.imgShowcaseThumbnailActive);


        // Update image src accordingly
        elImgLightboxActiveImg.src = elNextActiveItem.children[0].dataset.imgShowcaseBig;
        elImgLightboxActiveImg.srcset = `${elNextActiveItem.children[0].dataset.imgShowcaseBig} 1x, ${elNextActiveItem.children[0].dataset.imgShowcaseRetina} 2x`;
    });
};


if (elLightboxControlPrev) {
    elLightboxControlPrev.addEventListener('click', function () {

        // Find active element
        const elActiveItem = elLightbox.querySelector('.img-showcase__thumbnail--active');

        // Remove active state from active element
        elActiveItem.classList.remove(modifiers.imgShowcaseThumbnailActive)


        let elNextActiveItem;
        if (elActiveItem.previousElementSibling === null) {
            elNextActiveItem = elsLightboxImgThumbnail[elsLightboxImgThumbnail.length - 1];
        }
        else {
            elNextActiveItem = elActiveItem.previousElementSibling;
        }
        elNextActiveItem.classList.add(modifiers.imgShowcaseThumbnailActive);


        // Update image src accordingly
        elImgLightboxActiveImg.src = elNextActiveItem.children[0].dataset.imgShowcaseBig;
        elImgLightboxActiveImg.srcset = `${elNextActiveItem.children[0].dataset.imgShowcaseBig} 1x, ${elNextActiveItem.children[0].dataset.imgShowcaseRetina} 2x`;
    });
};


// PRODUCT COUNT

const elProductQtyDecrementButton = document.querySelector('.js-product-quantity-decrement-button');
const elProductQtyIncrementButton = document.querySelector('.js-product-quantity-increment-button');

const elProductQty = document.querySelector('.product-info__quantity');

if (elProductQtyIncrementButton) {
    elProductQtyIncrementButton.addEventListener('click', function () {
        elProductQty.textContent = parseInt(elProductQty.textContent, 10) + 1;
    });
}
if (elProductQtyDecrementButton) {
    elProductQtyDecrementButton.addEventListener('click', function () {

        const qty = parseInt(elProductQty.textContent, 10);
        if (qty > 0) {
            elProductQty.textContent = qty - 1;
        }
    });
}
