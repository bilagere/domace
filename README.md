# Domaće

Domaće ist eine deutschsprachige Editorial-Website über Familienleben, Rezepte, Zuhause und alltagstaugliche Routinen. Sie wird statisch mit Astro, TypeScript und komponentenlokalem CSS gebaut.

## Entwicklung

Voraussetzung ist Node.js in der in `package.json` angegebenen Version.

```powershell
npm.cmd install
npm.cmd run dev
```

Die lokale Vorschau ist anschließend unter `http://localhost:4321` erreichbar.

## Prüfungen

```powershell
npm.cmd run check
npm.cmd run lint
npm.cmd run build
```

## Struktur

- `src/components/layout/`: Seitengerüste und größere Kompositionen
- `src/components/ui/`: wiederverwendbare Inhalts- und UI-Bausteine
- `src/data/`: zentrale Navigation, Kategorien und Beitragsvorschauen
- `src/design/`: Tokens, globale Stile und Designsystem-Dokumentation
- `src/pages/`: Astro-Routen
- `src/assets/images/`: optimierte Inhaltsbilder
- `public/`: statische Markenassets, Manifest und Weiterleitungen
- `design/mockups/`: dauerhafte visuelle Referenzen

Die verbindlichen Arbeitsregeln stehen in `AGENTS.md`, das Designsystem in `src/design/README.md`.

## Veröffentlichung

Cloudflare veröffentlicht automatisch nach einem Push auf `master`. Vor jedem Push müssen Typprüfung, Lint und Produktions-Build erfolgreich sein.
