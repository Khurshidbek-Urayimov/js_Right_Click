const contextMenu = document.querySelector('.wrapper'),
    shareMenu = contextMenu.querySelector('.share-menu');

window.addEventListener('contextmenu', e => {
    e.preventDefault();
    let x = e.offsetX, y = e.offsetY,
        winWidth = window.innerWidth,
        winHeight = window.innerHeight,
        smWidth = contextMenu.offsetWidth,
        smHeight = contextMenu.offsetHeight;

    if(x >(winWidth - smWidth - shareMenu.offsetWidth)) {
        shareMenu.style.left = "-200px";
    } else {
        shareMenu.style.left = "";
        shareMenu.style.right = "-200";
    }
    x = x > winWidth - smWidth ? winWidth - smWidth -5 : x;
    y = y > winHeight - winHeight ? smHeight - smHeight -5 : y;

    contextMenu.style.left = `${x}px`;
    contextMenu.style.top = `${y}px`;
    contextMenu.style.visibility = "visible";
})
document.addEventListener("click", () => contextMenu.style.visibility = "hidden");
