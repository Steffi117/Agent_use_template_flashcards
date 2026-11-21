// Übernimmt das Hinzufügen eines Patienten aus dem Formular.
function addPatient(event) {
  event.preventDefault();

  const nameInput = document.getElementById("name-input");
  const unitsInput = document.getElementById("units-input");
  const addButton = nameForm.querySelector("button");
  const name = nameInput.value.trim();
  const units = unitsInput.value.trim();

  if (name === "") {
    nameInput.focus();
    return;
  }

  if (units === "" || Number(units) < 1) {
    unitsInput.focus();
    return;
  }

  nameInput.disabled = true;
  unitsInput.disabled = true;
  addButton.disabled = true;
}

// Verbindet das Formular mit der Funktion zum Hinzufügen.
const nameForm = document.getElementById("name-form");
nameForm.addEventListener("submit", addPatient);