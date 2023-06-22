
const form_wrapper = document.querySelector(".form-wrapper");
const form = document.querySelector("#form");
const searchInput = document.querySelector("#searchInput");
const button_wrapper = document.querySelector(".button-wrapper");
const search_button = document.querySelector("#search-button");
const clear_button = document.querySelector("#clear-button");
const image_list_wrapper = document.querySelector(".image-list-wrapper")


runEventListeners();

function runEventListeners() {

    form.addEventListener("submit", search);
    clear_button.addEventListener("click", clear)

}

function clear() {
    searchInput.value = "";
    // Array.from(image_list_wrapper.children).forEach((child) => child.remove())
    image_list_wrapper.innerHTML = "";
}


function search(e) {

    let value = searchInput.value.trim();

    // @RequestParam
    fetch(`https://api.unsplash.com/search/photos?page=1&query=${value}`, {
        method: "GET",
        headers: {
            Authorization: "Client-ID iiizDuIRRGrGPHJn2ZgtfSutBxCAQyVWRqwtt1h4psk"
        }
    })
        .then((response) => response.json())
        .then((data) => {
            Array.from(data.results).forEach((image) => {
                addImageToUI(image.urls.small)
            })
        })
        .catch((err) => console.log(err))

    e.preventDefault();

}


function addImageToUI(url) {

    let div = document.createElement("div");
    div.className = "cards my-4 col-4";

    let img = document.createElement("img");
    img.setAttribute("src", url);

    img.width = `400`;
    img.height = `400`;

    div.append(img);
    image_list_wrapper.append(div);

}