import { WordGenerator } from "./WordGenerator.js";

function generateWords(event) {
  event.preventDefault();

  const resultBox = document.getElementById('results-list');
  resultBox.replaceChildren();  // removes all children in results

  const amount = document.getElementById('nums').value;
  const pattern = document.getElementById('pattern').value.toUpperCase();

  const customVocals = document.getElementById('vocals').value;
  const customConsonants = document.getElementById('consonants').value;
  
  const wordGenerator = new WordGenerator(
    customVocals || undefined,
    customConsonants || undefined
  );  // the undefined value will be replaced by default value in WordGenerator constructor

  for (let count = 1; count <= amount; count++) {
    const word = wordGenerator.generateWord(pattern);

    const wordElement = document.createElement('p');
    wordElement.textContent = word;

    resultBox.appendChild(wordElement);
  }
}

const generateButton = document.querySelector('#generate button');
generateButton.onclick = generateWords;
