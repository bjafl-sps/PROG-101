---
id: Oppgaver
title: "Oppgaver"
sidebar-position: 99
---

# Praktiske oppgaver for å bli kjent med terminalen

Ved hver oppgave vil du finne følgende boks:

:::note innlevering
:::

I boksen er det instruksjoner på hva du skal skrive eller lagre i et tekstdokument
for å vise at du har gjennomført oppgaven. Bruk gjerne en enkel .txt fil, og du kan godt lagre 
svar på alle oppgavene i samme fil. 

:::tip Logg inn gjennom SSH
Hvis du jobber med Linux på en virtuell maskin, anbefales det å logge inn gjennom ssh, da det vil gi en noe bedre brukeropplevelse sammenlignet med å jobbe i vinduet til VirtualBox. [Følg instruksjonene her.](../01_Grunnoppsett/04_SSH/02_SSH_guide.md) Du kan også gjerne bruke nøkkelpar [som vist her.](../01_Grunnoppsett/04_SSH/03_SSH-og-nokkelpar.md)
:::

## Del 2.1: Grunnleggende navigering og filhåndtering

Oppgaver relatert til [2.1 - Filbaner og navigering](03_Navigering-og-filhandtering/01_Filbaner-og-navigering.md)

### Oppgave 1.1: Utforsk systemet
1. Åpne terminalen
2. Finn ut hvilken mappe du er i
3. List innholdet i mappen
4. List innholdet med detaljert visning
5. Hvilke forskjeller ser du mellom vanlig og detaljert visning?

