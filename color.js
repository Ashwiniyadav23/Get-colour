const buttons = document.querySelectorAll('.color-box');

function getRandomHexColor() {
  let color = '#';
  const hexCharacters = '0123456789ABCDEF';
  for (let i = 0; i < 6; i++) {
    color += hexCharacters[Math.floor(Math.random() * 16)];
  }
  return color;
}

buttons.forEach((button) => {
  button.addEventListener('click', function() {
    const newColor = getRandomHexColor();
    this.style.backgroundColor = newColor;
    this.textContent = newColor; 
  });
});
