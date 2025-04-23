// Wait for the page to load before running our code
window.onload = function() {
    
    // Get all the elements we want to work with
    let title = document.getElementById("title");
    let message = document.getElementById("message");
    let box = document.getElementById("box");
    
    // Button to change text
    document.getElementById("changeTextBtn").onclick = function() {
        message.textContent = "The text has been changed!";
    };
    
    // Button to change color
    document.getElementById("changeColorBtn").onclick = function() {
        box.style.backgroundColor = "pink";
        box.style.color = "darkred";
        box.textContent = "Now I'm pink!";
    };
    
    // Button to show/hide the box
    document.getElementById("toggleBoxBtn").onclick = function() {
        if(box.style.display === "none") {
            box.style.display = "block";
            this.textContent = "Hide Box";
        } else {
            box.style.display = "none";
            this.textContent = "Show Box";
        }
    };
    
    // Bonus: Change title color when mouse hovers
    title.onmouseover = function() {
        this.style.color = "green";
    };
    
    title.onmouseout = function() {
        this.style.color = "black";
    };
};