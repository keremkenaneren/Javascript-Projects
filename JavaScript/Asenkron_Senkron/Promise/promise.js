/*

 ! This is " Callback Hell ""

let box = document.querySelector(".box");

setTimeout(() => {
    box.classList.add("bigger")

    setTimeout(() => {
        box.classList.add("circle")

        setTimeout(() => {
            box.classList.add("move")

            setTimeout(() => {
                box.classList.add("color")

                setTimeout(() => {
                    box.classList.remove("color")

                    setTimeout(() => {
                        box.classList.remove("move")

                        setTimeout(() => {
                            box.classList.remove("circle")

                            setTimeout(() => {
                                box.classList.remove("bigger")
                            }, 1000)

                        }, 1000)

                    }, 1000)

                }, 1000)

            }, 1000)
        }, 1000)

    }, 1000)

}, 1000)


*/

// ? Promise = Callback
// ? Promise Callbackin alternatifidir.

let check = true

// const promise = new Promise((resolve, reject) => {
//     if (check) {
//         resolve("Successfully")
//     } else {
//         reject("Warning !")
//     }
// })

// console.log(promise);



function createPromise() {
    return new Promise((resolve, reject) => {
        if (check) {
            resolve("Sıkıntı yok")
        } else {
            reject("Sıkıntı büüyük !!!!!!!!")
        }
    })
}

createPromise()
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => { console.log("Sıkıntı olsun olmasın çalışır"); })



