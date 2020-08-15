console.log('js connected');

var lastSelection = document.getElementById("home-nav");

function changeNavSelect(selection) {
    document.getElementById(selection).scrollIntoView();
    let element = document.getElementById(selection+"-nav");
    if (element != lastSelection) {
        element.classList.add("active");
        lastSelection.classList.remove("active");
        lastSelection = element;
    }
}
