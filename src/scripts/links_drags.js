const clickedEl = document.querySelectorAll('.no-drag');
var limit = 5;
var mouseMoved = false;

function resetEvents() {
    clickedEl.forEach(element => {
        element.onmousemove = null;
        element.ondragstart = null;
        element.onmouseleave = null;
    });
    mouseMoved = false;
}
clickedEl.forEach(element => {
    element.onmousedown = (downEvent) => {
        if (element.attributes.href) {
            element.onclick = (clickEvent) => {
                if (mouseMoved) clickEvent.preventDefault();
                resetEvents();
            };
        }
        element.onmouseleave = () => { resetEvents(); };

        element.onmousemove =  (moveEvent) => {
            element.ondragstart =  (dragEvent) => {
                dragEvent.preventDefault();
            };

            if (Math.abs(moveEvent.x - downEvent.x) >= limit || Math.abs(moveEvent.y - downEvent.y) >= limit) {
                window.getSelection().selectAllChildren(element);
                mouseMoved = true;
            }
        }
    }
})