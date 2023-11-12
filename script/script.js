const userInput = document.getElementById("userInput");
const startButton = document.getElementById("startButton");
const resultMessage = document.getElementById("resultMessage");

startButton.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const userNumber = parseInt(userInput.value);

    if (userNumber === randomNumber) {
        resultMessage.textContent = "Ты победил!";
    } else {
        resultMessage.textContent = "Давай еще раз";
    }
});