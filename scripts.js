function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.style.display = section.style.display === 'none' || section.style.display === '' ? 'block' : 'none';
}

function validateStory() {
    var storyInput = document.getElementById("storyInput").value;
    var storyError = document.getElementById("storyError");

    if (storyInput.length < 3) {
        storyError.style.display = "block";
        storyError.textContent = "Story must be at least 3 characters.";
    } else {
        storyError.style.display = "none";
        alert("Story submitted successfully!");
        // You can add further submission logic here
    }
}
