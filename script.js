const wordPairForm = document.querySelector("#word-pair-form");
const englishWord = document.querySelector("#english-word");
const germanWord = document.querySelector("#german-word");
const wordPairList = document.querySelector("#word-pair-list");
const englishPracticeWord = document.querySelector("#english-practice-word");
const germanPracticeWord = document.querySelector("#german-practice-word");
const revealButton = document.querySelector("#reveal-button");
let wordPairs = [];
let currentCardIndex = 0;

// Load saved word pairs from the browser.
function loadWordPairs() {
  const savedWordPairs = localStorage.getItem("wordPairs");

  if (savedWordPairs !== null) {
    wordPairs = JSON.parse(savedWordPairs);
  }
}

// Save all word pairs in the browser.
function saveWordPairs() {
  localStorage.setItem("wordPairs", JSON.stringify(wordPairs));
}

// Show the English word of the current practice card.
function showPracticeCard() {
  germanPracticeWord.textContent = "";

  if (wordPairs.length === 0) {
    englishPracticeWord.textContent = "Keine Vokabeln vorhanden";
    revealButton.disabled = true;
    return;
  }

  if (currentCardIndex >= wordPairs.length) {
    currentCardIndex = 0;
  }

  englishPracticeWord.textContent = wordPairs[currentCardIndex].english;
  revealButton.disabled = false;
}

// Reveal the German word of the current practice card.
function revealGermanWord() {
  if (wordPairs.length > 0) {
    germanPracticeWord.textContent = wordPairs[currentCardIndex].german;
  }
}

// Display all entered word pairs in the list.
function showWordPairs() {
  wordPairList.textContent = "";

  for (let index = 0; index < wordPairs.length; index++) {
    const wordPair = wordPairs[index];
    const listItem = document.createElement("li");
    const wordText = document.createElement("span");
    const deleteButton = document.createElement("button");

    wordText.textContent = wordPair.english + " - " + wordPair.german;
    deleteButton.textContent = "Löschen";
    deleteButton.addEventListener("click", function () {
      deleteWordPair(index);
    });

    listItem.appendChild(wordText);
    listItem.appendChild(deleteButton);
    wordPairList.appendChild(listItem);
  }
}

// Remove a word pair and update the list.
function deleteWordPair(index) {
  wordPairs.splice(index, 1);
  saveWordPairs();
  showWordPairs();
  showPracticeCard();
}

// Add the entered word pair and clear the form.
function addWordPair(event) {
  event.preventDefault();

  const english = englishWord.value.trim();
  const german = germanWord.value.trim();

  if (english === "" || german === "") {
    return;
  }

  wordPairs.push({
    english: english,
    german: german
  });

  saveWordPairs();
  showWordPairs();
  showPracticeCard();
  wordPairForm.reset();
  englishWord.focus();
}

loadWordPairs();
showWordPairs();
showPracticeCard();
wordPairForm.addEventListener("submit", addWordPair);
revealButton.addEventListener("click", revealGermanWord);