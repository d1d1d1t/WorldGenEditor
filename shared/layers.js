/*
 * shared/layers.js
 *
 * Standard representation of every WorldGenEditor layer.
 */

import {
    createField,
    cloneField
} from "./bitmap.js";

export const LAYER_TYPES = Object.freeze({

    TERRAIN: "terrain",
    ROAD: "road",
    FEATURE: "feature",
    OVERPASS: "overpass",
    HEIGHT: "height",
    OCCUPANCY: "occupancy"

});


export function createLayer(
    name,
    width,
    height
) {

    return {

        name,

        width,
        height,

        field:
            createField(
                width,
                height
            ),

        inverted: false,

        visible: true,

        generated: false

    };

}


export function cloneLayer(layer) {

    return {

        ...layer,

        field:
            cloneField(
                layer.field
            )

    };

}


export function invertLayer(layer) {

    const data =
        layer.field.data;

    for (
        let i = 0;
        i < data.length;
        i++
    ) {

        data[i] =
            1 - data[i];

    }

    layer.inverted =
        !layer.inverted;

}


export function clearLayer(layer) {

    layer.field.data.fill(0);

    layer.generated = false;

}


export function markGenerated(layer) {

    layer.generated = true;

}
