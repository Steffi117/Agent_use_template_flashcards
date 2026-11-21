// Übernimmt das Hinzufügen eines Patienten aus dem Formular.
function addPatient(event) {
  event.preventDefault();

  const nameInput = document.getElementById("name-input");
  const unitsInput = document.getElementById("units-input");
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

  addPatientRow(name, units);
  nameForm.reset();
  nameInput.focus();
}

// Fügt den neuen Patienten als unveränderbare Tabellenzeile hinzu.
function addPatientRow(name, units) {
  const patientList = document.getElementById("patient-list");
  const newRow = document.createElement("tr");
  const columnNames = [name, units, "", "", "", "", "", ""];

  for (let index = 0; index < columnNames.length; index++) {
    const newCell = document.createElement("td");
    newCell.textContent = columnNames[index];
    newRow.appendChild(newCell);
  }

  patientList.appendChild(newRow);
}

// Verbindet das Formular mit der Funktion zum Hinzufügen.
const nameForm = document.getElementById("name-form");
nameForm.addEventListener("submit", addPatient);