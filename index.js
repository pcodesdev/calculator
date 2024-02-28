const displayEl = document.getElementById("display")

function appendToDisplay(input) {
    displayEl.value += input
}

function clearDisplay() { 
    displayEl.value = ""
}

function calculate() {
    // catch errors
    try {
        // eval () is an internal js calculator function
        displayEl.value = eval(displayEl.value);
    } catch (error) {
        displayEl.value = "Error";
    }
    
}