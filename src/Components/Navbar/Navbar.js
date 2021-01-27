import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CompanyLogo from './../../assets/companyLogo.png';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {Grid,Badge,Avatar} from "@material-ui/core"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height:90,
    boxShadow:"none",
  },
  toolbar:{
    boxShadow:"none",
    alignItems: 'flex-start',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  leftFields:{
      color:"#26292C",
      background:theme.palette.primary.main,
      "&:hover":{
        background:theme.palette.secondary.main,
        color:theme.palette.primary.main
      },
      height:80,
      borderRadius:0,
      margin:0
      
  },
  rightFields:{
    marginRight:10,
    height:70,
    borderRadius:0,
    margin:0

  },
  customBadge: {
    backgroundColor: "red",
    color: "white",
    
    
  }
}));

export default function Navbar() {
  const navbarLeftFields = ["Patients","Calendar","Users","Billing"]
  const classes = useStyles();

  const fillLeftFields = () =>{
      return(navbarLeftFields.map(item=>
      (
          <span>
      <Button variant="h6" className={classes.leftFields} noWrap>
      <span style={{fontweight:"bolder"}}>{item}</span>
    </Button></span>)
    ))
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{boxShadow:"none",}}>
        <Toolbar>
        <Grid
      justify="space-between" 
      container 
    >
      <Grid item>
      <IconButton edge="start" className={classes.menuButton} style={{marginRight:70}}color="inherit">
            <img src={CompanyLogo} style={{height:55,width:85}} />
          </IconButton >
          {fillLeftFields()}
        
      </Grid>

      <Grid item>
      <span >
      <IconButton className={classes.rightFields}>
      <Badge badgeContent="" variant="dot" color="primary" overlap="circle" classes={{ badge: classes.customBadge }}>
     <NotificationsIcon/>
     </Badge>
     </IconButton>
         </span>
         <span>
         <IconButton className={classes.rightFields}> 
         <Avatar style={{height:30,width:30}}>V</Avatar>
     </IconButton>
         </span> 
      </Grid>
    </Grid>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}