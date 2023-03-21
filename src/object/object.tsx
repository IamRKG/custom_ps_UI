import { useState } from "react";
import { io } from "socket.io-client";

const Object = () => {

    const [remoteURl, updateRemoteUrl] = useState("http://13.126.144.114");

    const socket = io("http://localhost:3000");

    let loadPS = function (remoteUrl: string) {
        updateRemoteUrl(remoteUrl)
    }
    

    socket.on("getURL", (remoteUrl) => {
        loadPS(remoteUrl);
    })

    return (
        <object height={500} width={800} type="text/html" data={remoteURl}></object>
    )
}

export default Object;