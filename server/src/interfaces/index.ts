import { Socket } from "socket.io"
export interface WebcamCallback {
    (socket: Socket, errorCallback: any): void
}