// XHR запрос. Method: GET

const input = document.querySelector("input");
const button = document.querySelector("button");
const div = document.querySelector("div");

button.onclick = () => {

    if (input.value > 10 || input.value < 1)
        div.textContent = "число вне диапазона от 1 до 10";
    else {
        const url = `https://picsum.photos/v2/list?limit=${input.value}`;
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);

        xhr.onload = () => {
            if(xhr.status !== 200) {
                div.textContent="Ошибка загрузки!"
                return;
            }

            const response = JSON.parse(xhr.response);
            //  console.log(response);

            let html = [];
            for(let i = 0; i < response.length; i++)
                html.push(`<img src=${response[i].download_url} width="20%" height="20%"></img>`);
            div.innerHTML = html.join("");  
        }

        xhr.send();

    }
}  