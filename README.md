<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GovProfile</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f4f4f9;
        }
        .container {
            text-align: center;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            background-color: white;
        }
        input[type="text"] {
            padding: 8px;
            margin-top: 10px;
            font-size: 16px;
            width: 200px;
            border-radius: 4px;
            border: 1px solid #ccc;
        }
        button {
            padding: 8px 16px;
            font-size: 16px;
            margin-top: 20px;
            border-radius: 4px;
            cursor: pointer;
            background-color: #4CAF50;
            color: white;
            border: none;
        }
    </style>
</head>
<body>

<div class="container">
    <h1>GovProfile</h1>
    <p>Enter your name:</p>
    <input type="text" id="name" placeholder="Your name">
    <br><br>
    <button onclick="submitName()">Submit</button>
    <p id="greeting"></p>
</div>

<script>
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
</script>

</body>
</html>
