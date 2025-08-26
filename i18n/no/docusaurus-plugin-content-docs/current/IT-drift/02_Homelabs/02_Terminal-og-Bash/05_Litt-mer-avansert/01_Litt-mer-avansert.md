---
id: Litt-mer-avanserte-tema
title: "4.1 - Litt mer avanserte tema"
sidebar-position: 1
---

# 4.1 - Kort introduksjon til noen litt mer avanserte tema

Til slutt skal vi kort introdusere noen andre grunnleggende, men også litt mer avanserte tema. 

På denne siden vil vi se på _Rettigheter og tillatelser;_ _Variabler og miljø;_ _Inndata, utdata og kjeding_ og _Pakkehåndtering_. Se også notatene om [grep](02_grep.md) og [wildcards](03_wildcards.md) og [wc](04_wc.md).


## Rettigheter og tillatelser

Unix-systemer har et detaljert rettighetssystem:
- Hver fil har rettigheter for eier, gruppe (som 'eier' filen) og andre
- Rettigheter kan være lese (r), skrive (w), kjøre (x)
- Se rettigheter med `ls -l`
- Endre rettigheter med `chmod`

:::info eksempel
"Tillatelseskoden" `rwxr-xr-x` kan vi oversette slik:
| Bruker | 'kode' | Tillatelser | Forklaring |
|---|---|---|--- |
| Eier | rwx |r, w og x | lese, skrive og kjøre |
| Gruppen | r-x | r og x | lese og kjøre|
| Andre | r-x | r og x |lese og kjøre|
:::

## Variabler og miljø

Miljøvariabler lagrer informasjon som alle programmer kan bruke.

:::note noen vanlige miljøvariabler
- `PATH`: Hvor systemet leter etter programmer
- `HOME`: Din hjemmemappe
- `USER`: Ditt brukernavn
:::

:::tip Tips
- Se alle miljøvariablermed `env`
- Lag ny miljøvariabel med `export NAVN=verdi`
:::

Du kan skrive ut verdien til en miljøvariabel ved hjelp av `echo`-kommandoen:

```py
echo $HOME  # Skriver ut filbanen til din hjemmappe
```

### Andre variabler

En miljøvariabel er egentlig bare en variabel. Vi kan lage andre variabler hvis vi for
eksempel skal bruke den samme filbanen flere ganger, og slik slippe å skrive den inn 
på ny hver gang:

```py
dokDir=~/Documents  # Lagrer filbanen til 'Documents' i hjemmappen til variabelen dokDir

cd $dokDir  # Navigerer til ~/Documents ved bruk av variabelen dokDir
```

Slike variabler vi definerer i terminalen, vil slettes og forsvinne når terminalen lukkes. 
Det spesielle med miljøvariabler er at de lastes inn på ny hver gang man åpner et nytt terminalvindu, 
og er slik alltid tilgjengelig. For å visuelt skille miljøvariabler fra andre variabler er det vanlig
å kun bruke store bokstaver som navn på miljøvariabler, som `HOME` som vi så på tidligere. 

## Inndata, utdata og kjeding

Ofte er det nyttig å gjøre noe annet med utdata fra en kommando enn å skrive det ut til terminalen. 
Det betegnes gjerne som å 'omdirigere' utdata. Vi kan lagre utdata fra `kommando` til `fil.txt`
ved å bruke symbolet `>`:

- `kommando > fil.txt`
  - Overskriver `fil.txt` hvis den finnes fra før.
  - (Lager en ny fil hvis den ikke finnes.)
- `kommando >> fil.txt`
  - Legger til utdata i slutten av `fil.txt` om den allerede finnes
  - (Lager en ny fil hvis den ikke finnes.)

Andre ganger ønsker vi å sende utdata videre til en annen funksjon, i stedet for å lagre utdata i en fil.
Da kan vi bruke symbolet `|` som kalles for en `pipe`. Det engelske ordet pipe betyr rør på norsk, som passer godt, for vi lager et slags rør fra utdata generert av én kommando til inndata for en annen kommando:

  ```py
  ls -l | grep ".txt"    # ls lister mappeinnhold, og grep filtrerer 
                         # listen slik bare linjer som inneholder .txt vises
  ```

## Pakkehåndtering (Package Management)

En pakkehåndterer (Package Manager) er et program som holder styr på installert software. Den
kan brukes til å installere, avinstallere og oppdatere programmer på en enkel måte. Pakkedata
om tilgjengelig software hentes (som standard) fra verifiserte kilder på internett. En kan se
på det litt som Play / App Store på mobiltelefonen.

Ubuntu/Debian:
```py
sudo apt update          # Oppdater pakkelisten
sudo apt install program # Installer program
sudo apt upgrade         # Oppdater alle programmer
```

macOS (med Homebrew):
```py
brew update             # Oppdater pakkelisten
brew install program    # Installer program
brew upgrade            # Oppdater alle programmer
```

Windows
```py
winget install program  # Installer program
winget upgrade --all    # Oppdater alle programmer
```

:::info Tid for oppgaver!
Gå til [oppgavene til denne delen](../99_Oppgaver.md#del-4-utfordringsoppgaver)
:::