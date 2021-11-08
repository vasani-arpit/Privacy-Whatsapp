import React, { useEffect, useRef } from 'react'
import { remote, ipcRenderer } from "electron"
import low from 'lowdb'
import { readFileSync } from "fs";
import FileSync from 'lowdb/adapters/FileSync'

const path = remote.require('path')
const userDataPath = remote.app.getPath('userData')

const adapter = new FileSync(path.join(userDataPath, 'db.json'))
console.log(userDataPath)
const db = low(adapter)


const existingId = db.get("machineId").value()
let randomId: string

//generate rendom ID
if (existingId) {
    randomId = existingId
} else {
    randomId = Math.random().toString(36).substring(7)
    db.set("machineId", randomId).write()
}


console.log(randomId)

export const ConversationsTab = () => {
    const webview: any = useRef()
    ipcRenderer.on("injection", () => {
        console.log("Time to inject script")
        webview.current.executeJavaScript(readFileSync("src/injection/WAPI.js", 'utf-8'))
    })


    useEffect(() => {
        document.querySelector("webview").addEventListener("dom-ready", (e) => {
            console.log("dom is ready.", e.target)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            e.target.openDevTools()
        })
        document.querySelector("webview").setAttribute("src", "https://web.whatsapp.com")
    })

    return (
        <webview
            id={`WA-${randomId}`}
            partition={`persist:mywasession${randomId}`}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            disablewebsecurity="true"
            useragent={`${window.navigator.userAgent.replace(/(WArchive|Electron|warchive|PrivacyWhatsapp)([^\s]+\s)/g, "")}`}
            preload={`file://${path.resolve(remote.app.getAppPath(), './src/injection/index.js')}`}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            className="full-page"
            ref={webview}
        >
        </webview>
    )
}