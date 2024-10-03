// Select the button and list container
const button = document.getElementById('ramDuttaBtn');
const listDiv = document.getElementById('list');

// Add event listener for button click
button.addEventListener('click', () => {
    const buttonText = button.innerText; // Get the button text (Ram Dutta)

    // Check if the button text matches "Ram Dutta"
    if (buttonText === "Ram Dutta") {
        // Clear the existing content of the list div
        listDiv.innerHTML = ''; // Remove all current list items
        
        // Create a new image element
        const img = document.createElement('img');
        img.src = 'ramuimg.jpg'; // Set the image source (make sure the image exists)
        
        // Set the image styles to cover the div
        img.style.width = '100%'; // Set width to 100%
        img.style.height = '100%'; // Set height to 100%
        img.style.objectFit = 'cover'; // Cover the entire div area

        // Append the image to the list div
        listDiv.appendChild(img);
    }
});


