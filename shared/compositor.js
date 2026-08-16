/*
 * shared/compositor.js
 *
 * Combines independent world layers into
 * a final height and occupancy field.
 */

import {
    createLayer
} from "./layers.js";


export function composeHeight(
    atlas
) {

    const width =
        atlas.width;

    const height =
        atlas.height;

    const result =
        createLayer(
            "height",
            width,
            height
        );

    const terrain =
        atlas.layers.terrain.field.data;

    const road =
        atlas.layers.road.field.data;

    const feature =
        atlas.layers.feature.field.data;

    const overpass =
        atlas.layers.overpass.field.data;

    const output =
        result.field.data;

    for (
        let i = 0;
        i < output.length;
        i++
    ) {

        /*
         * Initial composition model.
         *
         * This is intentionally simple.
         * The weighting can later be replaced
         * by the actual world rules.
         */

        let value =
            terrain[i];

        value +=
            feature[i];

        value +=
            overpass[i];

        value -=
            road[i];

        output[i] =
            Math.max(
                0,
                Math.min(
                    1,
                    value
                )
            );

    }

    result.generated =
        true;

    atlas.layers.height =
        result;

    return result;

}


export function composeOccupancy(
    atlas
) {

    const width =
        atlas.width;

    const height =
        atlas.height;

    const result =
        createLayer(
            "occupancy",
            width,
            height
        );

    const road =
        atlas.layers.road.field.data;

    const feature =
        atlas.layers.feature.field.data;

    const overpass =
        atlas.layers.overpass.field.data;

    const output =
        result.field.data;

    for (
        let i = 0;
        i < output.length;
        i++
    ) {

        output[i] =
            Math.max(
                road[i],
                feature[i],
                overpass[i]
            );

    }

    result.generated =
        true;

    atlas.layers.occupancy =
        result;

    return result;

}
