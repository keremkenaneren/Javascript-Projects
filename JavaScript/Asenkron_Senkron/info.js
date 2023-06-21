/*
! Javascript -Senkron- çalışan bir programlama dilidir.
  
?---Asenkron Çalışmasına Sebep olanlar---
  -> Timing (setTimeOut)
  -> Events - DOM
  -> HTTP request (fetch)

!_____ CALLBACK - PROMISE - ASYNC & AWAIT _____
  -> asenkron yapıları senkrona çevirip yönetiyoruz

*/

console.log("Istanbul");

//Asenkron
setTimeout(() => {
    console.log("1000ms is run");
}, 1000);

setTimeout(() => {
    console.log("750ms is run");
}, 750);

setTimeout(() => {
    console.log("500ms is run");
}, 500);


console.log("Ankara");

