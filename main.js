console.log('js connected');

var lastSelection = document.getElementById("home-nav");

/*
function changeNavSelect(selection) {
    document.getElementById(selection).scrollIntoView();
    let element = document.getElementById(selection+"-nav");
    if (element != lastSelection) {
        element.classList.add("active");
        lastSelection.classList.remove("active");
        lastSelection = element;
    }
}
*/

window.addEventListener("scroll", function() {
    var checkElements = document.getElementsByClassName("section");
	for (const element of checkElements) {
        //console.log('section: ', element);
        if (window.scrollY < (element.offsetTop) + 5) {
            console.log("in ", element.id);
            let navEelement = document.getElementById(element.id+"-nav");
            if (navEelement != lastSelection) {
                navEelement.classList.add("active");
                lastSelection.classList.remove("active");
                lastSelection = navEelement;
            }
            break;
        }
	}
  });

