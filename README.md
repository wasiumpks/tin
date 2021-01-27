# TIN

Projekt z przedmiotu Technologie Internetowe


## Technologie
- Node.JS
- express.js
- sequelize 
- mysql2
- ejs
- bcryptjs

## Dokumentacja
**1. Instrukcja uruchomienia projektu** 
- nalezy rozpakowac archiwum z kodem zrodlowym
- trzeba przejsc do katalogu z kodem zrodlowym
- trzeba uruchomic terminal w katalogu
- w terminalu trzeba uruchomic docker za pomoca polecenia docker-compose up
- w terminalu trzeba uruchomic aplikacje za pomoca npm start(jesli nie ma node modules nalezy je pobrac)
- po sprawdzeniu kroku 2(Instrukcja instalacji i konfiguraci bazy danych) trzeba wpisac w przegladarce localhost:3000


  
**2. Instrukcja instalacji i konfiguraci bazy danych**
- gdy jest uruchomiony docker trzeba wejsc w przegladarce pod adres phpmyadmin localhost:8183 oraz trzeba zalogowac sie root:root
- trzeba uruchomic zakladke sql trzeba wpisac CREATE SCHEMA IF NOT EXISTS `tin`;  a nastepnie kliknac wykonaj
- jesli init.js w 16 linijce ma sync({force: true}) to nie trzeba tworzyc tabel oraz ich wypelniac poczatkowymi wartosciami aplikacja sama usunie aktualne tabele oraz wstawi dane zawarte w init.js
wpp nalezy wejsc w baze danych tin oraz w zakladke sql i wkleic zawartosc skryptu sql tworzacego tabele(katalog sql plik tin_create) oraz zawartosc skryptu sql uzupelniajacego tabele(katalog sql plik tin_init)
- baza jest gotowa do uzycia

**3. Aktualny diagram schematu bazy danych**
- znajduje sie w katalogu sql(projekt.png) oraz po uruchomieniu aplikacji na stronie glownej
