/*
 * shared/colors.js
 * Color conversion utilities.
 * Generator agnostic.
 */

export function grayscale(value) {
    const v = clamp(Math.round(value), 0, 255);
    return `rgb(${v}, ${v}, ${v})`;
}

export function rgb(r, g, b) {
    return `rgb(${r}, ${g}, ${b})`;
}

export function rgba(r, g, b, a = 1) {
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

export function hex(value) {
    const v = clamp(Math.round(value), 0, 255)
        .toString(16)
        .padStart(2, "0");

    return `#${v}${v}${v}`;
}

function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
}