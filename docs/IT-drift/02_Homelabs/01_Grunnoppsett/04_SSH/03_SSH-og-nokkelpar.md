---
id: SSH-Oppgave-Nokkelpar
title: "Oppgave - nøkkelbasert innlogging"
sidebar-position: 3
---

For å bli litt kjent med innlogging ved hjelp av nøkkelpar, vil denne oppgaven gå gjennom
hvordan en kan gå frem for å sette opp sikker autentisering ved hjelp av kryptografiske nøkler.

> #### Oppgaven består av
> 1. Bekrefte SSH-status
> 2. Generere SSH-nøkler
> 3. Overføre nøkkel til server
> 4. Teste tilkobling
> 5. Sikre SSH-konfigurasjonen

## 1. Verifiser SSH-status

På serveren:
```bash
# Sjekk SSH-status
sudo systemctl status ssh

# Sjekk hvilken port som lyttes på
sudo ss -tulpn | grep ssh
```

## 2. Generer SSH-nøkler

På din lokale maskin (Windows):
```bash
# Generer ny SSH-nøkkel
ssh-keygen -t ed25519 -C "homelab"

# Nøklene lagres vanligvis i:
# C:\Users\<brukernavn>\.ssh\id_ed25519 (privat nøkkel)
# C:\Users\<brukernavn>\.ssh\id_ed25519.pub (offentlig nøkkel)
```

## 3. Overfør nøkkel til server

### Metode 1: ssh-copy-id (Linux/Mac)
```bash
ssh-copy-id brukernavn@server-ip
```

### Metode 2: Kopiere fil (Windows)

Åpne et PowerShell-vindu på pc. Naviger til mappen som inneholder ssh-nøkkelen du har generert.

> Standard mappe på windows er `C:\Users\<ditt_brukernavn>\.ssh`

```bash
# Kopier filen fra windows til server
scp id_ed25519.pub brukernavn@server-ip:~/

# Du får beskjed om å skrive inn passord, dette er passordet for ditt brukernavn på serveren.
```

Logg deg så på server, og gjør følgende i terminalen (bash) når du står i din hjemmappe:

```bash
cat id_ed25519.pub >> .ssh/authorized_keys
```

### Metode 3: Manuell (Windows)
```bash
# Vis offentlig nøkkel
type C:\Users\<brukernavn>\.ssh\id_ed25519.pub

# Kopier innholdet

# På serveren:
mkdir -p ~/.ssh
nano ~/.ssh/authorized_keys
# Lim inn den offentlige nøkkelen på en ny linje
```

## 4. Test tilkobling

```bash
# Test SSH-tilkobling
ssh brukernavn@server-ip

# Hvis alt er riktig, skal du nå logge inn uten passord
```

## Vanlige problemer

### Problem: Tilkobling nektes
Sjekk:
- IP-adresse er korrekt
- SSH-tjenesten kjører
- Brannmur tillater SSH
- Rettigheter på .ssh-mappe

### Problem: Nøkkel aksepteres ikke
Sjekk:
- Rettigheter på .ssh-mappe og filer
```bash
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
```

## Dokumentasjon
Skriv ned følgende i et tekstdokument:
- Serverens IP-adresse
- Nummeret til nettverksporten som brukes til SSH
- Filbane til SSH-nøkler