:::note innlevering
Lagre utskrift av detaljert visning av mappeinnholdet i en fil, enten ved å markere og kopiere fra terminalvinduet, eller ved å bruke `>` ([Se Inndata, utdata og kjeding](05_Litt-mer-avansert/01_Litt-mer-avansert.md#inndata-utdata-og-kjeding))
:::

### Oppgave 1.2: Navigering
1. Gå til hjemmemappen din
2. Gå til rotmappen
3. Gå tilbake til hjemmemappen
4. Gå opp én mappe
5. Gå tilbake til forrige mappe du var i

:::note innlevering
Skriv opp kommandoene du brukte for hvert av punktene over.
:::

### Oppgave 1.3: Mappestruktur
1. Lag en ny mappe som heter "terminal_oppgaver"
2. Gå inn i den nye mappen
3. Lag tre undermapper: "dokumenter", "bilder" og "backup"
4. List innholdet for å verifisere at mappene ble opprettet
5. Gå inn i "dokumenter", deretter tilbake til "terminal_oppgaver"

:::note innlevering
Skriv opp kommando du brukte for å lage mappene. Lagre utskrift av mappeinnholdet i tekstfilen din.
:::
## Del 2.2: Filoperasjoner

:::info Oppgaver relatert til
[2.2 - Filoperasjoner](03_Navigering-og-filhandtering/02_Filoperasjoner.md)
:::

### Oppgave 2.1: Opprette filer
1. Lag en ny fil "notater.txt" i "dokumenter" mappen du laget i oppgave 1.3.
2. Lag en kopi av filen, velg navn på ny fil selv.
3. Omdøp den nye filkopien, velg navn selv.
4. List opp innholdet i mappen "dokumenter"

:::note innlevering
Skriv opp kommando du brukte for å lage ny fil, kopiere og omdøpe den. Lagre utskrift av mappeinnholdet i tekstfilen din.
:::

### Oppgave 2.2: Kopiere og flytte
1. Kopier "notater.txt" til "backup"-mappen
2. Lag en ny fil som heter "temp.txt" i "dokumenter"
3. Flytt "temp.txt" til "bilder"-mappen
4. Prøv å liste innholdet i alle tre mappene for å verifisere hvor filene er

:::note innlevering
Skriv ned kommandoene du brukte for å kopiere og flytte filer.
:::

### Oppgave 2.3: Filnavn og sletting
:::tip tips
Sjekk ut [notatet om filoperasjoner](03_Navigering-og-filhandtering/02_Filoperasjoner.md)
:::

1. Omdøp "temp.txt" til "flyttet.txt"
2. Lag en ny fil med mellomrom i navnet: "min fil.txt" - hva må du passe på her?
3. List opp filene i mappen, legg merke til hvordan filen med mellomrom ser ut.
4. Slett "flyttet.txt"
5. Verifiser at filen er borte

:::note innlevering
Skriv ned kommandoer du brukte for å omdøpe fil, lage ny fil og slette fil.
:::

## Del 3: Tekstbehandling og søk

:::info Oppgaver relatert til
[3 - Tekstbehandling](04_Tekstbehandling-og-sok.md)
:::

### Oppgave 3.1: Opprette og vise tekstfiler
1. Gå til "dokumenter"-mappen
2. Lag en ny fil som heter "notater.txt"
3. Åpne filen i `nano` og skriv minst 15 linjer tekst (det kan være korte linjer med ett ord)
4. Lagre og avslutt
5. Vis innholdet i filen med `cat`
6. Vis innhold fra filen med `tail` og `head`
7. Vis innholdet med `less`
8. Hva er forskjellen på disse?

:::note innlevering
- Lagre kopi av utskrift fra `tail` i tekstdokumentet. 
- Skriv kort om forskjellen på `cat`, `tail` og `head`. 
- Skriv også ned hvordan du lagret og lukket tekstfilen i `nano`
- Hvordan navigerte du i og lukket filen når du åpnet den i `less`?
:::

### Oppgave 3.2: Navigere i tekst
1. Åpne filen fra forrige oppgave i `less` og bruk `less` til å:
   - Søke etter et ord i teksten
   - Gå til slutten av filen
   - Gå tilbake til starten
   - Gå til en spesifikk linje

:::note innlevering
Skriv ned snarveiene (tastetrykk) du brukte i 2.
:::
### Oppgave 3.3: Navigere i man-side
:::tip tips 
Her brukes mange av de samme snarveiene som i `less`. Se sidene
[Navigere i tekst](04_Tekstbehandling-og-sok.md#navigere-i-tekst) og
om [manualen](02_Terminal-og-Bash.md#manualen-man).
:::

## Del 4: Tar du utfordringen?

:::info Oppgaver relatert til 
- [4 - Litt mer avansert](05_Litt-mer-avansert/01_Litt-mer-avansert.md)
- [grep](05_Litt-mer-avansert/02_grep.md)
- [wildcards](05_Litt-mer-avansert/03_wildcards.md)
:::

### Oppgave 4.1: Mappeorganisering
:::tip tips 
[Notatet om filoperasjoner](03_Navigering-og-filhandtering/02_Filoperasjoner.md) er nyttig for å løse denne.
:::

1. Lag følgende mappestruktur:
   ```
   prosjekt/
   ├── kode/
   │   ├── python/
   │   └── javascript/
   ├── data/
   │   ├── input/
   │   └── output/
   └── dokumentasjon/
   ```
2. Opprett en README.txt i hver mappe
3. Naviger mellom mappene på ulike måter (absolutte og relative stier)

:::note innlevering
Skriv ned kommandoer for 5 ulike navigeringer i filstrukturen, 
der du både bruker relative og absolutte filbaner/stier. 
:::

### Oppgave 4.2: Filoperasjoner med vilkår
> [Se notatet om wildcards](05_Litt-mer-avansert/03_wildcards.md)
1. Lag flere filer med ulike filendelser (.txt, .md, .py)
2. List kun filer med en bestemt filendelse
3. Kopier alle tekstfiler til en backup-mappe
4. Finn den største filen i mappehierarkiet
   :::tip tips
   - Denne løses med en kommando, med riktige opsjoner, men det kan være vanskelig å finne dem.
   - Prøv å lete i man-siden til `ls`
   :::

:::note innlevering
Skriv ned kommandoene du brukte for å liste bestemte filer og kopiere bare 
tekstfiler. Skriv ned kommando for å finne største fil i mappehierarkiet, 
hvis du har funnet den.
:::

### Oppgave 4.3: Systemutforskning
:::tip tips 
Sjekk ut [tabellen med kommandoer](#oversikt-over-relevante-kommandoer) nederst.
:::

1. Finn ut:
   - Hvem du er logget inn som
   - Hvilken versjon av operativsystemet du bruker
   - Hvor mye diskplass som er tilgjengelig
   - Hvilke prosesser som kjører

:::note innlevering
Skriv ned kommandoene du brukte.
:::

### Oppgave 4.4: Filinnhold
:::tip tips 
Sjekk ut notatene [wc](05_Litt-mer-avansert/04_wc.md) og
[grep](05_Litt-mer-avansert/02_grep.md)
:::

:::note først
Lag en kopi av man-siden til `bash` med `man bash > man_bash.txt`
:::

1. Vis de første 5 linjene av filen
2. Vis de siste 10 linjene
3. Tell antall linjer i filen
4. Finn alle forekomster av et bestemt ord
5. Tell antall ord i filen

:::note innlevering
Skriv ned kommandoer du brukte for å løse hver av oppgavene.
:::

### Oppgave 4.5: Søk i tekst med wildcards

:::tip tips
Bruk grep `grep` med passende opsjoner for å løse oppgavene
:::

:::note merk
Bruk filen fra forrige oppgave.
:::

1. Finn alle linjer som inneholder ordet "PATH"
2. Finn linjer som inneholder enten "alias eller "Alias"
3. Tell hvor mange ganger "shell" forekommer
4. Finn alle linjer som starter med "SHELL"
5. Finn linjer med ord som starter med bokstaven "c" og slutter på "bility"

:::note innlevering
- Kommandoene du brukte for hvert søk
- Antall treff du fant
- Eventuelle utfordringer du møtte på
:::

## Tips for å løse oppgavene

- Bruk `man` eller `--help` hvis du står fast
- Prøv å bruke Tab-completion når du skriver filnavn
- Husk at terminalen skiller mellom store og små bokstaver
- Skriv ned kommandoene du lærer for senere referanse
- Hvis noe ikke fungerer, les feilmeldingen nøye


:::tip hint
### Oversikt over relevante kommandoer
| Kommando | Eksempel | Forklaring |
|----------|----------|------------|
| `pwd` | `pwd` | Print Working Directory - viser hvor du er |
| `cd` | `cd Documents` | Change Directory - bytter mappe |
| `ls` | `ls` | List - viser innhold i mappen |
| `ls -l` | `ls -l` | List long - detaljert visning med rettigheter og størrelse |
| `mkdir` | `mkdir prosjekt` | Make Directory - lager ny mappe |
| `mkdir -p` | `mkdir -p a/b/c` | Lager hele mappestien hvis den ikke finnes |
| `touch` | `touch fil.txt` | Lager ny tom fil eller oppdaterer tidsstempel |
| `cp` | `cp fil.txt kopi.txt` | Copy - kopierer fil |
| `mv` | `mv gammel.txt ny.txt` | Move - flytter eller omdøper fil |
| `rm` | `rm fil.txt` | Remove - sletter fil (permanent!) |
| `rm -r` | `rm -r mappe` | Recursive remove - sletter mappe og innhold |
| `rmdir` | `rmdir tomMappe` | Remove Directory - sletter tom mappe |
| `cat` | `cat fil.txt` | Concatenate - viser innhold av fil |
| `head` | `head fil.txt` | Viser 10 første linjer |
| `head -n` | `head -n 5 fil.txt` | Viser 5 første linjer (default 10) |
| `tail` | `tail fil.txt` | Viser siste linjer (default 10) |
| `wc` | `wc fil.txt` | Word Count - teller linjer, ord og tegn |
| `grep` | `grep "ord" fil.txt` | Søker etter tekst i fil |
| `less` | `less fil.txt` | Viser innhold side for side |
| `nano` | `nano fil.txt` | Enkel tekstbehandler |
| `man` | `man ls` | Manual - viser hjelpeside for kommando |
| `date` | `date` | Viser dato og tid |
| `whoami` | `whoami` | Viser innlogget brukernavn |
| `df` | `df` | Disk Free - viser diskplass |
| `df -h` | `df -h` | Viser diskplass i lesbart format (GB/MB) |
| `free` | `free` | Viser minnebruk |
| `top` | `top` | Viser kjørende prosesser og systemstatus |
:::

:::tip opsjoner
Husk at disse kommandoene kan ha flere nyttige opsjoner - utforsk dem med `man`!
:::