/*
 * shared/exporter.js
 *
 * Export utilities.
 */

import {
    toByte
} from "./colors.js";


/* =========================================================
   BASIC DOWNLOAD
========================================================= */

function download(
    blob,
    filename
) {

    const url =
        URL.createObjectURL(blob);

    const link =
        document.createElement("a");

    link.href = url;
    link.download = filename;

    link.click();

    URL.revokeObjectURL(url);

}


/* =========================================================
   PNG
========================================================= */

export function exportPNG(
    canvas,
    filename = "image.png"
) {

    canvas.toBlob(
        blob => {

            if (blob) {

                download(
                    blob,
                    filename
                );

            }

        },
        "image/png"
    );

}


/* =========================================================
   JSON
========================================================= */

export function exportJSON(
    data,
    filename = "data.json"
) {

    const blob =
        new Blob(
            [
                JSON.stringify(
                    data,
                    null,
                    4
                )
            ],
            {
                type:
                    "application/json"
            }
        );

    download(
        blob,
        filename
    );

}


/* =========================================================
   TEXT
========================================================= */

export function exportText(
    text,
    filename = "file.txt"
) {

    const blob =
        new Blob(
            [text],
            {
                type:
                    "text/plain"
            }
        );

    download(
        blob,
        filename
    );

}


/* =========================================================
   FIELD → PNG
========================================================= */

export function fieldToCanvas(
    field
) {

    const canvas =
        document.createElement(
            "canvas"
        );

    canvas.width =
        field.width;

    canvas.height =
        field.height;

    const ctx =
        canvas.getContext("2d");

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

        const p =
            i * 4;

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

    return canvas;

}


export function exportFieldPNG(
    field,
    filename = "field.png"
) {

    const canvas =
        fieldToCanvas(field);

    exportPNG(
        canvas,
        filename
    );

}
