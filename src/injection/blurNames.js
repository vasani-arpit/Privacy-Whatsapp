var leftSide = document.getElementById("pane-side");
var chatNames = leftSide.getElementsByTagName("span");
for (var x of chatNames) {
    var textName = x.getElementsByClassName("emoji-texttt");
    if (textName != null) {
        x.style.filter = "blur(4px)";
        x.classList.add("blur");
        x.setAttribute("onmouseover", "toggle_blur(this)");
        x.setAttribute("onmouseout", "toggle_blur(this)");
    }
}
