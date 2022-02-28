const clickCounterButton = document.querySelector('#click-count');

// write your code here
let clicks = 0;

clickCounterButton.addEventListener('click', function() {
    clicks += 1;
    if (clicks == 1) {;
        clickCounterButton.innerHTML = "You clicked the button " + clicks + " time."
    } else {
        clickCounterButton.innerHTML = "You clicked the button " + clicks + " times."
    }
});