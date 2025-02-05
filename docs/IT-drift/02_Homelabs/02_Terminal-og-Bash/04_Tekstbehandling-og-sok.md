---
id: Tekstbehandling-og-sok
title: "3 - Tekstbehandling og søk"
sidebar-position: 4
---

Her skal vi se på grunnlegende funksjoner for å behandle tekst og søke i tekst i terminalen. 

## Navigere i tekst

I terminalen bruker vi ofte programmer for å lese lengre tekstfiler. De vanligste er:

### `less`
- Moderne og fleksibel
- Kan bla frem og tilbake
- Kan søke i teksten
```py
less fil.txt
```

### `more`
- Eldre og enklere
- Kan bare bla fremover
```py
more fil.txt
```

Det anbefales å gjøre seg kjent med `less`, da snarveiene her brukes mye for navigering i tekst i terminalen. 

:::tip nyttige snarveier i `less`
```py
less fil.txt         # Åpne fil i less


# Når less er åpen, kan disse snarveiene brukes:

# Bevegelse
Mellomrom eller f    # Én side frem
b                    # Én side tilbake
Pil ned eller Enter  # Én linje ned
Pil opp             # Én linje opp
g                    # Gå til starten av filen
G                    # Gå til slutten av filen
50g                  # Gå til linje 50

# Søking
/tekst              # Søk fremover etter "tekst"
?tekst              # Søk bakover etter "tekst"
n                   # Gå til neste søketreff
N                   # Gå til forrige søketreff

# Andre nyttige kommandoer
q                   # Avslutt less
h                   # Vis hjelpeside med alle kommandoer
v                   # Åpne filen i standardeditoren
&tekst              # Vis bare linjer som inneholder "tekst"
=                   # Vis filinformasjon (linjenummer etc.)
```
:::

## Vise eller åpne en tekstfil

For å se innholdet i en fil har du flere valg:

### 1. `cat`: Viser hele filen på én gang
   - Lite egnet for lange filer!
   ```py
   cat fil.txt  
   ```

### 2. `less`: Viser filen side for side
   -  God til større filer, kan søke og navigere effektivt
   ```py
   less fil.txt 
   ```

### 3. `head`: Viser starten av filen
   ```py
   head fil.txt      # Første 10 linjer

   # Flere linjer med opsjonen -n
   head -n 20 fil.txt # Første 20 linjer
   ```

### 4. `tail`: Viser slutten av filen
   ```py
   tail fil.txt      # Siste 10 linjer

   # Kontinuerlig oppdatering ved filendring med
   # opsjonen -f (nyttig for loggfiler)
   tail -f fil.txt   # Følg med på nye linjer 
   ```

## Redigere tekst

For tekstredigering i terminalen har du flere valg:

### 1. Nano
   - Enklest å lære
   - Viser kommandoer nederst
   - God for nybegynnere
   - Forhåndsinstallert på mange Linux-distribusjoner, som ubuntu.

### 2. Vim
   - Kraftig men kompleks
   - Krever tid å lære
   - Meget effektiv når du kan den
   - Forgjengeren `Vi` er ofte forhåndsinstallert
     - En enkel versjon med færre funksjoner

### 3. Emacs
   - Også kraftig og kompleks
   - Mer enn bare en editor
   - Populær blant programmerere

## Nano

Nano er den anbefalte editoren for nybegynnere:

Grunnleggende bruk:
```py
nano fil.txt    # Åpne/lag fil
```

:::tip Viktige kommandoer i nano
`(^ betyr Ctrl)`
- ^O: Lagre som (WriteOut)
- ^S: Lagre
- ^X: Avslutt
- ^K: Kutt linje
- ^U: Lim inn
- ^W: Søk i tekst
- ^G: Vis hjelp
:::

:::info Tid for oppgaver!
Gå til [oppgavene til denne delen](99_Oppgaver.md#del-3-tekstbehandling-og-søk)
:::