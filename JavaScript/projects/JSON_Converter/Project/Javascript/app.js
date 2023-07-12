let nameInput = document.querySelector(".name")
let mailInput = document.querySelector(".mail")
let form = document.querySelector(".kayit")
let button = document.querySelector(".sign-in")
let print = document.querySelector(".print")

runEvent();

function runEvent() {
    form.addEventListener("submit", save)
}

function save(e) {

    let name = nameInput.value.trim();
    let mail = mailInput.value.trim();


    let addNameStorage = localStorage.setItem("name", JSON.stringify(name))
    let addMailStrogae = localStorage.setItem("mail", JSON.stringify(mail))


    let getName = localStorage.getItem("name")
    let getMail = localStorage.getItem("mail")


    let converteName = JSON.parse(getName)
    let converteMail = JSON.parse(getMail)

    let a = `{ \n "name" : "${converteName}" \n "mail" : ${converteMail} }`;

    print.textContent = a;

    e.preventDefault();

}