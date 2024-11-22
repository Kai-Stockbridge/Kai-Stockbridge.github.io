// Check if a name is already stored in local storage
window.onload = function() {
    var storedName = localStorage.getItem("userName");
    if (storedName) {
        document.getElementById('greeting').innerText = "Welcome back, " + storedName + "!";
    }
}

// Function to handle name submission
function submitName() {
    var name = document.getElementById('name').value;
    if (name) {
        // Save name to local storage
        localStorage.setItem("userName", name);
        // Display greeting message
        document.getElementById('greeting').innerText = "Hello, " + name + "!";
        alert("You entered: " + name);
    } else {
        alert("Please enter a name.");
    }
}
