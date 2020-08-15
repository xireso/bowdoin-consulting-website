console.log('js connected');

const NAV_TOP_BUFFER = -60;
const THROTTLE_DELAY = 50;

var lastSelection = document.getElementById('home');

// //not needed bc new dynamic function
// function changeNavSelect(selection) {
//     document.getElementById(selection).scrollIntoView();
//     let element = document.getElementById(selection+"-nav");
//     if (element != lastSelection) {
//         element.classList.add("active");
//         lastSelection.classList.remove("active");
//         lastSelection = element;
//     }
// }

//cool throttle function. probably won't use but just in case
//https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event
let ticking = false;
window.addEventListener('scroll', function(e) {
    last_known_scroll_position = window.scrollY;
    //console.log(ticking );
        if (!ticking) {
            window.setTimeout(function() {
                changeNavBar(last_known_scroll_position);
                ticking = false;
            }, THROTTLE_DELAY);
        }
  
    ticking = true;
});

function changeNavBar(windY) {
    if (
		windY >= lastSelection.offsetTop + NAV_TOP_BUFFER &&
		windY <= lastSelection.offsetTop + lastSelection.offsetHeight
	) {
		console.log('end');
		return;
	}
	console.log('left ', lastSelection.id);
	var checkElements = document.getElementsByClassName('section');

	let num = 0;
	for (const element of checkElements) {
		num++;
        console.log(element.id + "- windY: " + windY + " Top " + (element.offsetTop + NAV_TOP_BUFFER) + " Bottom " + (element.offsetTop + element.offsetHeight));
		if (windY < element.offsetTop + element.offsetHeight) {
			console.log('in ', element.id);
			if (element != lastSelection) {
				document.getElementById(element.id + '-nav').classList.add('active');
				document.getElementById(lastSelection.id + '-nav').classList.remove('active');
				lastSelection = element;
			}
			console.log('for loop times ', num);
			break;
		}
	}
}


// window.addEventListener('scroll', function() {
// 	if (
// 		window.scrollY >= lastSelection.offsetTop - NAV_TOP_BUFFER &&
// 		window.scrollY <= lastSelection.offsetTop + lastSelection.offsetHeight - NAV_TOP_BUFFER
// 	) {
// 		console.log('end');
// 		return;
// 	}
// 	console.log('left ', lastSelection.id);
// 	var checkElements = document.getElementsByClassName('section');

// 	let num = 0;
// 	for (const element of checkElements) {
// 		num++;

// 		if (window.scrollY < element.offsetTop + element.offsetHeight - NAV_TOP_BUFFER) {
// 			console.log('in ', element.id);
// 			if (element != lastSelection) {
// 				document.getElementById(element.id + '-nav').classList.add('active');
// 				document.getElementById(lastSelection.id + '-nav').classList.remove('active');
// 				lastSelection = element;
// 			}
// 			console.log('for loop times ', num);
// 			break;
// 		}
// 	}
// });
