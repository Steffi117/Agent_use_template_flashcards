# Spec: Therapieliste für Handtherapiegruppen

## Goal (one or two sentences)
Eine Einsseitige webseite, wo Patienten angemeldet werden können und die wichtigsten Daten für die Handtherapie dargestellt werden (Wie viele Einheiten haben sie verschrieben bekommen, welche Einheiten hatten sie schon.) Die Daten werden im Browser gespeichert.
## Users
Just me, on a laptop browser

## Features (numbered, so prompts can refer to them)
F1: Add a textfield, where you can put a name inside
F2: Add a second textfield with "verordnete Einheitenanzahl". Next to the Textfield make a Button "Hinzufügen". 
F3: Now Create a Table, where fields showed as colum and every name is a new line. 

## Acceptance criteria (how I know a feature works)
- F1: Empty fields cannot be summitted. After adding the form is cleared.
- F2: Name and "verordnete Einheitenanzahl" cannot be changed after "Hinzufügen"

## Out of scope (do NOT build)
- ⁠No login, no server, no database
- ⁠No frameworks or libraries (no React, no jQuery, no Bootstrap)
- ⁠No sound, no animations beyond simple CSS transitions
- ⁠No mobile app

## Look & feel
Simple, readable, one column, max width ~600px, one accent colour.


