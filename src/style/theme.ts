import { createStyles, makeStyles, Theme, createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
    palette: {
        primary: {
          light: '#ffff8b',
          main: '#81c784',
          dark: '#c9bc1f',
          contrastText: '#000000',
        },
        secondary: {
          light: '#63a4ff',
          main: '#1976d2',
          dark: '#004ba0',
          contrastText: '#ffffff',
        },
      },
  });

export const HeaderStyle = makeStyles(() =>
  createStyles({
    root: {
      marginBottom: "3%",
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      textAlign: "center", 
    }, 
    link: {
      color: "#000", 
      textDecoration: "none", 
    }
  })
);

export const HomeStyle = makeStyles(() => 
    createStyles({
        root: {
            marginRight: 'auto', 
            marginLeft: 'auto', 
            width: '50%', 
            textAlign: 'center', 
        },
        topPage: {
            paddingTop: '3%', 
            paddingBottom: '10%'
        }, 
        inputText: {
            width: '80%', 

        }, 
        button: {
            marginLeft: '2%', 
            width: '18%', 
        }
    })
)

export const RoomStyle = makeStyles(() =>
    createStyles({
        root: {
            display: 'block', 
            width: '820px', 
            marginRight: 'auto', 
            marginLeft: 'auto'
        }, 
        room: {
            display: 'flex'
        }, 
        camera: {
            margin: '10px'
        }, 
        inputID: {
            marginTop: '5%', 
            marginRight: 'auto', 
            marginLeft: 'auto', 
            width: '80%'
        },
    })
)