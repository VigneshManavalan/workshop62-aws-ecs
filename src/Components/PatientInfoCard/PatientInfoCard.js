import React from "react"
import {Grid,Paper,makeStyles,Avatar,Typography} from "@material-ui/core"
const PatientsLeftPane = (props) =>{

    const useStyles = makeStyles((theme)=>({
        patientCardSelected:{
            background:theme.palette.secondary.main,
            borderRadius:5,
            color:theme.palette.primary.main,
            padding:10,

        },
        patientCardUnSelected:{
            background:theme.palette.primary.main,
            borderRadius:5,
     
            color:"black",
            padding:10,
        }
    }))
    const classes = useStyles()


    return(
        <Grid
        container
        item
        xs={12}
        alignItems="center"
        
        className={props.isSelected?classes.patientCardSelected:classes.patientCardUnSelected}
        style={{marginBottom:10}}
      >
        <Grid item xs={3} >
        <Avatar>{props.avatar}</Avatar>
        </Grid>
        <Grid item xs={6}>
          <Typography style={{fontSize:14, marginLeft:5}}>{props.name}</Typography>
          <Typography style={{fontSize:12,  marginLeft:5, color:props.isSelected? "white" :"grey"}}>{props.clearanceDate}</Typography>
        </Grid>
        <Grid item xs={3} alignItems="center">
          <div style={{background:props.isCleared?"#43C43F":"red",height:15, marginLeft:20,width:15,borderRadius:15 }}></div>
        </Grid>


    </Grid>
)

}
export default PatientsLeftPane