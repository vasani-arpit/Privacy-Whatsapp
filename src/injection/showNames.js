var leftSide = document.getElementById("pane-side"); 
var chatNames = leftSide.getElementsByTagName("span");
for(var x of chatNames) {
    var textName = x.getElementsByClassName("emoji-texttt");
    
    if(textName != null) {
        x.classList.remove("blur");
        x.style.filter = "none";
    }
}