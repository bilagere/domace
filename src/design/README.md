# Domaće Designsystem

Das Designsystem übersetzt den Styleguide in wiederverwendbare Entscheidungen. Komponenten verwenden ausschließlich die Werte aus `tokens.css`; neue Seiten sollen keine eigenen Farb-, Schriftgrößen- oder Abstands-Literale einführen.

## Grundlagen

### Redaktionelle Sprache

- Englische Texte verwenden American English (z. B. pants, favorite, realized, center, organize).
- Die familiären Bezeichnungen Papa, Mama, Oma und Opa bleiben bewusst erhalten; nicht durch Dad, Mom, Grandma oder Grandpa ersetzen.
- Metrische Angaben (g, ml, l, cm und °C) bleiben auch in englischen Rezepten unverändert.

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
- `salbei`, `lehm`, `sonne` und `mauve`: ergänzende Kategorieakzente für Home, Kitchen, Rhythm und Family; sie ersetzen nicht die Markenfarben.
- `border` und `divider`: zurückhaltende Rahmung und die charakteristische Trennlinie.

### Englischer Relaunch – Farbstand 30.08.2026

Die Markenfarben sind Kalk `#F3EFE6`, Espresso `#30251F`, Olive `#747A59`, Terracotta `#A64B2A`, Pflaume `#563B42` und Gold `#A68E68`. Die bestehenden Farbrollen, abgeleiteten Oberflächen und Hover-Farben bleiben unverändert. Ebenso bleiben Salbei `#B7C19C`, Lehm `#DC7A5F`, Mauve `#A38195` und Sonne `#DEA645` erhalten. Raster-Markenassets und App-Icons werden in diesem ersten Vorschau-Schritt nicht neu eingefärbt.

## Heller und dunkler Modus

`BaseLayout` setzt vor dem Rendern `data-theme` anhand der gespeicherten Auswahl (`domace-theme`, Local Storage) oder der Systemeinstellung. `ThemeToggle` im Header schaltet per zugänglichem Button mit `aria-pressed` um. Ohne JavaScript bleibt die Website hell und der Umschalter verborgen. Ist der Browserspeicher gesperrt, funktioniert der Wechsel weiterhin auf der aktuellen Seite.

Die dunklen Werte stehen ausschließlich im Screen-Media-Block von `tokens.css`; Druckansichten behalten die helle Palette. Für Flächen und Schrift semantische Tokens verwenden. `color-on-action` ist die Schriftfarbe auf Aktionsflächen, `color-olive-ink` der lesbare Olive-Akzent, `color-surface-muted-rgb` steuert transparente Hero-Verläufe. Marken- und Kategorieflächen behalten ihre Farbidentität. Fotos werden nicht invertiert; nur die transparenten Logos verwenden `brand-image-filter`.

Eingebettete Inhalte anderer Anbieter (insbesondere das erst nach Klick geladene beehiiv-Formular) liegen außerhalb des lokalen Stylesheets und übernehmen den Modus nicht automatisch.

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
