import './style.css';

interface Projekt {
  id: number;
  titel: string;
  kategorie: string;
  beschreibung: string;
}

const projekteListe: Projekt[] = [
  { id: 1, titel: "Mobile App (Android/iOS)", kategorie: "Mobile", beschreibung: "Entwicklung einer App mit BrainFlow." },
  { id: 2, titel: "SPS / CODESYS Steuerung", kategorie: "Embedded", beschreibung: "Steuerungsentwicklung für autonome mobile Roboter." },
  { id: 3, titel: "Portfolio Webseite", kategorie: "Frontend", beschreibung: "Moderne TypeScript & HTML Portfolioseite." }
];

// Funktion 1: Rendert die Projekte dynamisch ins DOM
function rendereProjekte(projekte: Projekt[]): string {
  return projekte.map(p => `
    <article class="projekt-karte">
      <h3>${p.titel} (${p.kategorie})</h3>
      <p>${p.beschreibung}</p>
    </article>
  `).join('');
}

// Funktion 2: Filtert Projekte nach Kategorie
function filtereNachKategorie(projekte: Projekt[], kategorie: string): Projekt[] {
  if (kategorie === "Alle") return projekte;
  return projekte.filter(p => p.kategorie === kategorie);
}


// DOM-Element für die Projektliste holen
const container = document.getElementById('projekte-liste');

// Funktion zur Aktualisierung der Anzeige
function aktualisiereAnzeige(kategorie: string): void {
  // Zwingende Null-Prüfung für TypeScript
  if (container) {
    const gefiltert = filtereNachKategorie(projekteListe, kategorie);
    container.innerHTML = rendereProjekte(gefiltert);
  }
}

// Initial beim Laden alle Projekte anzeigen
aktualisiereAnzeige('Alle');

// Alle Filter-Buttons auswählen und Event-Listener registrieren
const filterButtons = document.querySelectorAll<HTMLButtonElement>('.filter-btn');

filterButtons.forEach((btn: HTMLButtonElement) => {
  btn.addEventListener('click', (event: MouseEvent) => {
    const target = event.target as HTMLButtonElement;
    const gewaehlteKategorie = target.getAttribute('data-kategorie') ?? 'Alle';
    aktualisiereAnzeige(gewaehlteKategorie);
  });
});