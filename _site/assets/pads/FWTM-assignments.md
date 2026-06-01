### 05—The Monster
Hier das [Template der ganzen Erstausgabe](https://friendswiththemonster.github.io/assets/templates/251017_ITSA-frankenstein1818_all.zip).

#### Paged.js
Hier findest du ein [Web-to-Print-Template](http://friendswiththemonster.github.io/assets/templates/251219_frankenstein_paged.zip). Das Template funktioniert mit Paged.js und braucht einen lokalen Server. Um diesen zu Starten, öffne den Ordner, in dem dein Template liegt (cd + `[filepath]`) im Terminal (MacOS) oder der Eingabeaufforderung (Windows) und gib `python -m http.server` ein, um den Server zu starten.



### 04—Span Dance

In dieser Aufgabe geht es um   __mehrspaltigen__ Satz. Lies dafür diesen [Artikel über Square Span](https://archive.is/Jfog0), eine [alternative Art, Texte zu setzen und zu lesen](https://jiajiahui.github.io/images/chapter5_1.jpg?crc=252417915), die 1948 von Robert Andrews präsentiert wurde. Im [Video-Tutorial](https://drive.google.com/file/d/1WN7MPEjeT6W9gRRxcZn0XgSFQ8QU8C4g/view?usp=share_link) lernst du unterschiedliche Wege kennen, diese mehrspaltigen Layouts zu bauen. Wir konzentrieren uns in dieser Aufgabe auf geteilte Spalten, die über das Absatzformat (nicht über die Textrahmen-Optionen) definiert werden. Die unterschiedlichen Absatzformate lassen sich wie in Aufgabe 7 verketten. Absatz- und Spaltenumbrüche lassen sich manuell oder automatisiert mit Suchen & Ersetzen oder GREP einbauen. 

Hier ein [Indesign Template](https://itsalive25.github.io/assets/templates/250516_ITSA-frankenstein1818_7.zip) von Kapitel 7 (dem letzten Kapitel von Band 1). 

---


### 03—The Edge of Glory

Schau dir das [Video-Tutorial](https://drive.google.com/file/d/1zdLUaWWhENBpqcL0syNKFaJ0qQ-WHsa1/view?usp=share_link) zur Aufgabe an und lade das [Indesign-Template](https://itsalive25.github.io/assets/templates/250521_ITSA-frankenstein1818_4-6.zip) mit Kapitel 4–6 herunter.  

__Hinweis:__ Es gibt die Möglichkeit, Textrahmen vor Textumfluss zu schützen (eventuell z.B. sinnvoll beim Kolumnentitel) dafür Rahmen anklicken, cmd+B oder Rechtsklick > Textrahmenoptionen und ganz unten einen Haken bei _Ignore Text Wrap_ setzen 

__Achtung:__ Um uns in dieser Aufgabe ganz auf die Satzart zu konzentrieren, ist alles andere verboten — keine neuen Schriften- oder größen, keine Linien, keine Effekte (Schlagschatten etc), keine Farbe (sowieso)

---

### 02—Format follows Format (follows Fuction)

1. Lade dir die [InDesign-Vorlage](https://friendswiththemonster.github.io/assets/templates/251017_ITSA-frankenstein1818_chapter1.zip) mit dem ersten Kapitel herunter. Untersuche inwiefern die Absatzformate aufeinander basieren und wozu die Funktion [nächstes Format](https://www.sachaheck.net/blog/indesign/indesign-next-style) nützlich könnte. (💡Sie erlaubt, den Text __noch__ schneller zu formatieren.) Experimentiere damit, indem du die Reihenfolgen änderst und die Format(kett)e über das gesamte Buch laufen lässt.  

__Zum Beispiel__ könntest die Formate nach den Schriftgrößen S M L anlegen und in einer entsprechenden Reihenfolge verketten. Auf S folgt M, folgt L, folgt wiederum S. Anstelle von Schriftgrößen können sich die Formate auch durch Einzüge, Satzart etc unterscheiden. Versuche, dich beim Experimentieren zunächst auf einen einzelnen Parameter zu konzentrieren.  

__Inspiration__ könntet ihr außerdem in diesem [Vortrag von Fraser Muggeridge](https://www.youtube.com/watch?v=-RXsEIPsXIk) _Justified and unjustified setting (at the same time)_ finden.

Bitte ladet 6 Doppelseiten in der Rubrik _Abgaben_ hoch.


---



### 01—global/regular expression/print


Lade dir die [InDesign-Vorlage](https://itsalive25.github.io/assets/templates/250507_ITSA-letter1-3_%20Folder.zip) der ersten vier Briefe aus der Erstausgabe von Frankenstein herunter und mach dich mit Hilfe [dieser Plattform](https://www.typogrep.de/)(oder irgendeiner anderen ) mit [GREP](https://de.wikipedia.org/wiki/Grep) vertraut.  
1. In diesem [Tutorial](https://www.youtube.com/watch?v=BDObDUpT0dA) erfährst du, dass es zwei Arten gibt, GREP in Indesign zu verwenden (Suchen/Ersetzen im ganzen Text und GREP-Stile im Absatzformat). Probiere beide aus, um den Text gezielt umzugestalten. Teste zunächst einfache GREP Befehle, wie zum Beispiel `\l` für alle Kleinbuchstaben (L wie Lowercase) die du in diesem [Glossar](https://www.typogrep.de/) findest.
2. Formuliere nun mit Hilfe von [Lookbehinds und Lookaheads](https://www.typogrep.de/nuetzliches/syntax-referenz#look-arounds) komplexere GREP-Befehle, wie z.B. `\w+(?=!)` (findet jedes Wort vor einem Ausrufezeichen!). 
3. Gestalte den Text mit Hilfe von GREP und untersuche, ob du dabei neue __Lesarten__ und __Bedeutungsebenen__ findest und wie du auf eine interessante Art auf diese hinweisen kannst.  

__Beispiel__  
- `(?<=I\s)\l+`  findet alle Worte (bestehend aus Kleinbuchstaben) _nach_ einem `I`  
- `(?<=I\s)` Lookbehind sucht nach `I mit einem Space dahinter`  
- `\l+` findet Kleinbuchstaben in beliebiger Anzahl (bis etwas anderes kommt zB ein Wortzwischenraum)  

__Wichtig:__ Dir Hilfe beim Schreiben der Befehle zu suchen ist erlaubt, die Textrahmen zu verschieben nicht.

__Außerdem:__ Hier noch ein [Video-Tutorial](https://drive.google.com/open?id=1VAXnnqLoBJyWTqvVcNqpdIwro_acrD_J&usp=drive_fs), dass ich nach dem Kurs am Freitag für euch gemacht habe.

---

### 00—paste & print  (Teil II)
Im zweiten Teil der Aufgabe, geht es darum die Scans in einem doppelseitigem Indesign Dokument zu platzieren (Format wählt ihr [gemeinsam], es darf allerdings nicht größer als A4 sein, damit wir es noch im Labor auf einem A3 Bogen drucken können). Dabei soll nicht gelayoutet werden, sondern die Elemente sind so zu platzieren, wie im Original-Buch (mittig bleibt mittig, rechts, links, oben, unten etc). 

Unterschiedliche Elemente dürfen sich auch überlagern. Dabei bietet es sich manchmal an, in zwei Gängen zu drucken, sodass die überdruckten Teile noch etwas schwärzer werden. Für zwei Druckgänge braucht ihr allerdings auch zwei Druckdateien...

Ziel ist, mindestens 16 Seiten in eurem (Indesign-)Dokument zu haben. Druckt die Datei als Broschüre – entweder per Broschürendruck in Indesign oder exportiert ein Einzelseiten-PDF aus Indesign und druckt es über Adobe Acrobat als Broschüre aus ODER baut einen Druckbogen wie im Basisjahr Editorial-Design. Bindet die Broschüre mit einer Klammerheftung im Labor und überlegt euch für den Umschlag ggf ein anderes (schwereres oder farbiges oder...?) Papier. 

Tragt euch bevor ihr druckt, in einen [Besprechungs-Termin](https://docs.google.com/spreadsheets/d/1y28y0jpRnLUZ41XC21SVaKSAhTKJOaCe8bMC8gfknnM/edit?pli=1&gid=596355154#gid=596355154) am 5. oder 12.11. ein.

---



### 00—cut & copy  (Teil I)
Findet euch zu zweit in Teams zusammen. Stellt euch gegenseitig eure Bücher vor. Zeigt euch, was ihr mehr und was ihr weniger mögt. Zeil der Übung ist, aus zwei Büchern eins zu machen. 

Vergleicht folgende Aspekte der Bücher miteinander:  
Titel  
Rücken  
Schnitt  
Titelei  
Kapitelstart  
Impressum  
Seitenzahl 17  
Überschrift–Unterzeile–Textbeginn o.Ä.  
(falls separat: ein Textbeginn)  
Ein Textende  
Ein kleines a, ein großes R  
Fußnote, wenn vorhanden  
Marginalie, wenn vorhanden  

Entscheidet als Team, welche (Buchkörper-)Teile aus den zwei Büchern in eurem Buch landen sollen. Um die Körperteile zu sammeln, nutzt entweder die Scanner im CoLAB, die Scanfunktion eurer Smartphones oder irgendein anderes Tool (Kamera/Buchscanner in der Bib/...?). 



