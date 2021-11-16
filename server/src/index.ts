import http from "http"
import express, { Request, Response } from "express"
import { Server, Socket } from "socket.io"
import cors from "cors"
import { BindOutput } from "./camera"
const app = express()
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
})

app.use(cors())

app.get("/", (req: Request, res: Response) => {
    res.json({
        msg: "Stream Is Listening 🚀"
    })
});

io.on("connect", (socket: Socket) => {
    console.log(`socket binded with id ${socket.id}`)
    BindOutput(socket, {})
});




server.listen(8080, () => {
    console.log("Server is Listening 🚀")
})