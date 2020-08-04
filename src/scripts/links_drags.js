const clickedEl = document.querySelector('.no-drag');
var limit = 5;
var mouseMoved = false;

function resetEvents() {
    clickedEl.onmousemove = null;
    clickedEl.ondragstart = null;
    clickedEl.onmouseleave = null;
    mouseMoved = false;
}
clickedEl.onmousedown = function (downEvent) {
    if (clickedEl.attributes.href) {
        clickedEl.onclick = function (clickEvent) {
            if (mouseMoved) {
                clickEvent.preventDefault();
            }
            resetEvents();
        };
    }
    
    clickedEl.onmouseleave = function () {
        resetEvents();
    };

    clickedEl.onmousemove = function (moveEvent) {
        clickedEl.ondragstart = function (dragEvent) {
            dragEvent.preventDefault();
        };

        if (Math.abs(moveEvent.x - downEvent.x) >= limit || Math.abs(moveEvent.y - downEvent.y) >= limit) {
            window.getSelection().selectAllChildren(clickedEl);
            mouseMoved = true;
        }
    };

};