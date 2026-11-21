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
  savePatient(name, units);
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

// Speichert einen neuen Patienten im Browser.
function savePatient(name, units) {
  const savedPatients = localStorage.getItem("patients");
  let patients = [];

  if (savedPatients !== null) {
    patients = JSON.parse(savedPatients);
  }

  patients.push({
    name: name,
    units: units
  });

  localStorage.setItem("patients", JSON.stringify(patients));
}

// Lädt alle gespeicherten Patienten beim Öffnen der Seite.
function loadPatients() {
  const savedPatients = localStorage.getItem("patients");

  if (savedPatients === null) {
    return;
  }

  const patients = JSON.parse(savedPatients);

  for (let index = 0; index < patients.length; index++) {
    addPatientRow(patients[index].name, patients[index].units);
  }
}

// Verbindet das Formular mit der Funktion zum Hinzufügen.
const nameForm = document.getElementById("name-form");
nameForm.addEventListener("submit", addPatient);
loadPatients();