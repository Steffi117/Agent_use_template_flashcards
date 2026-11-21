// Übernimmt das Hinzufügen eines Namens aus dem Formular.
function addName(event) {
  event.preventDefault();

  const nameInput = document.getElementById("name-input");
  const name = nameInput.value.trim();

  if (name === "") {
    nameInput.focus();
    return;
  }

  nameInput.value = "";
  nameInput.focus();
}

// Verbindet das Formular mit der Funktion zum Hinzufügen.
const nameForm = document.getElementById("name-form");
nameForm.addEventListener("submit", addName);