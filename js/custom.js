var contentElement = document.getElementById("content");
var defaultFontSize = 16; // Starting font size in pixels
var currentFontSize = defaultFontSize;

function increaseFontSize() {
    currentFontSize += 2;
    contentElement.style.fontSize = currentFontSize + "px";
    var elements = document.getElementsByTagName("*");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.fontSize = currentFontSize + "px";
    }
}

function decreaseFontSize() {
    currentFontSize -= 2; // Decrease the font size by 2 pixels
    contentElement.style.fontSize = currentFontSize + "px";
    var elements = document.getElementsByTagName("*");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.fontSize = currentFontSize + "px";
    }
}

function resetFontSize() {
    currentFontSize = defaultFontSize; // Reset font size to default
    applyFontSize();
    location.reload(); // Refresh the page after resetting the font size
}

function applyFontSize() {
    var elements = document.getElementsByTagName("*");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.fontSize = currentFontSize + "px";
    }
}

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
