# Personal Developer Portfolio – ESA 1

Diese Webseite ist eine interaktive Portfolioseite zur Präsentation meiner Entwicklungs- und Softwareprojekte (Mobile Apps, Embedded/SPS-Systeme und Webanwendungen) im Rahmen der Lehrveranstaltung *Front-End Development*.

## Aufbau & Technische Entscheidungen

1. **Semantisches HTML & Barrierefreiheit (Modul 01)**
   - Konsequenter Verzicht auf generische `div`-Container zugunsten semantischer HTML5-Elemente (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
   - Einsatz von `aria-label` in der Navigation zur Gewährleistung barrierefreier Bedienbarkeit.
   - Erfolgreich validiert durch ein Google Lighthouse Accessibility-Audit mit einem Score von >= 80 (dokumentiert in `lighthouse.png`).

2. **TypeScript & Interaktivität (Modul 02)**
   - **Typsicherheit:** Definition eines `interface Projekt` zur exakten Strukturierung der Projektdaten.
   - **Funktionale Logik:** Typisierte Funktionen (`rendereProjekte`, `filtereNachKategorie`, `aktualisiereAnzeige`) mit expliziten Parametern und Rückgabetypen.
   - **Array-Methoden:** Nutzung von `.map()` für das Erzeugen des HTML-Markups und `.filter()` für das interaktive Filtern nach Kategorien.
   - **Sicheres DOM-Handling:** Strikte Null-Prüfungen (`if (container)`) und Nullish Coalescing (`??`), um Laufzeitfehler zur Compile-Zeit auszuschließen.

3. **Build & Tooling**
   - Aufgesetzt mit Vite und Vanilla TypeScript für eine schnelle Entwicklungsumgebung und zuverlässigen Production-Build (`npm run build`) ohne Typfehler.