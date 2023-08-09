const showPopupBtn = document.getElementById('showPopupBtn');
const closePopupBtn = document.getElementById('closePopupBtn');
const popupOverlay = document.getElementById('popupOverlay');

function showPopup() {
  popupOverlay.style.display = 'block';
  setTimeout(() => {
    popupOverlay.querySelector('.popup').style.display = 'block';
  }, 3000);
  setTimeout(() => {
    closePopup();
  }, 6000); // Закриваємо popup після 5 секунд (5000 мілісекунд)
}

function closePopup() {
  popupOverlay.style.display = 'none';
  popupOverlay.querySelector('.popup').style.display = 'none';
}

showPopupBtn.addEventListener('click', showPopup);

closePopupBtn.addEventListener('click', closePopup);
