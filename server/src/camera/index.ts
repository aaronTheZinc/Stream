//Available in nodejs

import NodeWebcam from "node-webcam"
import { WebcamCallback } from "../interfaces";


//Default options

var opts = {
    width: 1280,
    height: 720,
    quality: 100,
    frames: 60,
    delay: 0,
    saveShots: true,
    output: "jpeg",
    device: false,
    callbackReturn: "location",
    verbose: false
};


//Creates webcam instance

var Webcam = NodeWebcam.create( opts );


Webcam.capture( "test_picture", function( err, data ) {} );

NodeWebcam.capture( "test_picture", opts, function( err, data ) {

});


//Get list of cameras

Webcam.list( function( list ) {

    var anotherCam = NodeWebcam.create( { device: list[ 0 ] } );

});

//Return type with base 64 image

var options = {
    callbackReturn: "base64"
};



export const BindOutput: WebcamCallback = (socket, errorCallback  ) => {
    NodeWebcam.capture( "test_picture", options, function( err: any, data: string ) {
        socket.emit("frame", { frame: data })
        console.log(err)
    });
}