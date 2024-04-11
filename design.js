let text = 'Hello, I am typing...';
let index = 0;
let typingElement = document.getElementById('typing');

function typeText() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 200); // The speed of typing, in milliseconds
  }
}

typeText();
