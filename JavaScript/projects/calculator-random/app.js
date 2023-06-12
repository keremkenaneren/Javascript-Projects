const sayi = document.querySelector(".sayi") //h1
const sayih = document.querySelector(".sayih") // h1
const cevapver = document.querySelector(".buton")
const input = document.querySelector("input")
const form = document.querySelector("#form")
const body = document.querySelector("body")
const sonuc_h1 = document.querySelector(".sonuc-h1")


let sayi1 = sayi.innerHTML = uret()
let sayi2 = sayih.innerHTML = uret()


let sonuc2 = parseInt(sayi1) + parseInt(sayi2);
console.log(sonuc2)


form.addEventListener("submit", sonuc)

function sonuc(event) {
    event.preventDefault();

    if (input.value == sonuc2) {
        sonuc_h1.innerHTML = sonuc2;
    }
    else {
        alert("Hata");
    }

}

function uret() {

    const randomNum = Math.floor(Math.random() * 11);
    return randomNum;

}

