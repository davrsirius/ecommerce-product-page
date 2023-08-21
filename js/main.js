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
const elImgShowcaseActiveImg = document.querySelector('.img-showcase__active-img');
const elsImgShowcaseThumbnailButton = document.querySelectorAll('.js-img-showcase-thumbnail-button');
const elsImgShowcaseThumbnail = document.querySelectorAll('.img-showcase__thumbnail');


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
const elLightBox = document.querySelector('.lightbox');
const elLightboxClose = document.querySelector('.js-lightbox__close');

if (elLightboxToggler) {
    elLightboxToggler.addEventListener('click', function () {
        elLightBox.classList.add(modifiers.lightboxOpen);
    });
};

if (elLightboxClose) {
    elLightboxClose.addEventListener('click', function () {
        elLightBox.classList.remove(modifiers.lightboxOpen);
    });
};

