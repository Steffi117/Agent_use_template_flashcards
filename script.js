// Übernimmt das Hinzufügen eines Patienten aus dem Formular.
function addPatient(event) {
  event.preventDefault();

  const nameInput = document.getElementById("name-input");
  const unitsInput = document.getElementById("units-input");
  const measureSelect = document.getElementById("measure-select");
  const name = nameInput.value.trim();
  const units = unitsInput.value.trim();
  const measure = measureSelect.value;

  if (name === "") {
    nameInput.focus();
    return;
  }

  const patientExists = patientNameExists(name);

  if (!patientExists && (units === "" || Number(units) < 1)) {
    unitsInput.focus();
    return;
  }

  addMeasureToPatient(name, measure);

  if (!patientExists) {
    const measures = [];

    if (measure !== "") {
      measures.push(measure);
    }

    addPatientRow(name, units, measures);
    savePatient(name, units, measures);
  }

  nameForm.reset();
  measureSelect.value = "";
  nameInput.focus();
}

// Fügt den neuen Patienten als unveränderbare Tabellenzeile hinzu.
function addPatientRow(name, units, measures) {
  const patientList = document.getElementById("patient-list");
  const newRow = document.createElement("tr");
  const columnNames = [name, units, "", "", "", "", "", ""];
  const measureNames = ["Knete", "Papier", "Jenga", "Knöpfe", "Stift", "Fingerübungen"];

  for (let index = 0; index < columnNames.length; index++) {
    const newCell = document.createElement("td");
    newCell.textContent = columnNames[index];
    if (index >= 2) {
      const measureName = measureNames[index - 2];
      newCell.textContent = getMeasureChecks(measures, measureName);
    }
    newRow.appendChild(newCell);
  }

  patientList.appendChild(newRow);
}

// Gibt alle Häkchen für eine ausgewählte Maßnahme zurück.
function getMeasureChecks(measures, measureName) {
  if (measures === undefined) {
    return "";
  }

  let checks = "";

  for (let index = 0; index < measures.length; index++) {
    if (measures[index] === measureName) {
      checks = checks + " ✓";
    }
  }

  return checks.trim();
}

// Prüft, ob ein Name bereits in der Tabelle steht.
function patientNameExists(name) {
  const patientRows = document.querySelectorAll("#patient-list tr");

  for (let index = 0; index < patientRows.length; index++) {
    const nameCell = patientRows[index].querySelector("td");

    if (nameCell.textContent === name) {
      return true;
    }
  }

  return false;
}

// Sucht einen Patienten und ergänzt das ausgewählte Häkchen.
function addMeasureToPatient(name, measure) {
  const patientRows = document.querySelectorAll("#patient-list tr");

  for (let index = 0; index < patientRows.length; index++) {
    const nameCell = patientRows[index].querySelector("td");

    if (nameCell.textContent === name) {
      const measureNames = ["Knete", "Papier", "Jenga", "Knöpfe", "Stift", "Fingerübungen"];
      const measureIndex = measureNames.indexOf(measure);

      if (measureIndex !== -1) {
        const measureCell = patientRows[index].children[measureIndex + 2];
        measureCell.textContent = measureCell.textContent + " ✓";
        measureCell.textContent = measureCell.textContent.trim();
        saveMeasure(name, measure);
      }

      return true;
    }
  }

  return false;
}

// Speichert einen neuen Patienten im Browser.
function savePatient(name, units, measures) {
  const savedPatients = localStorage.getItem("patients");
  let patients = [];

  if (savedPatients !== null) {
    patients = JSON.parse(savedPatients);
  }

  patients.push({
    name: name,
    units: units,
    measures: measures
  });

  localStorage.setItem("patients", JSON.stringify(patients));
}

// Ergänzt eine Maßnahme für einen gespeicherten Patienten.
function saveMeasure(name, measure) {
  const savedPatients = localStorage.getItem("patients");
  const patients = JSON.parse(savedPatients);

  for (let index = 0; index < patients.length; index++) {
    if (patients[index].name === name) {
      if (patients[index].measures === undefined) {
        patients[index].measures = [];
      }
      patients[index].measures.push(measure);
    }
  }

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
    addPatientRow(patients[index].name, patients[index].units, patients[index].measures);
  }
}

// Verbindet das Formular mit der Funktion zum Hinzufügen.
const nameForm = document.getElementById("name-form");
nameForm.addEventListener("submit", addPatient);
loadPatients();