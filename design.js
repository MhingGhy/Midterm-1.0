let text = 'Hi there!I'm a web developer based in Baguio Province...';
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
