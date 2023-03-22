import { useState } from "react";
import { io } from "socket.io-client";

const Object = () => {

    const [remoteURl, updateRemoteUrl] = useState("http://13.234.219.0");

    const socket = io("http://15.206.5.15:3001/");

    let loadPS = function (remoteUrl:string) {
        updateRemoteUrl(remoteUrl)
    }
    

    socket.on("getURL", (remoteUrl) => {
        const psURL = JSON.parse(remoteUrl)
        loadPS(psURL.url);
    })

    return (
        <object height={500} width={800} type="text/html" data={remoteURl}></object>
    )
}

export default Object;