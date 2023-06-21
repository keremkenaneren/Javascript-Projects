// ! Ajax ve Http istekleri



let xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users")
xhr.onload = function () {

    console.log(xhr.responseText);

}

xhr.send();
/*
? Ajax ve XMLHttpRequest çok kullanılmadığı için
? tek bir örnek ile göstermek yeterli olur diye düşündüm
? daha çok pomise ve fetch kullanılıyor
*/