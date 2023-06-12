const users = [
    {
        userId: 1,
        user: "kerem"
    },
    {
        userId: 2,
        user: "ahmet"
    },
    {
        userId: 3,
        user: "mehmet"
    },
    {
        userId: 4,
        user: "eren"
    },
    {
        userId: 5,
        user: "kenan"
    }
]

function getUserId() {

    setTimeout(() => {
        let userId = 7;
        return userId;
    }, 1000);

}

function getPostByUserId(userId) {
    console.log(userId);

    setTimeout(() => {
        users.forEach((user) => {
            if (user.userId === userId) {
                console.log(user.post);
            }
        });
    }, 500);
}

let userId = getUserId();
getPostByUserId(userId)