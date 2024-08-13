function openOverlay(overlayId) {
    document.getElementById(overlayId).style.display = 'flex';
}

function closeOverlay(overlayId) {
    document.getElementById(overlayId).style.display = 'none';
}

function switchOverlay(closeOverlayId, openOverlayId) {
    closeOverlay(closeOverlayId);
    openOverlay(openOverlayId);
}
