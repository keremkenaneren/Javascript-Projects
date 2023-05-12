function print() {
    console.log("Hello World. My name is 'Kerem'. Hi! ");
}

function youWrite(write) {
    console.log(write);
}

function writeArray(...numbers) {
    console.log(numbers);
}


let toplam = 0;
function sum(...numbers) {
    for (let number of numbers) {
        toplam += number;
    }
}

function yasHesapla(dogumYYili) {
    let year = new Date().getFullYear();
    console.log(year - dogumYYili);
}



