const slider = document.getElementById('toggler');
let isClicked = false;

slider.addEventListener('click', () => {
  isClicked = !isClicked;

  if(isClicked) {
    slider.style.left = "60%";
  } else {
    slider.style.left = "5%";
  }
  
});
