/*
 * shared/generator.js
 *
 * Base generator helpers.
 */

import {
    createLayer,
    markGenerated
} from "./layers.js";


export function createGeneratorLayer(
    name,
    width,
    height
) {

    return createLayer(
        name,
        width,
        height
    );

}


export function finishGeneration(
    layer
) {

    markGenerated(
        layer
    );

    return layer;

}
