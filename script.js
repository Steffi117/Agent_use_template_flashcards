const wordPairForm = document.querySelector("#word-pair-form");
const englishWord = document.querySelector("#english-word");
const germanWord = document.querySelector("#german-word");
const wordPairList = document.querySelector("#word-pair-list");
let wordPairs = [];

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
  wordPairForm.reset();
  englishWord.focus();
}

loadWordPairs();
showWordPairs();
wordPairForm.addEventListener("submit", addWordPair);