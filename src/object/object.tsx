import { useState } from "react";
import { io } from "socket.io-client";

const Object = () => {

    const [remoteURl, updateRemoteUrl] = useState("http://localhost:8082/");

    const socket = io("http://15.206.5.15:3001/");

    let loadPS = function (remoteUrl:string) {
        updateRemoteUrl(remoteUrl)
    }
    

    socket.on("getURL", (remoteUrl) => {
        const psURL = JSON.parse(remoteUrl)
        loadPS(psURL.url);
    })

    return (
        <object className="frame" type="text/html" data={remoteURl}></object>
    )
}

export default Object;