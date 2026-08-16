/*
 * shared/rng.js
 *
 * Deterministic seeded random number generator.
 */

export function createRNG(seed) {

    let value =
        seed >>> 0;

    return function random() {

        value ^= value << 13;
        value ^= value >>> 17;
        value ^= value << 5;

        return (
            value >>> 0
        ) / 4294967296;

    };

}


export function randomInt(
    random,
    min,
    max
) {

    return Math.floor(
        random() *
        (max - min + 1)
    ) + min;

}


export function randomChoice(
    random,
    array
) {

    return array[
        Math.floor(
            random() *
            array.length
        )
    ];

}
