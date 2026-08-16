/*
 * shared/atlas.js
 *
 * Master WorldGenEditor atlas.
 *
 * All generators publish their numerical output here.
 */

import {
    TILE_SPEC
} from "../data/tile-spec.js";

import {
    createLayer,
    LAYER_TYPES
} from "./layers.js";


export function createAtlas() {

    const width =
        TILE_SPEC.world.width;

    const height =
        TILE_SPEC.world.height;

    return {

        width,
        height,

        layers: {

            terrain:
                createLayer(
                    LAYER_TYPES.TERRAIN,
                    width,
                    height
                ),

            road:
                createLayer(
                    LAYER_TYPES.ROAD,
                    width,
                    height
                ),

            feature:
                createLayer(
                    LAYER_TYPES.FEATURE,
                    width,
                    height
                ),

            overpass:
                createLayer(
                    LAYER_TYPES.OVERPASS,
                    width,
                    height
                ),

            height:
                createLayer(
                    LAYER_TYPES.HEIGHT,
                    width,
                    height
                ),

            occupancy:
                createLayer(
                    LAYER_TYPES.OCCUPANCY,
                    width,
                    height
                )

        }

    };

}
