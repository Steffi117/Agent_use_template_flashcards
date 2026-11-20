const wordPairForm = document.querySelector("#word-pair-form");
const englishWord = document.querySelector("#english-word");
const germanWord = document.querySelector("#german-word");
const wordPairList = document.querySelector("#word-pair-list");
const wordPairs = [];

// Display all entered word pairs in the list.
function showWordPairs() {
  wordPairList.textContent = "";

  for (const wordPair of wordPairs) {
    const listItem = document.createElement("li");
    listItem.textContent = wordPair.english + " - " + wordPair.german;
    wordPairList.appendChild(listItem);
  }
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

  showWordPairs();
  wordPairForm.reset();
  englishWord.focus();
}

wordPairForm.addEventListener("submit", addWordPair);