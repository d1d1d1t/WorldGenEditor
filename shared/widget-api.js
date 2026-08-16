/*
 * shared/widget-api.js
 *
 * Hub ↔ widget communication.
 *
 * Messages control widgets.
 * Numerical generator data belongs to the atlas.
 */

export const MSG = Object.freeze({

    INIT: "INIT",

    GENERATE: "GENERATE",

    INVERT: "INVERT",

    EXPORT: "EXPORT",

    RESET: "RESET",

    UPDATE: "UPDATE",

    SET_SETTINGS: "SET_SETTINGS",

    SET_SEED: "SET_SEED",

    SET_WAR_LEVEL: "SET_WAR_LEVEL"

});


export function sendToWidget(
    iframe,
    type,
    payload = {}
) {

    if (
        !iframe ||
        !iframe.contentWindow
    ) {

        return;

    }

    iframe.contentWindow.postMessage(

        {
            type,
            payload
        },

        "*"

    );

}


export function listenToHub(
    handler
) {

    window.addEventListener(
        "message",
        event => {

            if (!event.data) {
                return;
            }

            handler(
                event.data,
                event.origin
            );

        }
    );

}


export function publishToHub(
    type,
    payload = {}
) {

    window.parent.postMessage(

        {
            type,
            payload
        },

        "*"

    );

}
