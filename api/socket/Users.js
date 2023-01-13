let users = []

const addUser = ({ id, name }) => {
    console.log(users)

    const existinUser = users.find((user) => {
        return user.name === name
    });

    if (existinUser) {
        return console.log('username is taken')
    } else {
        const user = { id, name };
        users.push(user)
        return { user };
    }
}

const removeUser = (socketid) => {
    //remove user from users
    users = users.filter((user) => user.id !== socketid)
}

const getUser = (name) => users.find((user) => {
    return user.name === name
})

module.exports = { addUser, removeUser, getUser };
