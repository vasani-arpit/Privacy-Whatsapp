var leftSide = document.getElementById("pane-side");
if (leftSide == null) prompt("Please open the conversations tab to make the function work!")
var photos = leftSide.getElementsByTagName("img");
for (var x of photos) {
    x.classList.remove("blur");
    x.style.filter = "none";
}