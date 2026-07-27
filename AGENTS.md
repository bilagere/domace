# Domaće – Projektanleitung

## Ziel und Technologie

- Domaće ist eine deutschsprachige, ruhige Editorial-Website rund um Familienleben, Rezepte, Zuhause, Routinen und Feste.
- Stack: Astro 7, TypeScript und komponentenlokales CSS. Es gibt **keine UI-Library** und keine Client-Frameworks.
- Priorität: wiederverwendbare Komponenten, semantisches HTML, Responsive Design, gute Lesbarkeit und eine warme, zurückhaltende Bildsprache.
- Die Entwürfe in `design/mockups/` sind die dauerhafte visuelle Referenz. Nicht pixelgenau kopieren, sondern ihre Hierarchie, Abstände und Muster sauber in Komponenten übersetzen.

## Projektstruktur

```text
src/
  components/
    layout/       # Seitengerüste und größere Kompositionen
    ui/           # wiederverwendbare UI- und Inhaltsbausteine
  design/         # Tokens, Schriften, Reset, globale Stile und Systemdokumentation
  layouts/        # BaseLayout importiert alle globalen Styles
  pages/          # Astro-Routen; aktuell die Startseite
  types/          # gemeinsame TypeScript-Typen
public/
  images/         # produktive Bildassets
  fonts/          # lokale Display-Schrift
design/mockups/   # Referenzbilder und Styleguide, nicht für die Auslieferung
```

## Designsystem

Die verbindliche Dokumentation liegt in `src/design/README.md`.

- Verwende ausschließlich Werte aus `src/design/tokens.css` für Farben, Typografie, Abstände, Breiten und Interaktionen.
- Keine neuen frei erfundenen Hex-Werte, Schriftgrößen oder Abstände in Komponenten, wenn ein passendes Token existiert.
- Schriftrollen: `--font-display` für Überschriften, `--font-sans` für Fließtext und UI, `--font-script` nur für persönliche, handschriftliche Akzente.
- Die gemeinsame Trennlinie wird über `ui/Divider.astro` umgesetzt.
- Für Seitenbreiten und vertikalen Rhythmus bevorzugt `ui/Container.astro` und `ui/PageSection.astro` einsetzen.
- Standard-Breakpoints: `compact` 640px, `medium` 768px, `wide` 1024px. Mobile zuerst prüfen; niemals horizontalen Seitenüberlauf erzeugen.

## Komponentenregeln

- Vor dem Anlegen einer Komponente prüfen, ob eine Variante, ein Prop oder ein Slot einer bestehenden Komponente ausreicht.
- Komponenten erhalten Inhalte über Props und Slots. Die konkrete Datenzusammenstellung gehört in Seiten oder Content-Daten, nicht in wiederverwendbare Komponenten.
- Wiederverwendbare Bausteine liegen in `src/components/ui/`; Seitengerüste und größere Layout-Kompositionen in `src/components/layout/`.
- Für CTA-Links und Buttons immer `ui/Button.astro` verwenden. Für Eingaben `ui/FormField.astro`, für Icons `ui/Icon.astro`.
- Lucide-Icons werden zentral über `Icon.astro` gerendert. Neue Icons zuerst im typisierten `IconName` ergänzen.
- Bilder erhalten einen sinnvollen Alttext; rein dekorative Bilder verwenden ausdrücklich `alt=""`.
- Interaktive Elemente brauchen semantisch passende Elemente, sichtbare Fokuszustände und eindeutige zugängliche Namen.
- Die Startseite ist eine Komposition aus bestehenden Komponenten. Keine stylespezifischen Sonderlösungen in anderen Komponenten nur für die Startseite einführen.

## Bild- und Markenassets

- Nutze produktive Assets aus `public/images/` mit absolutem Pfad, z. B. `/images/hero_homepage.png`.
- Wortmarke: `/images/wordmark_domace.png`; Submarke: `/images/logo_c.png`; Favicons liegen direkt in `public/`.
- Die Display-Schrift `Safira March` liegt lokal unter `public/fonts/`. Nunito wird global geladen. Handschrift ist derzeit `Segoe Script`.
- Neue generierte Bilder müssen zur warmen, natürlichen Domaće-Bildsprache passen: Kalk, Holz, Textilien, zurückhaltende Terracotta-, Oliv- und Pflaumentöne. Keine Olivenzweige als Standardmotiv verwenden.

## Lokale Entwicklung und Prüfung

```powershell
# Entwicklungsserver im Hintergrund starten
astro dev --background

# Hintergrundserver verwalten
astro dev status
astro dev logs
astro dev stop

# Produktions-Build
& 'C:\Program Files\nodejs\node.exe' '.\node_modules\astro\bin\astro.mjs' build
```

- Auf diesem Windows-System kann `npm.ps1` durch die Execution Policy blockiert sein. Für npm-Befehle `npm.cmd` verwenden.
- Ein `lint`-Script ist aktuell nicht konfiguriert. Nicht voraussetzen, dass `npm run lint` existiert.
- Nach Änderungen an Komponenten, Tokens oder Layouts immer den Astro-Build ausführen.
- Bei visuellen oder responsiven Änderungen die lokale Seite im Browser auf Desktop und mobil prüfen, einschließlich Konsole, Bilder und horizontalem Überlauf.

## Seiten und Navigation

- `BaseLayout.astro` ist die einzige Quelle für globale Styles und die gemeinsame Kopf-/Fußzeile. Neue Seiten müssen es verwenden.
- Navigation und Teaser verweisen bereits auf künftige Routen. Fehlende Seiten nicht stillschweigend durch Platzhalterseiten oder `#` ersetzen; Routen nur nach fachlicher Vorgabe ergänzen.
- Bevor Inhalte wachsen, die Daten von Seitenkompositionen in Content Collections oder zentrale Datenmodule überführen.

## Qualitätsstandard

- Kein sichtbares Design ohne ausdrücklichen Auftrag ändern.
- Keine unbegründeten Duplikate bei Layout, CSS oder Komponenten erzeugen.
- Auf kleinen Displays Text umbrechen lassen, statt starre Breiten oder `white-space: nowrap` zu erzwingen.
- Keine unnötige Client-JavaScript-Logik einführen. Astro bleibt standardmäßig serverseitig/statisch.
- SEO-Grundlagen bei neuen Seiten mitdenken: eindeutiger Titel, Sprache, Überschriftenhierarchie, beschreibende Links und Alttexte.
