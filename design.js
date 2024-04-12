// Select all the elements that you want to apply the typing effect to
const elements = document.querySelectorAll('.typing-effect');

// Loop through each element
elements.forEach(element => {
  const text = element.innerText;
  let index = 0;
  element.innerText = '';

  // Create a timer to add each character with a delay
  const timer = setInterval(() => {
    element.innerText = text.substring(0, index);
    if (index < text.length) {
      element.innerText += '|'; // Display the cursor symbolizing typing
      index++;
    } else {
      element.innerText = text; // Remove the cursor symbol when the text is fully typed
      index = 0; // Reset the index to start typing from the beginning
    }
  }, 100); // Adjust the delay 
});



const textElement = document.getElementById('typewriter-text');
const text = textElement.innerHTML;
textElement.innerHTML = '';

let index = 0;

function typeWriter() {
  if (index < text.length) {
    textElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 40); // Adjust the typing speed by changing the delay (in milliseconds)
  }
}

typeWriter();




const titleElement = document.getElementById('glowing-heading');

function startGlowing() {
  titleElement.classList.add('glowing-effect');
}

function stopGlowing() {
  titleElement.classList.remove('glowing-effect');
}

// Usage example
startGlowing(); // Start the glowing effect
// stopGlowing(); // Stop the glowing effect


const containerElement = document.querySelector('.container');
const imageElement = document.querySelector('.about img');

containerElement.addEventListener('mouseover', function() {
  imageElement.style.filter = 'brightness(200%)';
});

containerElement.addEventListener('mouseout', function() {
  imageElement.style.filter = '';
});
