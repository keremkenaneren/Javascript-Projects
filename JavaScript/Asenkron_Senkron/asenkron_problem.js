const users = [
    {
        userId: 1,
        post: "kerem"
    },
    {
        userId: 2,
        post: "ahmet"
    },
    {
        userId: 3,
        post: "mehmet"
    },
    {
        userId: 4,
        post: "eren"
    },
    {
        userId: 5,
        post: "kenan"
    }
]

function getUserId(callback) {
    setTimeout(() => {
        let userId = 1
        callback(userId)
    }, 1000);
}

function getPostByUserId(userId) {
    setTimeout(() => {
        users.forEach((user) => {
            if (user.userId === userId) {
                console.log(user.post);
            }
        });
    }, 500);
}

getUserId(getPostByUserId);
