---
id: Wildcards
title: "4.3 - Wildcards i terminalen"
sidebar-position: 3
---

Ofte ønsker vi å søke etter et mønster, eller gjøre operasjoner på filer/mapper som matcher med et mønster. Slik kan vi utføre handlinger på flere objekter samtidig, eller finne elementer og tekst uten å søke etter eksakte navn. Da bruker vi spesielle tegn som gjerne kalles "wildcards", som vi kan oversette til joker eller jokertegn på norsk. 

:::caution OBS
Når du gjør operasjoner med wildcards kan du ende opp med å slette eller endre mange filer på en gang! Vær spesielt forsiktig med kommandoer som `rm -rf *` som rekursivt sletter alle filer, mapper og undermapper fra der du står. 
:::

:::info Grunnleggende wildcards
- `*` - matcher null eller flere tegn
- `?` - matcher akkurat ett tegn
- `[]` - matcher ett av tegnene i klammeparentesene
- `[!]` - matcher ett tegn som IKKE er i klammeparentesene
- `{,}` - matcher ett av ordene i krøllparantesen (adskilt av komma)
- `^` - matcher starten av en linje
:::

## Vanlige bruksmåter med ls

```py
# Grunnleggende filmatching
ls *.txt           # Alle filer som slutter på .txt
ls data*           # Alle filer som starter med "data"
ls *2023*          # Alle filer som inneholder "2023"
ls file?.txt       # file1.txt, file2.txt, men ikke file10.txt
ls [abc]*.txt      # Filer som starter med a, b eller c

# Mer spesifikke mønstre
ls rapport_????    # Filer som starter med "rapport_" fulgt av 4 tegn
ls [0-9]*.txt      # Filer som starter med et tall
ls [!a-z]*        # Filer som IKKE starter med liten bokstav
```

## Wildcards med grep

```py
# Søk i filer
grep "ord" *.txt           # Søk i alle .txt-filer
grep "error" *.{log,txt}   # Søk i både .log og .txt-filer
grep "TODO" */*.py         # Søk i Python-filer i undermapper

grep "^ord" fil.txt        # Finn alle linjer som starter med 'ord' i fil.txt
```

## Andre vanlige kommandoer

```py
# Kopiering og flytting
cp *.txt backup/           # Kopier alle tekstfiler
mv *2023* arkiv/          # Flytt alle filer med "2023" i navnet

# Sletting (vær forsiktig!)
rm *.tmp                  # Slett alle .tmp-filer

```

:::tip Tips og fallgruver
- `*` matcher ikke skjulte filer (som starter med .)
  - Bruk `.??*` eller `.[!.]*` for å matche skjulte filer
- For å matche de faktiske tegnene * eller ?, bruk `\*` eller `\?`
:::

## Praktiske eksempler

```py
# Finne alle logger fra juni
ls *2023-06*.log

# Flytte alle bilder
mv *{.jpg,.png,.gif} bilder/

# Slette alle midlertidige filer
rm *{.tmp,.temp,~}

# Søke i kildekodefiler (som matcher de gitte filetternavnene)
grep "TODO" *{.py,.js,.java}