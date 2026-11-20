const wordPairForm = document.querySelector("#word-pair-form");
const englishWord = document.querySelector("#english-word");
const germanWord = document.querySelector("#german-word");
const wordPairs = [];

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

  wordPairForm.reset();
  englishWord.focus();
}

wordPairForm.addEventListener("submit", addWordPair);