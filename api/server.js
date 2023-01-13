const express = require('express');
const app = express();
const socket = require('socket.io')
const bodyparser = require('body-parser')
const ConnectDb = require('./config/db')
const cors = require('cors')
const morgan = require('morgan')
const cookiParser = require('cookie-parser')
const {
    addUser,
    removeUser,
    getUser,
    users
} = require('./socket/Users')


//config Path 
require('dotenv').config({
    path: './config/config.env'
})

//ConnectionDb
ConnectDb()


app.use(cors({ origin: 'http://localhost:3000', credentials: true }))



//make the client side public
app.use(express.static('public'))


//use body-parser
app.use(bodyparser.json());

//use coookie 
app.use(cookiParser())

app.use(morgan('dev'))


const AuthRoute = require('./Routes/auth.route');
const Posts = require('./Routes/posts.route')
const Get = require('./Routes/get.route');


app.use('/api', AuthRoute)
app.use('/api', Posts)
app.use('/api', Get)


app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Page not Founded"
    })
})


const server = app.listen(process.env.PORT || 5000, () => {
    console.log(`Server Listening ${process.env.PORT || '5000'} `)
})


const io = socket(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true
    },
});


io.on("connection", async (socket) => {

    socket.on("addUser", async (name) => {
        console.log(socket.id)
        addUser({ id: socket.id, name })
    });

    socket.on("disconnect", () => {
        removeUser(socket.id)
    })

    //notification
    socket.on("likeNotification", async (data) => {
        const user = getUser(data.to.user);
        if (user) {
            io.to(user.id).emit("notificationResult", {
                content: data.content,
                to: data.to,
            })
        }
    })

    socket.on("sendMessage", async (data) => {
        const user = getUser(data.to);
        if (user) {
            io.to(user.id).emit("getMessage", data.message);
        }
    })


})

