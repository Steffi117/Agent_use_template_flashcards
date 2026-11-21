# Progress
## Done
- F1: Namenseingabe mit Formular und Submit-Button "Hinzufügen" erstellt.
- F1: Leere Namen werden nicht hinzugefügt; das Eingabefeld wird nach erfolgreichem Hinzufügen geleert.
- F2: Nach dem Hinzufügen wird eine neue Tabellenzeile mit festem Namen und einer Auswahl "Trinkprotokoll" angelegt.
- F3: Bei Auswahl "Ja" erscheint ein Eingabefeld für "ml".
- F3: Bei Auswahl "Nein" erscheint ein rotes "X".
- F4: Die Patientenliste wurde als Tabelle mit den Spalten "Name", "Trinkprotokoll" und "Ergebnis" umgesetzt.
- F4: Jeder neue Patient erscheint als neue Tabellenzeile.
- Das bisherige Listen-Layout wurde durch das Tabellenlayout in HTML, CSS und JavaScript ersetzt.
- Die grundlegenden Änderungen wurden im Browser noch nicht auf alle Anforderungen getestet.
- F4 überarbeitet: Die Tabelle hat nur noch die Spalten "Name" und "Trinkprotokoll".
- F4 überarbeitet: Bei "Ja" wird nur ein ml-Eingabefeld in der Trinkprotokoll-Spalte angezeigt.
- F4 überarbeitet: Nach Eingabe des ml-Wertes wird das Eingabefeld schreibgeschützt.
- F4 überarbeitet: Bei "Nein" wird in der Trinkprotokoll-Spalte ein festes rotes "X" angezeigt.

## Next
- F4 genauer festlegen: z. B. sollen weitere Daten oder eine feste Reihenfolge von Spalten ergänzt werden?
- Entscheidung treffen, ob zusätzliche Patientendaten in der Tabelle angezeigt werden sollen.
- Browser-Speicherung implementieren, sodass Patienten und Trinkprotokolle nach dem Neuladen erhalten bleiben.

## Decisions & notes
- Erste Tabelle: "Name", "Trinkprotokoll", "Ergebnis".
- Der Name wird beim Hinzufügen eingefroren und kann in der Tabelle nicht geändert werden.
- Das Formular wird nach dem Hinzufügen geleert.
- Die Anwendung bleibt bewusst einfach: nur HTML, CSS und JavaScript, keine Frameworks oder Server.
- Überarbeitete F4-Version: "Name" und "Trinkprotokoll"; in "Trinkprotokoll" erscheinen nur ml oder ein rotes X.

## Known problems
- F4 ist in der SPEC noch nicht vollständig spezifiziert.
- Die Daten werden aktuell noch nicht im Browser gespeichert.
- Das aktuelle Verhalten wurde noch nicht durch einen Browser-Test verifiziert.