// List of names to check against
const nameList = ['John', 'Alice', 'Bob', 'Emily'];

// Function to handle form submission
document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const nameInput = document.getElementById('nameInput').value.trim(); // Get user input
    const resultDiv = document.getElementById('result'); // Get result div

    // Check if the entered name is in the list
    if (nameList.includes(nameInput)) {
        resultDiv.textContent = `Yes, ${nameInput} is in the list.`;
    } else {
        resultDiv.textContent = `No, ${nameInput} is not in the list.`;
    }
});
