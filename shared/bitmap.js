/*
 * shared/bitmap.js
 *
 * Canvas and numerical-field utilities.
 *
 * Canvas = visualization.
 * Field = actual generator data.
 */

import {
    normalize,
    toByte
} from "./colors.js";


/* =========================================================
   CANVAS
========================================================= */

export function createCanvas(width, height) {

    const canvas =
        document.createElement("canvas");

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

    ctx.putImageData(
        image,
        0,
        0
    );

}


/* =========================================================
   NUMERICAL FIELD
========================================================= */

export function createField(
    width,
    height,
    value = 0
) {

    const data =
        new Float32Array(
            width * height
        );

    if (value !== 0) {

        data.fill(value);

    }

    return {

        width,
        height,
        data

    };

}


export function fieldIndex(
    x,
    y,
    width
) {

    return y * width + x;

}


export function getFieldValue(
    field,
    x,
    y
) {

    if (
        x < 0 ||
        y < 0 ||
        x >= field.width ||
        y >= field.height
    ) {

        return 0;

    }

    return field.data[
        fieldIndex(
            x,
            y,
            field.width
        )
    ];

}


export function setFieldValue(
    field,
    x,
    y,
    value
) {

    if (
        x < 0 ||
        y < 0 ||
        x >= field.width ||
        y >= field.height
    ) {

        return;

    }

    field.data[
        fieldIndex(
            x,
            y,
            field.width
        )
    ] = normalize(value);

}


/* =========================================================
   FIELD → CANVAS
========================================================= */

export function renderField(
    ctx,
    field
) {

    const image =
        ctx.createImageData(
            field.width,
            field.height
        );

    for (
        let i = 0;
        i < field.data.length;
        i++
    ) {

        const v =
            toByte(
                field.data[i]
            );

        const p = i * 4;

        image.data[p]     = v;
        image.data[p + 1] = v;
        image.data[p + 2] = v;
        image.data[p + 3] = 255;

    }

    ctx.putImageData(
        image,
        0,
        0
    );

}


/* =========================================================
   FIELD COPY
========================================================= */

export function cloneField(field) {

    const copy =
        createField(
            field.width,
            field.height
        );

    copy.data.set(
        field.data
    );

    return copy;

}
