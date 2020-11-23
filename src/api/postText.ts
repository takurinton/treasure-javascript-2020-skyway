interface Body {
    name:string
    contents:string
}

const postText = async (body: Body) => {
    await fetch(`https://script.google.com/macros/s/AKfycbznp9P5nNsXuOQP-9zQTcRdXeeJfpx_JaBXXikvFm4L2PK3Z_Dx/exec`, {
        method: "POST",
        credentials: "same-origin",
        body: JSON.stringify(body), 
    })
}

export default postText

