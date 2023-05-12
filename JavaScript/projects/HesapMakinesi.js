//Hesap makinesi

function topla(n1, n2) {
   return n1 + n2;
}
function cikar(n1, n2) {
   return n1 - n2;
}
function carp(n1, n2) {
   return n1 * n2;
}
function bol(n1, n2) {
   return n1 / n2;
}

let sor = prompt("1-toplama \n 2-cikarma \n 3-carp \n 4-bol \n\nSeç : ");
let n1 = parseInt(prompt("Sayı 1 :: "));
let n2 = parseInt(prompt("Sayı 2 :: "));

sor == 1
   ? console.log(n1 + " + " + n2 + " = " + topla(n1, n2))
   : console.log(false);

sor == 2
   ? console.log(n1 + " - " + n2 + " = " + cikar(n1, n2))
   : console.log(false);

sor == 3
   ? console.log(n1 + " * " + n2 + " = " + carp(n1, n2))
   : console.log(false);

sor == 4
   ? console.log(n1 + " / " + n2 + " = " + bol(n1, n2))
   : console.log(false);
