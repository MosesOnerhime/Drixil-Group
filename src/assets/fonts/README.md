# Self-hosted type

Downloaded on 2026-10-25 from the official Google Fonts CSS API and its `fonts.gstatic.com` files. Both families use the SIL Open Font License; original licence texts are retained alongside the fonts.

- `mitr-latin-700.woff2`: Mitr Bold, Latin subset. Selected by the measured comp font-ranking tool for the approved Interactive headline (69px for a measured 46.7px cap height); used for the game/studio display voice.
- `merriweather-sans-latin-variable.woff2`: Merriweather Sans, Latin subset, variable weight 300–800. Selected by the same tool for the mission copy (300, 24px for a measured 19.3px cap height); also supplies the navigation/body family.

Source CSS request: `https://fonts.googleapis.com/css2?family=Mitr:wght@700&family=Merriweather+Sans:wght@300..800&display=swap`.

Font files are self-hosted; production pages must not depend on Google Fonts requests. Use `font-display: swap`, explicit line heights and stable media dimensions. First-viewport and responsive testing is still required before publication.
