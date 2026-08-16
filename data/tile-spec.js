/*
 * data/tile-spec.js
 *
 * Canonical WorldGenEditor geometry.
 *
 * This is the ONLY source of truth for world dimensions.
 */

export const TILE_SPEC = Object.freeze({

    world: Object.freeze({
        width: 1920,
        height: 1920
    }),

    terrain: Object.freeze({

        macro: Object.freeze({
            name: "tTile",
            width: 192,
            height: 192
        }),

        micro: Object.freeze({
            name: "mTile",
            width: 64,
            height: 64
        }),

        grid: Object.freeze({
            macroX: 10,
            macroY: 10,
            microX: 30,
            microY: 30
        })

    }),

    road: Object.freeze({

        macro: Object.freeze({
            name: "pTile",
            width: 96,
            height: 64
        }),

        micro: Object.freeze({
            name: "rTile",
            width: 48,
            height: 32
        })

    }),

    feature: Object.freeze({

        macro: Object.freeze({
            name: "fTile",
            width: 384,
            height: 288
        }),

        micro: Object.freeze({
            name: "eTile",
            width: 16,
            height: 16
        })

    }),

    overpass: Object.freeze({

        name: "overpass",

        width: 1920,
        height: 1920

    })

});
