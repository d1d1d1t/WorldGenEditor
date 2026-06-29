// Hub ↔ Widget messaging layer (postMessage wrapper)

export function sendToWidget(iframe, message) {
  iframe.contentWindow.postMessage(message, "*");
}

export function listenToHub(handler) {
  window.addEventListener("message", (e) => {
    handler(e.data, e.origin);
  });
}

// standardized message types (prototype level)
export const MSG = {
  INIT: "INIT",
  EXPORT: "EXPORT",
  SYNC: "SYNC",
  UPDATE: "UPDATE"
};