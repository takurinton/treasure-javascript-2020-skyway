import React from 'react';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

import { HeaderStyle } from '../style/theme'



const Header = () => {
    const classes = HeaderStyle()
    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <IconButton edge="start"  color="inherit" aria-label="menu">
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    <Link href="/textapp/#/" className={classes.link}>Takurinton skyway app</Link>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header