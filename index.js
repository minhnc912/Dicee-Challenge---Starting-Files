function openDice() {
    var randomNumber1 = Math.floor(Math.random() * 6 + 1);

    document
        .querySelector("img")
        .setAttribute("src", "images/dice" + randomNumber1 + ".png");

    var randomNumber2 = Math.floor(Math.random() * 6 + 1);

    document
        .querySelectorAll("img")[1]
        .setAttribute("src", "images/dice" + randomNumber2 + ".png");

    var randomNumber3 = Math.floor(Math.random() * 6 + 1);

    document
        .querySelectorAll("img")[2]
        .setAttribute("src", "images/dice" + randomNumber3 + ".png");
    var result = randomNumber1 + randomNumber2 + randomNumber3;
    
    if (result < 11) {
        document.querySelector(
            "h1"
        ).textContent = `The result: ${result}, Low!`;
    } else {
        document.querySelector(
            "h1"
        ).textContent = `The result: ${result}, High!`;
    }
}

document
    .getElementsByClassName("btn_start")[0]
    .addEventListener("click", function () {
        openDice();
    });
