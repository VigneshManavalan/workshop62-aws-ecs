import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import CodeIcon from '@material-ui/icons/Code'
import ModeCommentIcon from '@material-ui/icons/ModeComment'

const useStyles = makeStyles((theme)=>({
    fabContainer: {
        position: 'absolute',
        bottom: theme.spacing(2),
        left: theme.spacing(2),
        marginRight:100,
       
      },
      fabButtonsMenu:{
          marginRight:10,
          width:100,
        fontSize:13,
        fontWeight:"bold",
        height:40,
        backgroundColor:theme.palette.primary.dark,
        boxShadow:"none"
      },
      fabButtonsCode:{
        marginRight:10,
        width:110,
      fontSize:13,
      height:40,
      fontWeight:"bold",
      backgroundColor:theme.palette.primary.dark,
      boxShadow:"none"
    },
    fabButtonsComments:{
        marginRight:10,
        width:170,
      fontSize:13,
      height:40,
      fontWeight:"bold",
      backgroundColor:theme.palette.primary.dark,
      boxShadow:"none"
    }
}))

const BottomPanel = () => {
    const classes = useStyles()
    return (
        <div className={classes.fabContainer} style={{position:"fixed"}}>
        <Fab color="primary" variant="extended" className={classes.fabButtonsMenu} style={{ borderRadius: 5 , padding:1}}>        
        Menu
            </Fab>
            <Fab color="primary" variant="extended" className={classes.fabButtonsCode} style={{ borderRadius: 5 }}>
        <CodeIcon />
        Handoff
            </Fab>
            <Fab color="primary" variant="extended" className={classes.fabButtonsComments} style={{ borderRadius: 5 }}>
        <ModeCommentIcon />
        No comments
            </Fab>
        </div>);
}

export default BottomPanel