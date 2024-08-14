
function openOverlay(overlayId) {
    const overlay = document.getElementById(overlayId);
    overlay.style.display = 'flex';

    // Add an event listener to close the overlay when clicking outside of it
    window.addEventListener('click', function (event) {
        if (event.target === overlay) {
            closeOverlay(overlayId);
        }
    });
}

function closeOverlay(overlayId) {
    document.getElementById(overlayId).style.display = 'none';
}

// Switch between overlays
function switchOverlay(closeOverlayId, openOverlayId) {
    closeOverlay(closeOverlayId);
    openOverlay(openOverlayId);
}







