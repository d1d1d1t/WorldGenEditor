/*
 * shared/constants.js
 *
 * Convenience accessors for canonical project geometry.
 */

import { TILE_SPEC } from "../data/tile-spec.js";

export const CONSTANTS = Object.freeze({

    world: Object.freeze({
        width: TILE_SPEC.world.width,
        height: TILE_SPEC.world.height
    }),

    terrain: Object.freeze({

        tTile: TILE_SPEC.terrain.macro,
        mTile: TILE_SPEC.terrain.micro,

        grid: TILE_SPEC.terrain.grid

    }),

    road: Object.freeze({

        pTile: TILE_SPEC.road.macro,
        rTile: TILE_SPEC.road.micro

    }),

    feature: Object.freeze({

        fTile: TILE_SPEC.feature.macro,
        eTile: TILE_SPEC.feature.micro

    }),

    overpass: Object.freeze({

        width: TILE_SPEC.overpass.width,
        height: TILE_SPEC.overpass.height

    })

});
