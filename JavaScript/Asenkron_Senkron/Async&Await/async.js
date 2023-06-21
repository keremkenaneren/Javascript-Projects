/*

// ! Promise Hell Örneği

document.querySelector("#button").addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .then((post) => {
            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
                .then((response) => response.json())
                .then((commends) => console.log(commends))
        })
})

*/

/**
 * ! Async & Await
 * ? async : asenkron fonksiyon önüne yazılır
 * ? await : asenkron işlemin önüne yazılır. bir sonraki kodun beklemesini sağlar
 */

/*

document.querySelector("#button").addEventListener("click", async () => {
    const responsePost = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const post = await responsePost.json()

    const responseCommends = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
    const commends = await responseCommends.json()
    console.log(commends);
})

*/

// ! Üstte yazdığım kodu bir tur daha kısaltıcam

document.querySelector("#button").addEventListener("click", async () => {
    const post = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()

    const commends = await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json()

    console.log(post, commends);
})

