const input = document.querySelectorAll("input");
const button = document.querySelector("button");
const div = document.querySelector("div");

function clickButton() {
    input.forEach(item => {
        if (item.value < 100 || item.value > 300) {
            div.textContent = "одно из чисел вне диапазона от 100 до 300";
            return;
        }

        let url = `https://picsum.photos/${input[0].value}/${input[1].value}`;
        let result = fetch(url);

        result.then(response => {
            if (response.ok) {
                div.innerHTML = `<img src=${response.url}>`;
            }
        }).catch(error => console.log(error));

    })
}

button.addEventListener("click", clickButton);