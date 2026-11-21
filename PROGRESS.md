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
- F6: Die Tabelle enthält zwischen "Name" und "Trinkprotokoll" eine Uhrzeit-Spalte mit einem Eingabefeld.
- F1-F6 überarbeitet: Patienten, Uhrzeiten und Trinkprotokollwerte werden im Browser gespeichert.
- F5 überarbeitet: Nach der ml-Eingabe wird der Wert als feste Textangabe gespeichert und angezeigt.
- Ungültiger oder leerer lokaler Speicher wird beim Laden als leere Liste behandelt.
- F7: Im Arztgespräch-Feld können "Durchgeführt", "Noch nicht durchgeführt" und "Nicht notwendig" ausgewählt werden.
- F7: Nach der Auswahl wird nur das grüne Häkchen, das rote X oder ein leeres Feld angezeigt; die Auswahl kann weiterhin geändert werden.
- F8: Im Transport-Feld können "Ja" und "Nein" ausgewählt werden.
- F8: Nach der Auswahl wird nur ein grünes Häkchen oder ein rotes X angezeigt und die Auswahl kann nicht mehr geändert werden.
- F9: Im Folgetermin-Feld kann ein beliebiger Text eingegeben werden; die Eingabe wird als feststehender Text angezeigt.
- F10: In der ersten Tabellenspalte befindet sich für jeden Patienten ein roter Rundknopf mit einem weißen Minus.
- F10: Beim Klicken auf den Rundknopf wird die entsprechende Tabellenzeile gelöscht.
- Beim erneuten Laden der Seite werden gespeicherte Patienten und ihre Angaben wiederhergestellt.
- Ungültige oder nicht lesbare gespeicherte Daten werden beim Laden als leere Liste behandelt.
- Der Seitentitel wurde auf "Warteliste LINAC" geändert.

## Next
- F4 genauer festlegen: z. B. sollen weitere Daten oder eine feste Reihenfolge von Spalten ergänzt werden?
- Entscheidung treffen, ob zusätzliche Patientendaten in der Tabelle angezeigt werden sollen.

## Decisions & notes
- Erste Tabelle: "Name", "Trinkprotokoll", "Ergebnis".
- Der Name wird beim Hinzufügen eingefroren und kann in der Tabelle nicht geändert werden.
- Das Formular wird nach dem Hinzufügen geleert.
- Die Anwendung bleibt bewusst einfach: nur HTML, CSS und JavaScript, keine Frameworks oder Server.
- Überarbeitete F4-Version: "Name" und "Trinkprotokoll"; in "Trinkprotokoll" erscheinen nur ml oder ein rotes X.
- Die fertige Tabelle enthält die Spalten Löschaktion, "Name", "Uhrzeit", "Trinkprotokoll", "Arztgespräch", "Transport" und "Folgetermin".
- Die Löschaktion steht als rote Rundschaltfläche mit Minus links in der Tabelle.
- Das Arztgespräch kann durch Auswahl geändert werden und zeigt danach das entsprechende Symbol oder ein leeres Feld.
- Die Transportauswahl wird nach der ersten Auswahl fest gespeichert und kann nicht mehr geändert werden.
- Der Folgetermin wird als einfacher Text eingegeben und nicht als Datum gespeichert.
- Alle Patientendaten werden unter einem einzigen lokalen Speicher-Schlüssel gespeichert.

## Known problems
- F4 ist in der SPEC noch nicht vollständig spezifiziert.
- Die Daten werden aktuell noch nicht im Browser gespeichert.
