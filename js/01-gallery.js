import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const galleryMakeup = makeGallery(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', galleryMakeup);
galleryEl.addEventListener("click", containerClick);

function makeGallery (galleryItems) {
return galleryItems.map(item => {
    return `<li class="gallery__item"><a class="gallery__link" href="${item.original}" onclick="event.preventDefault()"><img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"></img></a></li>`;  
   
    })
.join(' ');
// console.log(creatGallery);
};
function containerClick (event) {
    if(event.target.nodeName !== 'IMG' ) {
        return
    }

    const instance = basicLightbox.create(
        `<img src="${event.target.dataset.source}"></img>`
    )
    instance.show()
}

 
   

