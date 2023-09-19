document.addEventListener("DOMContentLoaded", function () {
    const messageButton = document.getElementById("messageButton");
    const messageText = document.getElementById("messageText");

    messageButton.addEventListener("click", function () {
        messageText.innerHTML = "i just wanted to remind you of something extremely important, i have always believed in you and will continue to do so. you're meant for greatness, and i'm confident you'll get into the best medical schools. your brain is an incredible powerhouse, and i am incredibly proud of you.💖";
        messageText.style.display = "block";
    });
});
