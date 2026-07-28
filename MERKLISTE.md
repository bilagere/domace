# Merkliste

## Instagram-Feed im Footer

- Die drei statischen Footer-Kacheln später durch die neuesten drei Bild- oder Karussellbeiträge von `@domace.studio` ersetzen.
- Voraussetzung: Instagram-Konto als Creator- oder Business-Konto und eine Meta-App mit „Instagram API with Instagram Login“.
- Benötigte Berechtigung: `instagram_business_basic`.
- Zugriffsschlüssel ausschließlich als geheime Cloudflare-Build-Variable hinterlegen, nicht im Repository.
- Videobeiträge überspringen; bei API-Fehlern weiterhin die vorhandenen Ersatzbilder anzeigen.
- Instagram- und Pinterest-Profiladressen bei Gelegenheit final prüfen; Pinterest-URL fehlt noch.