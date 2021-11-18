var leftSide = document.getElementById("pane-side");
var photos = leftSide.getElementsByTagName("img");
for(var x of photos) {
    x.style.filter = "blur(4px)";
    x.classList.add("blur");
    x.setAttribute("onmouseover", "toggle_blur(this)");
    x.setAttribute("onmouseout", "toggle_blur(this)");
}