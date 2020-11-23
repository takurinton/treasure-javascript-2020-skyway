import React, { useState, FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import Box from '@material-ui/core/Box'
import Top from '../components/Top'
import { HomeStyle } from '../style/theme'

const Home:FunctionComponent<{}>  = () => {
    const classes = HomeStyle()
    let history = useHistory()
    const [name, setName] = useState<string>('')

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        history.push({
            pathname: "/room",
            state: name
        })
    }
    return (
        <Box className={classes.root}>
            <Top />
            <form onSubmit={onSubmit}>
                <Input onChange={onChange} required={true} value={name} type="text" name="name" placeholder='名前を入力してください' className={classes.inputText} />
                <Button type="submit" variant="contained" color="primary" className={classes.button} >次へ</Button>
            </form>
        </Box>
    )
}

export default Home