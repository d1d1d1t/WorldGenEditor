/*
 * shared/exporter.js
 * File export utilities.
 */

export function exportPNG(canvas, filename = "image.png") {

    const link = document.createElement("a");

    link.download = filename;
    link.href = canvas.toDataURL("image/png");

    link.click();
}

export function exportJSON(data, filename = "data.json") {

    const blob = new Blob(
        [
            JSON.stringify(data, null, 4)
        ],
        {
            type: "application/json"
        }
    );

    download(blob, filename);
}

export function exportText(text, filename = "file.txt") {

    const blob = new Blob(
        [text],
        {
            type: "text/plain"
        }
    );

    download(blob, filename);
}

function download(blob, filename) {

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = filename;

    link.click();

    URL.revokeObjectURL(url);
}