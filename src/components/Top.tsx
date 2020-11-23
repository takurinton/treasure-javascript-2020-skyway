import React, { FunctionComponent } from 'react'

import Box from '@material-ui/core/Box'
import { HomeStyle } from '../style/theme'
import { Typography } from '@material-ui/core'

const Top:FunctionComponent<{}> = () => {
    const classes = HomeStyle()
    return (
        <Box className={classes.topPage}>
            <Typography variant='h2'>
                Takurinton hoge app
            </Typography>
        </Box>
    )
}
export default Top
