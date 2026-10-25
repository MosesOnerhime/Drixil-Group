# Self-hosted type

Downloaded on 2026-10-25 from the official Google Fonts CSS API and its `fonts.gstatic.com` files. Both families use the SIL Open Font License; original licence texts are retained alongside the fonts.

- `mitr-latin-700.woff2`: Mitr Bold, Latin subset. Selected by the measured comp font-ranking tool for the approved Interactive headline (69px for a measured 46.7px cap height); used for the game/studio display voice.
- `merriweather-sans-latin-variable.woff2`: Merriweather Sans, Latin subset, variable weight 300–800. Selected by the same tool for the mission copy (300, 24px for a measured 19.3px cap height); also supplies the navigation/body family.

Source CSS request: `https://fonts.googleapis.com/css2?family=Mitr:wght@700&family=Merriweather+Sans:wght@300..800&display=swap`.

Font files are self-hosted; production pages must not depend on Google Fonts requests. Use `font-display: swap`, explicit line heights and stable media dimensions. First-viewport and responsive testing is still required before publication.

## Group A reference correction (2026-10-25)

The Group surface now uses `inter-latin-variable.woff2` (normal, variable weight 100–900, optical size axis retained), matching the approved screenshot's neutral grotesk lettering. Interactive retains the original Mitr/Merriweather pairing. This is a reference-fidelity correction, not a company rebrand.

Source: the official Google Fonts repository's `ofl/inter/Inter[opsz,wght].ttf`; licence copied as `Inter-OFL.txt` from the same directory. Converted and subset to Latin with fontTools, 77,056 bytes. Source URL: https://github.com/google/fonts/tree/main/ofl/inter. No font network request is made by production pages.
