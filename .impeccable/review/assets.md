# Component asset provenance — 2026-10-25

The approved mockups are layout references, not production game images. No comp-derived pixels are used in the component kit.

| Region | Original source | Component/review file | Production display file | Treatment |
| --- | --- | --- | --- | --- |
| Drixil monogram | Existing user-supplied Drixil logo derivative | `assets/plates/brand-mark.png` | `public/media/drixil-mark-white.webp` | Lossless format conversion from the existing WebP for PNG-only tooling. Original mark and clear space retained. |
| Beyond 90 hero | `src/assets/beyond-90-thumbnail-1.png` | `assets/plates/beyond-art.png` | `public/media/beyond-90-matchday-1672.webp` | Exact PNG copy for review; existing optimized WebP in the HTML. Intentional CSS crop, no regenerated game artwork. |
| Volleyball Rally preview | `D:/repos/Drixil Interactive/Volleyball-Rally/assets/media/thumbnails/2.png` (see the verified 2026-10-16 media mapping) | `assets/plates/volleyball-art.png` | `public/media/volleyball-rally-spike-1672.webp` | Original PNG copy for review; existing optimized WebP in HTML. Intentional narrow preview crop, no regenerated game artwork. |

Mitr Bold and Merriweather Sans were selected by the measured font matcher. Both are self-hosted Latin WOFF2 assets, with source and SIL Open Font Licenses in `src/assets/fonts/`. No external font request is needed for the shipping site. The component kit and future shipping pages share the same stylesheet and local font paths.

The automated plate comparison currently rejects the uncropped original Beyond 90 PNG as structurally different from the generated comp (19% structure). The generator changed the composition; factual originals take precedence. The original PNG is not being resampled, redrawn, or deceptively approved to satisfy that score. The human component checkpoint must inspect the actual placement and resolve the difference before assembly. No gate has been forced and no review receipt has been written on Moses's behalf.
