const background-image = document.querySelector('.background-image');
const windowWidth = window.innerWidth / 5;
const windowHeight = window.innerHeight / 5 ;

background-image.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX / windowWidth;
  const mouseY = e.clientY / windowHeight;
  
  background-image.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
});
