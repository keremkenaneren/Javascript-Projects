//getElementById : id ye göre element yakalar

//getElementByClassName : class a göre element yakalar

//getAttribute : alacğı şeyin özelliği verir (değerini)

//getElementByTagName : etiket ismine göre alio


/*
--- querySelector --- querySelectorAll

bunlar ile seçmek için css gibi kullanıyoruz.

class için " . " id için " # "

*/

/**
 * ---FARKLARI---
 *
 *  örneğin : getElementByClassName özelliği o classa sahip herşeyi verir.
 * fakat ;
 *   querySelector  sadece o classa sahip tek bir etiketi verir.
 *
 * Ama eğer hem querySelector kullanmak istiyorsunuz ve tüm classları almak istiyorsunuz
 * o zamanda "querySelectorAll" kullanın !
 */




//Html gibi eklemek için :
/**
 *
const container = document.querySelector(".container");
const cardBody = document.querySelectorAll(".card-body")[1];

const link = document.createElement("a")

link.id = "goMyGithub";
link.className = "btn btn-warning btn-sm mt-3 btn-lg";
link.innerHTML = " Github for Contact";
link.href = "https://github.com/ErenKerem82";
link.target = "_blank"

container.appendChild(link);

console.log(link);
 */


// STYLE METODUNUN KULLANIMI (tavsiye etmem)
// const clear = document.querySelector("#clearButton");
// const add = document.querySelector("#todoAddButton");

// console.log(clear);
// console.log(add);

// clear.style.border = "3px black solid";
// clear.style.borderRadius = "10px";

// add.style.border = "3px black solid";
// add.style.borderRadius = "10px"

