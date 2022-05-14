const popUp = document.querySelector('.popup');
const popUpImage = document.querySelector('.popup--img');
const closeBtn = document.querySelector('.popup--close');
const closeBtnImg = closeBtn.querySelector('img');
const worksImages = document.querySelector('.works--images-container');

function replaceImage(src, alt) {
  popUpImage.src = src;
  popUpImage.alt = alt;
}

function togglePopUp() {
  if (popUp.classList.contains('show')) {
    popUp.classList.toggle('opacity');
    setTimeout(() => popUp.classList.toggle('show'), 200);
  } else {
    popUp.classList.toggle('show');
    setTimeout(() => popUp.classList.toggle('opacity'), 200);
  }
}

function showPopUp(event) {
  let target = event.target;

  if (target.tagName != 'IMG') return;

  replaceImage(target.src, target.alt);
  togglePopUp();
}

function hidePopUp(event) {
  let target = event.target;

  if (target === popUp || target === closeBtn || target === closeBtnImg) {
    togglePopUp();
  }
}

worksImages.addEventListener('click', (event) => {
  showPopUp(event);
});

popUp.addEventListener('click', (event) => {
  hidePopUp(event);
});