# Spec: Warteliste für die Strahlentherapie
## Goal (one or two sentences)
Eine Einsseitige webseite, wo Patienten angemeldet werden können und die wichtigsten Daten für die heutige Therapie zusammengefasst dargestellt werden können. Die Daten werden im Browser gespeichert.
## Users
Just me, on a laptop browser
## Features (numbered, so prompts can refer to them)
F1: Add a textfield, where you can put a name inside
F2: After click on the button "Hinzufügen" there should be a next field, with "Trinkprotokoll" and select "Ja" or "Nein". 
F3: If "Ja", there should be a field with "ml" where you can write inside. If "Nein" there should be an red X.
F4: Now Create a Table, where fields showed as colum and every name is a new line. 
F5: If the "ml" input is done write it in the table without a visible field and write the "ml" on the right side to the input. 
F6: Now create a field "Uhrzeit" between "Name" an "Trinkprotokoll", where you can write a Time inside.
F7: The next column "Arztgespräch", should have three options to select. Options: A green check, for "durchgeführt", a red X for "noch nicht durchgeführt" and a empty field for "nicht notwendig". Don't do "Auswahl"
F8: The next Column "Transport" should just have two options to choose, Yes shown as green check and no as red X
F9: In the next colum "Folgetermin" should be field, where you can write inside, after clicking "Hinzufügen" there can't be done any changes. It should be empty at the beginning
F10: For deleting a line sould be a red circle button with a white minus inside

## Acceptance criteria (how I know a feature works)
- F1: Empty fields cannot be summitted. After adding the form is cleared.
- F2: Name cannot be changed after "Hinzufügen"
- F3: Name and "Trinkprotokoll" should not be erased
- F4: The input from F3 should be implemented as Information and can´t be changed., after a pressed enter. Don't write "Ja", write only the "ml" input in the column "Trinkprotokoll". The 
- F7: In the finished table should be just shown the check, the X an the empty field. To select should be shown the written things. It should be can changed anytime
- F8:In the finished table should be just shown the check an the X, it can't be changed. To select shoul be shown Yes and No
- F9: It should not be a field where you can put a date inside, just to bewritten by the user, also don't date just letters
- F10: The buttons should deleting when pushed by the user. The button should on the left side of the table

## Out of scope (do NOT build)
- ⁠No login, no server, no database
- ⁠No frameworks or libraries (no React, no jQuery, no Bootstrap)
- ⁠No sound, no animations beyond simple CSS transitions
- ⁠No mobile app
## Look & feel
Simple, readable, one column, max width ~600px, one accent colour.
