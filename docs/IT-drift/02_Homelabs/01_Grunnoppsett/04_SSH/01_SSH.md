---
id: SSH-Intro
title: "SSH (Secure Shell)"
sidebar-position: 1
---

SSH (Secure Shell) er en kryptert nettverksprotokoll som gjør det mulig å koble seg trygt til andre datamaskiner over et nettverk. 

Den fungerer som en sikker tunnel mellom to maskiner, hvor all informasjon som sendes frem og tilbake blir kryptert. Dette betyr at selv om noen skulle fange opp datatrafikken, vil de ikke kunne lese innholdet.

## Fjerninnlogging til annen datamaskin / server

SSH lar deg få tilgang til terminalkommandoer på en ekstern server akkurat som om du satt direkte på maskinen. Her er noen nøkkelegenskaper ved SSH:

### Fordeler ved å bruke SSH
- Du kan administrere servere fra hvor som helst i verden
- Mulighet til å kjøre programmer og prosesser på serveren
- Enkel tilgang til filer og systemressurser
- Kan utføre systemvedlikehold og oppdateringer remotely

### Sikkerhet
- All kommunikasjon er kryptert ende-til-ende
- Sterk autentisering med nøkkelpar eller passord
- Ingen klartekst-passord sendes over nettverket
- Innebygd beskyttelse mot "man-in-the-middle" angrep

### Bruksområder
- Systemadministrasjon og vedlikehold
- Programutvikling direkte på serveren
- Overvåkning av systemprosesser og logger
- Kjøring av tunge beregninger på kraftige servere
- Automatisering av oppgaver via shell-scripts

Dette gjør SSH til et uvurderlig verktøy for utviklere, systemadministratorer og alle som trenger sikker fjerntilgang til servere og systemer.

## Innlogging / autentisering for tilgang til SSH

Det er hovedsakelig to måter å logge inn på ekstern datamaskin gjennom SSH:

### Passordbasert innlogging:
- Enkleste måten å komme i gang på
- Krever kun brukernavn og passord
- Mer sårbar for angrep siden passord kan:
  - Gjettes ved brute force
  - Fanges opp hvis man bruker svake passord
  - Kompromitteres hvis brukeren gjenbruker passord

### Nøkkelbasert innlogging (SSH keys):
- Bruker et par med kryptografiske nøkler:
  - Privat nøkkel (holdes hemmelig på din maskin)
  - Offentlig nøkkel (legges på serveren)
- Mye sikrere enn passord fordi:
  - Nøklene er matematisk generert og ekstremt vanskelige å knekke
  - Den private nøkkelen forlater aldri din maskin


> Anbefalt praksis i produksjonsmiljøer, altså når man ikke bare
  tester ut i et utviklings-/læringsmiljø:
>- Alltid bruke nøkkelbasert innlogging når mulig
>- Deaktivere passordinnlogging på servere
>- Bruke sterke passphrase på private nøkler
>- Sikre rettighetene på SSH-konfigurasjonsfiler
 
