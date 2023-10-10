const colorPicker = document.getElementById('colorPicker');
const colorDisplay = document.getElementById('colorDisplay');

colorPicker.addEventListener('input', (event) => {
  const selectedColor = event.target.value;
  colorDisplay.style.backgroundColor = selectedColor;
});
