# Frontend Basics & Backend Basics - Semesterprojekt

### Aufgabenstellung:
Produktkategorien und Produkte sollen aus einer Datenbank ausgelesen und in Form von Listen im Frontend browsable dargestellt werden. Ein Warenkorb soll implementiert werden und über eine Session im Backend verwaltet werden. Einzelne Produkte sollen dem Warenkorb hinzugefügt bzw. aus diesem gelöscht werden können (mehrfach).<br/>

**Topics:** Objektorientierter Ansatz, Model-View-Controller (MVC), GUI-Entwicklung, Datenbankkommunikation, Warenkorbverwaltung, Ajax, HTTP(S)-Requests, JSON, PHP-Session/-Cookies, REST-Full Service;

**Tech Stack:** Javascript, CSS, HTML, jQuery, PHP, Apache, MySQL(MariaDB), bootstrap, npm, webpack

### Hinweise zur Installation/Ausführung:
Datenbank-Datei (database.sql) in Datenbanksystem importieren.<br/>
Vor dem Start der Anwendung/Website folgende Parameter auf das lokale System anpassen:
    - controller.js -> constructor: Variable "serverIndexPath"


Die Anwendung sollte über die index.html aus dem "dist"-Ordner gestartet werden.<br/>
npm und webpack wurden in das Projekt eingearbeitet.


### Ziele der Lehrveranstaltung (allgemein):
###### Frontend:
Die Studierenden sollen ohne Vorlagen eine Weboberfläche mit HTML und CSS 
aufbauen können und mit Hilfe von Javascript darauf Interaktionen ermöglichen, 
sowie die Kommunikation mit einem Server bewerkstelligen.
###### Backend:
Die Studierenden sollen ohne Vorlagen eine Web-Anwendung mit PhP in 
objektorientierter und wartbarer Weise gegen eine definierte Schnittstelle 
programmieren können, der eine verständliche schriftliche Planung voraus geht.

### Ziele Frontend (konkret):
 - eine grafische Benutzeroberfläche mit Hilfe des CSS Frameworks Bootstrap erstellen
 - durch Javascript Interaktionen auf dieser Oberfläche durch zu führen (insb. Events Handling)
 - mit Hilfe des Frameworks jQuery und Ajax Requests mit einem Server zu interagieren
 - grundlegend eine moderne GUI Strategie für REST-APIs zu entwerfen

### Ziele Backend (konkret):
 - theoretische Kenntnisse zur Erstellung von serverseitigen Applikationen auf Basis von PHP wiederzugeben
 - serverseitige Applikationen auf Basis von PHP zu implementieren
 - theoretische Kenntnisse zum HTTP-Protokoll, sowie zum Zusammenspiel zwischen AJAX und PHP wiederzugeben
 - Datenbanken, sowie Datenbankverbindungen zu erstellen
 - RESTful Web Services zu implementieren und zu verwenden
 - Datenaustausch via JSON zu implementieren
