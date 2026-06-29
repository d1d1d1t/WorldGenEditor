/*
 * data/tile-spec.js
 * WorldGenEditor
 *
 * Canonical tile and canvas definitions.
 * This file contains immutable project geometry.
 */

export const TILE_SPEC = Object.freeze({

    micro: Object.freeze({

        terrain: Object.freeze({
            name: "mTile",
            width: 64,
            height: 64
        }),

        road: Object.freeze({
            name: "rTile",
            width: 48,
            height: 32
        }),

        feature: Object.freeze({
            name: "eTile",
            width: 16,
            height: 16
        })

    }),

    macro: Object.freeze({

        terrain: Object.freeze({
            name: "tTile",
            width: 192,
            height: 192
        }),

        road: Object.freeze({
            name: "pTile",
            width: 96,
            height: 64
        }),

        feature: Object.freeze({
            name: "fTile",
            width: 384,
            height: 288
        })

    }),

    canvas: Object.freeze({

        terrain: Object.freeze({
            width: 1920,
            height: 1920
        }),

        road: Object.freeze({
            width: 192,
            height: 1920
        }),

        feature: Object.freeze({
            width: 384,
            height: 288
        })

    }),

    domains: Object.freeze({

        terrain: Object.freeze({
            micro: "mTile",
            macro: "tTile"
        }),

        road: Object.freeze({
            micro: "rTile",
            macro: "pTile"
        }),

        feature: Object.freeze({
            micro: "eTile",
            macro: "fTile"
        })

    })

});