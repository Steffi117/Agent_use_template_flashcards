# Spec: Therapieliste für Handtherapiegruppen

## Goal (one or two sentences)
Eine Einsseitige webseite, wo Patienten angemeldet werden können und die wichtigsten Daten für die Handtherapie dargestellt werden (Wie viele Einheiten haben sie verschrieben bekommen, welche Einheiten hatten sie schon.) Die Daten werden im Browser gespeichert.
## Users
Just me, on a laptop browser

## Features (numbered, so prompts can refer to them)
F1: Add a textfield, where you can put a name inside
F2: Add a second textfield with "verordnete Einheitenanzahl". Next to the Textfield make a Button "Hinzufügen". 
F3: Create a Table, where fields showed as colum and every name is a new line. 
F4: Create more colum with the name "Knete", "Papier", "Jenga", "Knöpfe", "Stift" and "Fingerübungen"
F5: Save in localStorage so they survive a page reload.
F6: Add a field with "durchgeführte Maßnahme", where you can choose the names of colum 3 to 8
F7: When "Name" and "durchgeführte Maßnahme" the same set a check on the write field in the table
F8: When the number of "Verordnete Einheitenanzahl" and the sum of checks in a line are the same, delete the line

## Acceptance criteria (how I know a feature works)
- F1: Empty fields cannot be summitted. After adding the form is cleared.
- F2: Name and "verordnete Einheitenanzahl" cannot be changed after "Hinzufügen"
- F7: in a fild could be multiple checks, when you klick on the "hinzufügen" button it is not necessesary to fill something in "Verordnete Einheitenanzahl"

## Out of scope (do NOT build)
- ⁠No login, no server, no database
- ⁠No frameworks or libraries (no React, no jQuery, no Bootstrap)
- ⁠No sound, no animations beyond simple CSS transitions
- ⁠No mobile app

## Look & feel
Simple, readable, one column, max width ~600px, one accent colour.


