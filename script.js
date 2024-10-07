document.addEventListener("DOMContentLoaded", function () {
    const words = ["Software Engineer", "Developer", "Senior Analyst", "Web Designer"];
    const typingText = document.getElementById("dynamicText");
    let wordIndex = 0;
    const changeInterval = 3000; // Change word every 3 seconds

    function changeWord() {
        typingText.textContent = words[wordIndex];
        wordIndex = (wordIndex + 1) % words.length; // Rotate through the words array
    }

    setInterval(changeWord, changeInterval);
    changeWord(); // Initial call to set the first word
});
