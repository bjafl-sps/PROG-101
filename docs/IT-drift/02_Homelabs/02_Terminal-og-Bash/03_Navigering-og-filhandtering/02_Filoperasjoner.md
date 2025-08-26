---
id: Filoperasjoner
title: "2.2 - Filoperasjoner"
sidebar-position: 2
---

Her skal vi se videre på grunnleggende filoperasjoner for å opprette, kopiere, flytte og finne filer og mapper. 

## Lage filer og mapper

```py
# Lage ny tom fil
touch fil.txt
touch rapport.md notat.txt    # Lag flere filer samtidig

# Lage mapper
mkdir mappe
mkdir mappe1 mappe2          # Lag flere mapper
mkdir -p mappe/undermappe    # Lag mapper inkludert undermapper
```

## Kopiere (cp)

```py
# Kopiere filer
cp original.txt kopi.txt
cp fil.txt mappe/            # Kopier til en mappe
cp fil1.txt fil2.txt mappe/  # Kopier flere filer
cp -r mappe1 mappe2         # Kopier mappe og innhold
```

## Flytte og omdøpe (mv)

```py
# Flytte filer
mv fil.txt mappe/           # Flytt fil til mappe
mv *.txt mappe/            # Flytt alle .txt-filer

# Omdøpe filer (mv brukes også til dette)
mv gammel.txt ny.txt
mv fil.txt mappe/nyttNavn.txt  # Flytt OG omdøp

# Flytte flere filer
mv fil1.txt fil2.txt mappe/
```

## Slette (rm)

```py
# Slette filer
rm fil.txt
rm fil1.txt fil2.txt       # Slett flere filer

# Slette mapper
rmdir tomMappe            # Kun for tomme mapper
rm -r mappe              # Slett mappe og alt innhold (vær forsiktig!)
rm -i fil.txt            # Spør om bekreftelse før sletting
```

## Viktige tips

1. Vær ekstra forsiktig med `rm` - filer kan ikke gjenopprettes
2. Bruk `rm -i` for å få bekreftelse før sletting
3. Test gjerne med `ls` først for å se hva som vil bli påvirket
4. Bruk Tab-completion for å unngå skrivefeil
5. Hvis filnavn har mellomrom, bruk anførselstegn: "min fil.txt"

## Nyttige triks

Her er noen eksempler på smarte kommandoer som gjør arbeidet mer effektivt. 

:::tip Hva er * ?
Du vil forstå eksemplene under bedre senere, etter du har lest [notatet om wildcards](../05_Litt-mer-avansert/03_wildcards.md).
::: 

```py
# Filtrere liste over mappeinnhold
ls *.txt                  # Vis bare tekstfiler

# Opprette flere filer med mønster
touch test{1,2,3}.txt    # Lager test1.txt, test2.txt, test3.txt

# Flytte flere filer med wildcard
mv *{.jpg,.png} bilder/  # Flytter alle jpg- og png-filer

# Sikker sletting
rm -i *.txt              # Får bekreftelse for hver fil
```

:::caution Pass på!
- ALDRI kjør `rm -rf /` eller `rm -rf *` i rotmappen
- Vær forsiktig med wildcards (`*`) i rm-kommandoer
- Sjekk alltid at du er i riktig mappe før sletting
- Ta backup av viktige filer før større operasjoner
- Vær oppmerksom på at `mv` overskriver målfilen hvis den eksisterer
:::