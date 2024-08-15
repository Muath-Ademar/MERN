const express = require('express');
const app = express();
 
require('dotenv').config();
const port = process.env.PORT;
const server = app.listen(port, () =>
  console.log(`The server is all fired up on port: ${port}`)
);
 
// To initialize the socket, we need to
// invoke the socket.io library
// and pass it our Express server
const io = require('socket.io')(server, { cors: true });
app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
require('./routes/chat.routes')(app);
io.on("connection", socket => {
    console.log("Nice to meet you. (shake hand)")
    socket.emit('welcome', 'Hello welcome to the server')
    socket.on("test", data => {
      console.log("Helolo")
        // socket.broadcast.emit("send_data_to_all_other_clients", data)
    })
})