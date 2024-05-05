let selectedFile = null; // To hold the selected file

window.onload = function() {
    document.getElementById('imageUpload').addEventListener('change', function(event) {
        selectedFile = event.target.files[0]; // Save the file when selected
    });
};

function uploadImage() {
    const plantName = document.getElementById('plantName').value; // Get the plant name from the input field
    if (selectedFile && plantName) { // Ensure both the file and name are provided before processing
        const reader = new FileReader();
        reader.onload = function(e) {
            const card = document.createElement('div');
            card.className = 'card';

            const cardInner = document.createElement('div');
            cardInner.className = 'card-inner';

            const cardFront = document.createElement('div');
            cardFront.className = 'card-front';
            const imgElement = document.createElement('img');
            imgElement.src = e.target.result;
            cardFront.appendChild(imgElement);

            const cardBack = document.createElement('div');
            cardBack.className = 'card-back';
            cardBack.innerText = plantName; // Use the plant name entered

            cardInner.appendChild(cardFront);
            cardInner.appendChild(cardBack);
            card.appendChild(cardInner);

            card.onclick = function() {
                card.classList.toggle('flipped');
            };

            document.querySelector('.grid').appendChild(card);
            document.getElementById('plantName').value = '';  // Clear the name input after adding the card
            document.getElementById('imageUpload').value = ''; // Reset the file input
            selectedFile = null; // Clear the global file variable to prepare for the next upload
        };
        reader.readAsDataURL(selectedFile);
    } else {
        alert('Please select a file and enter a name.');
    }
}
