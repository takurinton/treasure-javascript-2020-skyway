import React, { useState, useRef, useEffect , FunctionComponent } from 'react'
import { useLocation } from 'react-router-dom'
import Peer from 'skyway-js'

import useText from '../hooks/useText'
import { RecognitionEffect } from '../recognition/Recognition'

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input'
import Box from '@material-ui/core/Box'
import { Typography } from '@material-ui/core'

import { RoomStyle, HomeStyle } from '../style/theme'

const Room:FunctionComponent<{}> = () => {
    const classes = RoomStyle()
    const inputButton = HomeStyle()
    const PEER_KEY = 'f4314d6c-ad3c-450c-90df-2811611d4a25'
    const peer: Peer = new Peer({ key: PEER_KEY }) // 隠した方が良いかも？
    let location = useLocation()
    const n: string | unknown = location.state
    if (typeof n === 'string') {
        var name:string = n
    }
    const [myId, setMyId] = useState<string>('')
    const [callId, setCallId] = useState<string>('')
    const me: React.MutableRefObject<any> = useRef(null)
    const to: React.MutableRefObject<any>  = useRef(null)
    const recognition = useRef<RecognitionEffect>();
    const [progress, setProgress] = useState("");
    const [speech, setSpeech] = useState<string>('')
    
    const {
        state, 
        handleSubmit
    } = useText()

    const openCall = () => {
      peer.on('open', () => {
        setMyId(peer.id)
        navigator.mediaDevices.getUserMedia({ 
          video: true, 
          audio: true 
        })
        .then(localStream => {
          me.current.srcObject = localStream
        })
      })
      
      peer.on('call', mediaConnection => {
        mediaConnection.answer(me.current.srcObject)
        mediaConnection.on('stream', async stream => {
          to.current.srcObject = stream
        })
      })
    }

    const makeCall = () => {
      const mediaConnection = peer.call(callId, me.current.srcObject)
      mediaConnection.on('stream', async stream => {
        to.current.srcObject = stream
        await to.current.play().catch(console.error)
      })
    }

    // 1回だけ実行、これより良い方法全然ありそう
    useEffect(( ) => {
      openCall()
    }, [])

    useEffect(() => {
      const r = (recognition.current = new RecognitionEffect());
      r.onFinal = (c) => {
        r.toggle()
        setSpeech(c)
        const userName = name
        state.name = userName
        state.contents = c
        handleSubmit(state)
      }
      r.onError = () => {      
        console.log('error')
      };
      r.onProgress = setProgress;
    }, [speech]);
    
    return (
      <Box className={classes.root}>
        <Box className={classes.room}>
          <Box className={classes.camera}>
            <Typography variant="h4">
              You: {typeof n === undefined ? '' : n}
            </Typography>
              <video width="400px" autoPlay muted playsInline ref={me} />
              <p>Your ID : {myId}</p>
          </Box>
          <Box className={classes.camera}>
          <Typography variant="h4">
            Your friend
          </Typography>
            <video width="400px" autoPlay muted playsInline ref={to}/>
          </Box>
        </Box>
        <Box className={classes.inputID} >
          <Input value={callId} onChange={e => setCallId(e.target.value)} placeholder="通話相手のIDを入力してください" className={inputButton.inputText} />
          <Button onClick={makeCall} variant="contained" color="primary" className={inputButton.button} >発信</Button>
        </Box>
      </Box>
    )
}

export default Room