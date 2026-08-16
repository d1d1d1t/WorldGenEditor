/*
 * shared/colors.js
 *
 * Generator-agnostic color and normalized-value utilities.
 */

export function clamp(value, min = 0, max = 1) {

    return Math.min(max, Math.max(min, value));

}

export function normalize(value) {

    return clamp(value, 0, 1);

}

export function toByte(value) {

    return Math.round(
        normalize(value) * 255
    );

}

export function fromByte(value) {

    return normalize(
        value / 255
    );

}

export function grayscale(value) {

    const v = clamp(
        Math.round(value),
        0,
        255
    );

    return `rgb(${v}, ${v}, ${v})`;

}

export function grayscale01(value) {

    return grayscale(
        toByte(value)
    );

}

export function rgb(r, g, b) {

    return `rgb(${r}, ${g}, ${b})`;

}

export function rgba(r, g, b, a = 1) {

    return `rgba(${r}, ${g}, ${b}, ${a})`;

}

export function hex(value) {

    const v = clamp(
        Math.round(value),
        0,
        255
    )
    .toString(16)
    .padStart(2, "0");

    return `#${v}${v}${v}`;

}
