//helper function
function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error(`please check selector:"${selection}" there is an error`);
  }
}

//constructor
function Gallery(element) {
  this.container = element;
  this.list = [...element.querySelectorAll('.img')];
  this.modal = getElement('.modal');
  this.mainImage = getElement('.main-img');
  this.imageName = getElement('.image-name');
  this.modalImages = getElement('.modal-images');
  this.closeBtn = getElement('.close-btn');
  this.prevBtn = getElement('.prev-btn');
  this.nextBtn = getElement('.next-btn');
  this.container.addEventListener(
    'click',
    function (e) {
      if (e.target.classList.contains('img')) {
        this.openModal(e.target, this.list);
      }
    }.bind(this)
  );
}

//proto
Gallery.prototype.openModal = function (selected, list) {
  this.setMainImage(selected);
  this.modalImages.innerHTML = list
    .map(function (image) {
      return `<img src="${
        image.src
      }" data-id="${image.dataset.id}" title="${image.title}" alt="${image.alt}" class="${selected.dataset.id === image.dataset.id ? 'modal-img selected' : 'modal-img'}"/>`;
    })
    .join('');
  this.modal.classList.add('open');
  console.log(this);
};

Gallery.prototype.setMainImage = function (selected) {
  this.mainImage.src = selected.src;
};

//instances
const waves = new Gallery(getElement('.waves'));
const space = new Gallery(getElement('.space'));
