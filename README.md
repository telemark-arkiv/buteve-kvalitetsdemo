# buteve-kvalitetsdemo
En proof-of-concept løsning på realtime dashboard for kvalitet på nettsidene til Buskerud, Vestfold og Telemark.

## Forutsetninger
Du trenger [Node/IO.js](https://nodejs.org/) satt opp på maskinen du skal bygge/kjøre løsningen fra.
Du trenger en konto hos [Firebase](https://www.firebase.com/) for realtime backend-løsning.
Du trenger å ha en api-key fra [AChecker](http://achecker.ca/register.php) og en api-key til [Googles PageSpeed Insight](https://developers.google.com/speed/pagespeed/insights/) som du aktiverer i 
[Google Developer Console](https://console.developers.google.com/)

## Installasjon
Last ned fra GitHub
```sh
$ git@github.com:zrrrzzt/buteve-kvalitetsdemo.git
```

Gå inn i den nedlastede mappen og kjør setup-scriptet
```sh
$ npm run setup
```

For å bygge nettsiden kjøres byggescriptet
```sh
$ npm run build
```

Innholdet i mappen dist kan nå lastes opp til en hvilken som helst webserver.

## Datafangst

Sett opp en database hos firebase.

Åpne filen config/index.js og fyll ut de nødvendige feltene

**FIREBASE_URL** url til din firebase-konto

**FIREBASE_DB** databasen du skal benytte hos firebase

**ACHECKER_ID** Din id-nøkkel hos AChecker

**GOOGLE_API_KEY** Din API nøkkel for Googles PageSpeed Insight

For å hente inn nyeste data kjøres collectorscriptet
```sh
$ npm run collector
```

## Utvikling

Dersom du ønsker å tilpasse dashboardet for andre nettsteder enn de som er lagt inn her må du gjøre endringer i to filer.

Du må endre SITES oppføringen i config/index.js for å settes opp datafangst for andre nettsteder.
 
I app/scripts/app.js må du endre navn på innholdet i headerene (linje 31 - 32).
For å vise innhentet data endrer du instans-propertien i alle ShowStatus og ShowScore oppføringene til å matche id til oppringene i SITES
