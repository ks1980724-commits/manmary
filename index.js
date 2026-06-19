const io = require("socket.io")
const socket = io()
const express = require("express")
const app = express()
const PORT = 3000

app.use(express.static("public"));

socket.on('connection', (stream) => {
    console.log("user connection")
})

app.listen(PORT, () => {
    console.log("MANMARRY_YBSG IS RUNNING")
});