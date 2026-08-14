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
  pages/          # Astro-Routen für Startseite, Journal, Kategorien, Artikel und Rezepte
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

- Importiere optimierte Inhaltsbilder bevorzugt aus `src/assets/images/`. Statische Markenassets und unverarbeitete Dateien liegen unter `public/`.
- Wortmarke: `/images/wordmark_domace.png`; Submarke: `/images/logo_c.png`; Favicons liegen direkt in `public/`.
- Die Wortmarke im Header trägt den handschriftlichen Zusatz `Von Zuhause. Für Zuhause.` und muss ihr natürliches Seitenverhältnis behalten.
- Startbildschirm-Icons verwenden die ć-Submarke: `apple-touch-icon-v2.png`, `icon-192.png`, `icon-512.png` sowie die beiden `maskable-icon-*`-Varianten. Alle Icon-Hintergründe und `site.webmanifest` verwenden `#F6F2EC`; die Maskable-Icons müssen im Manifest mit `purpose: maskable` erhalten bleiben.
- Die Schriften `Bodoni Moda` und `Manrope` werden über Fontsource lokal ausgeliefert. Handschrift ist derzeit `Segoe Script`.
- Neue generierte Bilder müssen zur warmen, natürlichen Domaće-Bildsprache passen: Kalk, Holz, Textilien, zurückhaltende Terracotta-, Oliv- und Pflaumentöne. Keine Olivenzweige als Standardmotiv verwenden.
- Social-Sharing-Bilder werden über `BaseLayout.astro` auf 1200 × 630 Pixel zugeschnitten und als optimiertes JPG erzeugt. Journalartikel und Rezepte verwenden ihr jeweiliges Beitragsbild; ohne Bild gilt `src/assets/images/og-image.png` als Rückfall.
- Das beehiiv-Newsletterformular wird aus Datenschutzgründen erst nach einem bewussten Klick geladen. Das globale beehiiv-Attributionsskript nicht erneut in `BaseLayout.astro` einbinden.
- Umami läuft cookielos. Pinterest und Instagram sind nur verlinkt; keine Social-Media-Plugins oder Tracking-Pixel ohne erneute Prüfung und passende Einwilligung ergänzen.

## SEO, Social Sharing und Pinterest

- `BaseLayout.astro` verwaltet Canonical URL, Sitemap-Verweis, Open Graph, Twitter Cards, Pinterest-Verifizierung und optionales JSON-LD zentral.
- Die Startseite verwendet für Social Sharing den Titel `Domaće | Von Zuhause. Für Zuhause.` und die Beschreibung `Ein digitales Zuhause für Familien, die ihren Alltag bewusster, einfacher und mit mehr Leichtigkeit gestalten möchten.`. Der normale Seitentitel darf davon unabhängig bleiben.
- Journalartikel liefern `Article`-JSON-LD sowie Autorin und Veröffentlichungsdatum. Rezepte liefern `Recipe`-JSON-LD mit Zutaten, Schritten, Ertrag und vorhandenen Zeitangaben.
- Rezeptseiten behalten neben `Rezept drucken` die Aktion `Rezept pinnen`. Der Pinterest-Link übergibt die kanonische Rezept-URL, ein öffentlich erreichbares optimiertes Beitragsbild und die Beschreibung.
- Die Domain ist in Google Search Console und Pinterest bestätigt. `https://domace.studio/sitemap-index.xml` ist in der Search Console eingereicht.
- `public/site.webmanifest`, Touch-Icon und App-Icons müssen in `BaseLayout.astro` verlinkt bleiben.

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
- Für die Codeprüfung `npm.cmd run lint` und für Astro-/TypeScript-Diagnosen `npm.cmd run check` verwenden.
- Nach Änderungen an Komponenten, Tokens oder Layouts immer den Astro-Build ausführen.
- Bei visuellen oder responsiven Änderungen die lokale Seite im Browser auf Desktop und mobil prüfen, einschließlich Konsole, Bilder und horizontalem Überlauf.

## Seiten und Navigation

- `BaseLayout.astro` ist die einzige Quelle für globale Styles und die gemeinsame Kopf-/Fußzeile. Neue Seiten müssen es verwenden.
- Die Hauptnavigation lautet `Journal`, `Genuss`, `Über Domaće`. Die zugehörigen Routen bleiben `/journal`, `/genuss` und `/willkommen`.
- `/geniessen` ist eine veraltete Route und darf nicht erneut für interne Links verwendet werden. Die Weiterleitungen in `public/_redirects` auf `/genuss` müssen erhalten bleiben.
- Das Journal gliedert sich in `Alle Beiträge`, `Ankommen`, `Genießen`, `Ordnen` und `Zusammen`. Die Übersicht zeigt höchstens acht Beiträge pro Seite.
- Genuss gliedert sich in `Alle Beiträge`, `Familienküche`, `Brot & Gebäck`, `Spaßgetränke` und `Gastfreundschaft`.
- Journal-Karten dürfen einen kürzeren, scanbaren Titel als die zugehörige Artikeldetailseite verwenden. Beide Titel bewusst getrennt pflegen.
- Nur Beiträge mit vorhandener Detailroute als Karte oder Empfehlung ausgeben. Keine Teaser auf noch nicht angelegte Seiten veröffentlichen.
- Journalartikel verwenden `ArticleLayout.astro`, Rezepte `RecipeLayout.astro`; die Übersichten werden mit `JournalOverview.astro` und `GenussOverview.astro` aufgebaut.
- Navigation und Kategorien werden zentral in `src/data/taxonomy.ts` gepflegt. Beitragsvorschauen und Empfehlungen liegen in `src/data/relatedContent.ts`; dieselben Listen nicht erneut in Komponenten anlegen.

## Deployment

- Das GitHub-Repository ist mit Cloudflare verbunden. Ein Push auf `master` startet automatisch das Produktions-Deployment.
- Vor dem Push den Produktions-Build ausführen. Nach dem Push prüfen, ob Cloudflare die neue Version unter `https://domace.studio` ausliefert.

## Qualitätsstandard

- Kein sichtbares Design ohne ausdrücklichen Auftrag ändern.
- Keine unbegründeten Duplikate bei Layout, CSS oder Komponenten erzeugen.
- Auf kleinen Displays Text umbrechen lassen, statt starre Breiten oder `white-space: nowrap` zu erzwingen.
- Keine unnötige Client-JavaScript-Logik einführen. Astro bleibt standardmäßig serverseitig/statisch.
- SEO-Grundlagen bei neuen Seiten mitdenken: eindeutiger Titel, Sprache, Überschriftenhierarchie, beschreibende Links und Alttexte.
