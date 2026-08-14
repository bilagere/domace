# Domaće Designsystem

Das Designsystem übersetzt den Styleguide in wiederverwendbare Entscheidungen. Komponenten verwenden ausschließlich die Werte aus `tokens.css`; neue Seiten sollen keine eigenen Farb-, Schriftgrößen- oder Abstands-Literale einführen.

## Grundlagen

| Bereich | Quelle | Verwendung |
| --- | --- | --- |
| Farbe | `--color-*` | Marken- und semantische Oberflächenfarben |
| Typografie | `--font-*`, `--text-*`, `--leading-*` | Display, Fließtext, Handschrift und Lesbarkeit |
| Abstand | `--space-*`, `--section-space` | 4px-basierte Rhythmik und Abschnittsabstände |
| Layout | `--content-*`, `--page-gutter` | Inhalts-, Lesespalten- und Seitenbreiten |
| Interaktion | `--control-height`, `--transition-base`, `--color-focus` | Controls, Hover- und Fokuszustände |

### Farbrollen

- `surface` und `surface-raised`: helle Inhaltsflächen.
- `text` und `text-muted`: primäre und sekundäre Lesetexte.
- `action`: interaktive Terracotta-Akzente.
- `olive` und `pflaume`: ruhige, thematische Flächen und Kontraste.
- `salbei`, `lehm`, `sonne` und `mauve`: ergänzende Kategorieakzente für Ankommen, Genießen, Ordnen und Zusammen; sie ersetzen nicht die Markenfarben.
- `border` und `divider`: zurückhaltende Rahmung und die charakteristische Trennlinie.

## Layout-Primitiven

- `Container`: begrenzt Inhalte auf `content`, `reading` oder `narrow` und setzt den Seitengutter.
- `PageSection`: semantischer Abschnitt mit einheitlichem vertikalen Rhythmus.
- `Divider`: die gemeinsame Domaće-Trennlinie in Terracotta, Olive oder aktueller Textfarbe.
- `ContentWithSidebar`: responsive Haupt-/Nebeninhalt-Struktur für Artikel und Rezepte.

## Interaktive Bausteine

- `Button`: primär, sekundär oder textbasiert; funktioniert als Link oder Button.
- `FormField`: zugängliche Text-, E-Mail- und Suchfelder mit optional ausgeblendeter Beschriftung und Hinweis.
- `Badge`: runder, gedrehter Marken-Badge für Newsletter und spätere Kampagnen.
- `Pagination`: Seitennavigation mit aktuellem und deaktiviertem Zustand.
- `ActionList`: kompakte, ikonische Artikelaktionen.
- `Icon`: zentrale, typisierte Lucide-Icon-Schnittstelle.

## Inhaltsbausteine

- Orientierung: `SectionHeading`, `MetaList`.
- Teaser: `TopicCard`, `ArticleCard`, `RelatedArticles`, `FilterableCardGrid`.
- Editorial: `EditorialHero`, `MediaText`, `QuoteBanner`, `NewsletterSignup`, `SidebarPanel`.
- Artikel und Rezepte: `ArticleLead`, `ArticleProse`, `IngredientList`, `NumberedSteps`.

## Regeln für neue Komponenten

1. Vor einem neuen Baustein zuerst prüfen, ob Variante oder Slot einer bestehenden Komponente ausreicht.
2. Komponenten erhalten Inhalte über Props oder Slots; Seiten enthalten die konkrete Datenzusammenstellung.
3. Interaktive Elemente brauchen sichtbaren Fokus, eindeutige Beschriftungen und einen semantisch passenden HTML-Tag.
4. Bildkomponenten erhalten immer einen Kontext-Alttext; rein dekorative Bilder verwenden `alt=""`.
5. Die Grundstufen sind `compact` (640), `medium` (768) und `wide` (1024). Zusätzliche komponentenspezifische Umbruchpunkte sind nur zulässig, wenn der Inhalt sie sichtbar erfordert.

## Einsatzbeispiel

```astro
---
import PageSection from "../components/ui/PageSection.astro";
import SectionHeading from "../components/ui/SectionHeading.astro";
---

<PageSection labelledBy="ideen-heading">
  <SectionHeading eyebrow="Inspiration"><span id="ideen-heading">Ideen für Zuhause</span></SectionHeading>
</PageSection>
```
