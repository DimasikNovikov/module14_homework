const input = document.querySelectorAll("input");
const button = document.querySelector("button");
const div = document.querySelector("div");


function clickButton() {
        const flagInput1 = (input[0].value >= 1 && input[0].value <= 10) ? true : false;
        const flagInput2 = (input[1].value >= 1 && input[1].value <= 10) ? true : false;

        if(!flagInput1 && !flagInput2) {
            div.textContent = "Номер страницы и лимит вне диапазона от 1 до 10";
            return;
        } else if(!flagInput1) {
            div.textContent = "Номер страницы вне диапазона от 1 до 10";
            return;
        } else if(!flagInput2) {
            div.textContent = "Лимит вне диапазона от 1 до 10";
            return;
        }  

        let url = `https://picsum.photos/v2/list?page=${input[0].value}&limit=${input[1].value}`;

        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);

        xhr.onload = () => {
            if(xhr.status != 200) {
                div.textContent="Ошибка загрузки!"
                return;
            }

            const response = JSON.parse(xhr.response);
            const html = [];
            
            for(let i = 0; i < response.length; i++)
                html.push(`<img src="${response[i].download_url}" width="20%" height="20%">`);
            
             const htmlString = html.join(" "); 
             div.innerHTML = htmlString;
             localStorage.setItem("htmlString", htmlString);
           
        }

        xhr.send();

    }


button.addEventListener("click", clickButton);

let htmlString = localStorage.getItem("htmlString");
div.innerHTML = htmlString;
