// ! Fetch APİ

function getUsers(url) {
    fetch(url) // Promise<Response>
        .then((response) => {
            return response.json();
            //json() da Promise fakat görevi veriyi almak 
        })
        .then((data) => console.log(data)) // aldığımız json verisini konsola yazdırdık
        .catch((err) => console.log(err))
}

// getUsers("users.json");

function getData(url) {
    fetch(url)
        .then((response) => response.json()) // return varmiş gibi kabul ediyo
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
}

getData("https://jsonplaceholder.typicode.com/albums")