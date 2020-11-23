import React, { useState } from 'react'

import postText from '../api/postText'

interface Body {
    name: string
    contents: string 
}

const initialState:Body = {
    name: "", 
    contents: ""
}

const useText = () => {
    const [state, setState] = useState<Body>(initialState)

    const handleSubmit = (body:Body) => {
        postText(body)
        setState(initialState)
    }

    return {
        state, 
        handleSubmit
    }
}

export default useText