---
id: Filbaner-og-navigering
title: "2.1 - Filbaner og navigering"
sidebar-position: 1
---

På datamaskinen din er filer organisert i et hierarki av mapper (også kalt kataloger). Det er noen fundamentale forskjeller i hvordan Windows og Unix-baserte systemer (Linux, macOS) organiserer dette hierarkiet:

### Windows filsystem
:::note kjennetegn i windows
- Starter med en diskbokstav (f.eks. `C:`, `D:`)
- Hovedstasjonen er vanligvis `C:`
- Bruker backslash (`\`) som skilletegn
- Eksempel filbane: `C:\Users\dittnavn\Documents\fil.txt`
- Skiller ___ikke___ mellom store og små bokstaver (ikke case-sensitive)
:::

  :::tip Standard mappestruktur i Windows
  - `C:\Windows` - systemfiler
  - `C:\Program Files` - installerte programmer
  - `C:\Users` - brukermapper
  - `C:\Users\dittnavn` - din personlige mappe
  :::

### Unix/Linux filsystem
:::note kjennetegn i linux
- Starter fra en enkelt rotmappe (`/`)
- Ingen diskbokstaver - andre disker "mountes" inn i filsystemet
- Bruker vanlig skråstrek (`/`) som skilletegn
- Eksempel filbane: `/home/dittnavn/dokumenter/fil.txt`
- Skiller mellom store og små bokstaver (case-sensitive)
:::

  :::tip Standard mappestruktur i Linux
  - `/bin` - grunnleggende systemkommandoer
  - `/home` - brukermapper
  - `/home/dittnavn` - din personlige mappe
  - `/usr` - programmer og data
  - `/etc` - konfigurasjonsfiler
  :::

Når du jobber med stier i terminalen, er det viktig å være klar over disse forskjellene. For eksempel vil en Windows-sti som `C:\Users\John\Documents` måtte skrives som `/home/john/dokumenter` på et Unix-system. I moderne Windows kan du ofte bruke fremoverskråstrek `/` i stedet for bakoverskråstrek `\`, men dette er ikke garantert å fungere i alle programmer.

:::important Merk forskjellen!
- Husk `\` i Windows og `/` i Linux
- Husk at store og små bokstaver alltid er viktig i Linux (men ikke i Windows)
:::

## Arbeidsmappe (engelsk: Working Directory)

Når du jobber i terminalen, er du alltid i en bestemt mappe. Dette er arbeidsmappen din, og alle relative filbaner tar utgangspunkt i denne. Tenk på det som "hvor du står" i filsystemet. Kommandoen `pwd` (print working directory) viser hvor du er.


## Relative og absolutte filbaner

Det finnes to måter å spesifisere en filbane:

:::note absolutt filbane
   - Starter fra roten av filsystemet
   - Begynner med `/` (Linux/Unix) eller en stasjonsbokstav `C:\` (Windows)
   - Beskriver hele veien til filen
   - Eksempel: 
        - `/home/bruker/dokumenter/rapport.txt` (Linux)
        - `C:\Users\bruker\Documents\rapport.txt` (Windows)
   - Fungerer uansett hvor du er i filsystemet
:::

:::note Relativ filbane
   - Beskriver veien fra der du er nå (arbeidsmappen)
   - Bruker spesielle symboler:
     - `.` betyr "nåværende mappe"
     - `..` betyr "opp én mappe"
   - Eksempel: 
     - `../dokumenter/rapport.txt` (Linux)
     - `..\dokumenter\rapport.txt` (Windows)
   - Kortere å skrive, men avhenger av hvor du er
:::

## Navigering

For å bevege deg mellom mapper bruker du kommandoen `cd` (change directory). Her er noen vanlige måter å bruke den på:

```bash
cd dokumenter       # Går inn i mappen "dokumenter"
cd ..               # Går opp én mappe
cd ~                # Går til din hjemmappe (Linux)
cd ~/dokumenter     # Går til dokumenter i hjemmemappen (Linux)
cd /                # Går til rotmappen
cd -                # Går tilbake til forrige mappe du var i
```

:::tip tab og ""
- Bruk Tab-tasten for automatisk fullføring av mappenavn
- Hvis et mappenavn inneholder mellomrom, må du bruke anførselstegn: `cd "Mine Dokumenter"`
:::

## Skriv ut mappeinnhold og fildetaljer

For å se innholdet i en mappe bruker du `ls` (list). Dette fungerer både i Linux og om du bruker terminal / PowerShell på Windows. Om du bruker det eldre skallet `cmd` på Windows, må man i stedet bruke kommandoen `dir`. Ved å kjøre `ls` (eller `dir`) skrives det ut en liste over filer og mapper som finnes i arbeidsmappen (eller i en annen mappe om man bruker argumenter, mer om dette senere).

### Mer om `ls`
`ls`-kommandoen er en av de du vil bruke mest, og har mange nyttige opsjoner:

```bash
ls -l      # Detaljert liste
ls -a      # Vis skjulte filer
ls -h      # Menneskelesbare størrelser
ls -R      # Rekursiv listing (undermapper)
ls -S      # Sorter etter størrelse
ls -t      # Sorter etter tid
```

Du kan kombinere opsjoner:
```bash
ls -lha    # Detaljert liste, med skjulte filer og lesbare størrelser
```

Kommandoen godtar også argument, slik at du kan få en liste over innhold i andre mapper enn den du står i:
```bash
ls ~/dokumenter -la   # Detaljert liste, med skjulte filer, over 
                      # innholdet i mappen 'dokumenter' i din hjemmappe.
```

:::important Tid for oppgaver!
Gå til [oppgavene til denne delen](../99_Oppgaver.md#del-1-grunnleggende-navigering-og-filhåndtering)
:::