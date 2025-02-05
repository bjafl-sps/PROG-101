---
id: Terminal-og-Bash
title: "1 - Terminal, skall og bash"
sidebar-position: 2
---

# 1 - Bli kjent med terminalen og skallet Bash

Terminalen er et tekstbasert grensesnitt for å kommunisere med datamaskinen din. I stedet for å klikke med musen, skriver du kommandoer som forteller datamaskinen nøyaktig hva du vil den skal gjøre. Selv om det kan virke skummelt i begynnelsen, gir terminalen deg kraftige verktøy for å jobbe mer effektivt. Mange utviklere foretrekker terminalen fordi den gir mer presis kontroll og mulighet for automatisering av oppgaver.

## Kommandolinjeprosessor (skall)

Et skall er programmet som tolker kommandoene du skriver i terminalen. Tenk på det som en tolk mellom deg og datamaskinens operativsystem. Når du skriver en kommando, er det skallet som:
1. Leser det du har skrevet
2. Tolker hva du mener
3. Utfører handlingen
4. Viser resultatet tilbake til deg

### Ulike skall (engelsk: shell)

Akkurat som det finnes mange forskjellige programmeringsspråk, finnes det flere typer skall. Hvert skall har sine egne fordeler og spesialiteter, men de grunnleggende prinsippene er like. De mest vanlige er:
- Bash (Bourne Again Shell)
- Zsh (Z Shell)
- PowerShell (Windows)
- Fish (Friendly Interactive Shell)

#### UNIX / Linux

På Unix-baserte systemer (som Linux og macOS) er Bash det mest utbredte skallet. Det kommer som standard på de fleste Linux-distribusjoner og er kjent for å være:
- Kraftig og fleksibelt
- Godt dokumentert
- Kompatibelt med eldre Unix-skall
- Støttet av et stort brukerfellesskap

macOS brukte tidligere Bash som standard, men har nå byttet til Zsh, som er en modernisert versjon med flere funksjoner.

#### Windows

Windows har to hovedtyper skall:
1. __Command Prompt (cmd.exe)__
   - Det tradisjonelle Windows-skallet
   - Begrenset funksjonalitet
   - Bruker forskjellig syntaks fra Unix-skall

2. __PowerShell__
   - Moderne og kraftig
   - Objektorientert tilnærming
   - Bedre integrasjon med Windows-systemer
   - Kan også installeres på Linux og macOS

Windows 10 og nyere støtter også Windows Subsystem for Linux (WSL), som lar deg kjøre et fullverdig Linux-system direkte i Windows. Dette gir deg tilgang til Bash og andre Unix-verktøy.

## Bash

Bash er ikke bare et skall, det er også et skriptspråk. Dette betyr at du kan:
- Kombinere kommandoer
- Lage variabler
- Bruke kontrollstrukturer (if, for, while)
- Lagre sekvenser av kommandoer i filer (skript)

### Viktige kommandoer

Her er de mest grunnleggende kommandoene du bør kjenne til:

Filsystem:
```py
pwd                    # Vis nåværende mappe
ls                     # List filer og mapper
cd mappenavn           # Bytt mappe
mkdir mappenavn        # Lag ny mappe
rmdir mappenavn        # Slett tom mappe
touch filnavn          # Lag ny tom fil
rm filnavn             # Slett fil
cp kilde mål           # Kopier fil
mv gammel ny           # Flytt/omdøp fil
```

Visning og redigering:
```py
cat fil.txt            # Skriv ut hele filen til terminal
less fil.txt           # Vis filen side for side
head fil.txt           # Skriv ut første 10 linjer til terminal
tail fil.txt           # Skriv ut siste 10 linjer til terminal
nano fil.txt           # Åpne fil i Nano editor
```

Systeminfo:
```py
date                   # Vis dato og tid
whoami                 # Vis brukernavn
df -h                  # Vis diskplass
free -h                # Vis minnebruk
top                    # Vis kjørende prosesser
```

### STORE og små bOKstAvER

I Unix-systemer er store og små bokstaver forskjellige. Dette betyr at:
- `Dokument.txt`, `dokument.txt` og `DOKUMENT.TXT` er tre forskjellige filer
- Kommandoer som `LS` eller `Ls` vil ikke fungere, det må være `ls`
- Dette gjelder også mappenavn og nesten alt annet i terminalen

Dette er en vanlig kilde til feil for nybegynnere, så vær ekstra oppmerksom på dette.

### Argumenter og parametre

Kommandoer kan ta ulike typer input som endrer hvordan de oppfører seg:

1. Argumenter:
   - Filer eller mapper kommandoen skal jobbe med
   - Kommer etter kommandoen
   - Eksempel: `cat fil.txt` (fil.txt er argumentet)

2. Opsjoner/flagg:
   - Starter med `-` (kort form) eller `--` (lang form)
   - Endrer hvordan kommandoen oppfører seg
   - Eksempel: `ls -l` (-l er en opsjon)

3. Kombinasjoner:
   ```py
   ls -l dokumenter     # -l er opsjon, dokumenter er argument
   cp -r mappe1 mappe2  # -r er opsjon, mappe1 og mappe2 er argumenter
   ```

### Manualen (man)

Manualen er den innebygde dokumentasjonen i Unix-systemer. Den er ditt viktigste verktøy for å lære nye kommandoer.

### Slå opp en side

```py
man ls     # Vis manualen for ls
man cp     # Vis manualen for cp
man man    # Ja, manualen har til og med en manual!
```

### Søk etter en side

Hvis du ikke vet nøyaktig hvilken kommando du trenger:

```py
man -k [søkeord]  # Søk i alle manualsider

# Eksempel:
man -k file       # Finn alle kommandoer relatert til filer
```

### Finne frem i en man-side

Man-sider er organisert i seksjoner og følger en standard struktur:
1. NAME: Kort beskrivelse
2. SYNOPSIS: Hvordan kommandoen brukes
3. DESCRIPTION: Detaljert beskrivelse
4. OPTIONS: Tilgjengelige opsjoner
5. EXAMPLES: Eksempler på bruk
6. SEE ALSO: Relaterte kommandoer

:::info Navigering i man
- Mellomrom: Neste side
- b: Forrige side
- /søkeord: Søk fremover
- n: Neste treff
- N: Forrige treff
- q: Avslutt
:::

:::tip man og less
Navigering i `man` bruker (stort sett) samme snarveier som ved bruk av `less` som vi ser på i delen som handler om [Tekstbehandling og søk](04_Tekstbehandling-og-sok.md)
:::

