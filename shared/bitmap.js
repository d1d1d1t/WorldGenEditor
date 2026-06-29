/*
 * shared/bitmap.js
 * Canvas utilities.
 */

export function createCanvas(width, height) {

    const canvas = document.createElement("canvas");

    canvas.width = width;
    canvas.height = height;

    return canvas;
}

export function context(canvas) {
    return canvas.getContext("2d");
}

export function clear(ctx, color = "#000") {

    ctx.fillStyle = color;
    ctx.fillRect(
        0,
        0,
        ctx.canvas.width,
        ctx.canvas.height
    );
}

export function imageData(ctx) {
    return ctx.getImageData(
        0,
        0,
        ctx.canvas.width,
        ctx.canvas.height
    );
}

export function putImageData(ctx, image) {
    ctx.putImageData(image, 0, 0);
}