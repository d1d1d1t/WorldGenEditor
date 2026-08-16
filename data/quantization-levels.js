/*
 * data/quantization-levels.js
 *
 * Standardized normalized height/riser levels.
 *
 * 0.0 = minimum
 * 1.0 = maximum
 */

export const QUANTIZATION_LEVELS = Object.freeze([

    0.30,
    0.55,
    0.65,
    0.80,
    0.90

]);

export function quantize(value) {

    let closest = QUANTIZATION_LEVELS[0];
    let distance = Math.abs(value - closest);

    for (const level of QUANTIZATION_LEVELS) {

        const d = Math.abs(value - level);

        if (d < distance) {

            closest = level;
            distance = d;

        }

    }

    return closest;

}
