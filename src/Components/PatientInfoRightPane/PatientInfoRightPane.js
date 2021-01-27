import React from "react"
import {Grid,Paper,makeStyles,Avatar,Button} from "@material-ui/core"
import PatientInfoTable from "../PatientInfoTable/PatientInfoTable"
import CurrentSurgeriesTable from "../CurrentSurgeriesTable/CurrentSurgeriesTable"

import PatientTab from "../PatientTab/PatientTab"
const useStyles = makeStyles((theme) => ({
  root: {
      position:"absolute",
      top:90,
      left:285,
    margin:2,
    marginTop:0,
    background:theme.palette.primary.dark,
    height:500,
    width:"100%",
    padding:20,
    paddingTop:0

  },
  bottomDiv:{
    position:"absolute",
    top:400,
    left:285,
  margin:2,
  marginTop:0,
  background:theme.palette.primary.main,
  height:600,
  width:"100%",
  padding:20,
  paddingTop:40,
  marginBottom:10
  }

}))


const PatientInfoRightPane = () =>{
    const classes = useStyles()

    return(
      <>
        <div className={classes.root}>
          <Grid container item xs={12} style={{marginBottom:10}}>
              <Grid container item xs={12}>
                 <p style={{fontWeight:"bold"}}>Patient Information</p> 
              </Grid>
              <Grid container xs={12}>
                <Grid container direction="column" item xs={1}>
                    <Avatar style={{width:80,height:80,marginLeft:40,marginTop:10}}>K</Avatar>
                </Grid>
                <Grid container direction="column" item xs={2}>
                    <Grid item > <p style={{fontWeight:"bold",fontSize:20}}>Kaamil Sheriff</p></Grid>
                    <Grid item > <PatientInfoTable rows={[{name:"Phone:",value:"987456321"},{name:"Email:",value:"xxxxxx@gmail.com"},{name:"Gender:",value:"Male"},{name:"Age:",value:"21"}]}/></Grid>
                    
                   
                </Grid>
                <Grid container direction="column" item xs={2}>
                    <Grid item > <p style={{fontWeight:"bold",fontSize:20,color:"#F7F7F7"}}>.</p></Grid>
                    <Grid item > <PatientInfoTable rows={[{name:"Surgery Type:",value:"Rotator Cuff Repair"},{name:"Surgery Date:",value:"15 Aug 2020"},{name:"Height (cm):",value:"180"},{name:"Weight (lb):",value:"140"},{name:"BMI:",value:"19"}]}/></Grid>
                    
                   
                </Grid>
                <Grid container direction="column" item xs={2} style={{marginLeft:20}}>
                    <Grid item > <p style={{fontWeight:"bold",fontSize:20,color:"#F7F7F7"}}>.</p></Grid>
                    <Grid item > <PatientInfoTable rows={[{name:"Anesthesiologist:",value:"Dr. Mugilan Ramesh"},{name:"Anesthesiologist Phone:",value:"111-2222-333"},{name:"Anesthesiologist Email:",value:"mugilangene@gmail.com"}]}/></Grid>
                    
                   
                </Grid>
                <Grid container direction="column" item xs={2} style={{marginLeft:50}}>
                    <Grid item > <p style={{fontSize:16,marginTop:60,marginLeft:30}}>Surgery Clearance</p><br></br><div style={{height:80,position:"absolute",top:150,width:80,borderRadius:80,background:"#43C43F",marginLeft:40}}><div style={{position:"absolute",top:25,left:23,fontSize:20,color:"white"}}>Yes</div></div></Grid>
                 
                   
                </Grid>
                <div style={{position:"absolute", top:270}}>
                    <PatientTab/>
                   
                </div>
              </Grid>
          
          </Grid>
  </div>
        <div  className={classes.bottomDiv}>
        <Grid container direction="column" spacing={2}>
          <Grid item xs={3}>
            <CurrentSurgeriesTable rows={[{name:"First Time Surgery",value:"No"}]}/>

          </Grid>
          <Grid item xs={3}>
            <CurrentSurgeriesTable rows={[{name:"Family History of Surgical Complications?",value:"Yes"}]}/>

          </Grid>
          <Grid item xs={3} style={{marginBottom:10}}>
            <CurrentSurgeriesTable rows={[{name:"If Yes, please provide more details",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis dignissim mi vel sodales. Maecenas elementum posuere pellentesque. Maecenas quis quam elementum"}]}/>

          </Grid>
          <Grid item xs={9}>
            Previous Surgeries
          </Grid>
          <Grid item xs={9}>
            <CurrentSurgeriesTable rows={[{name:"Surgery Type",value:"Shoulder reconstruction"},{name:"Date",value:"January 2008"},{name:"Anesthesia Type",value:'General "Breathing Tube"'},{name:"Surgical Complications",value:"No"},{name:"Anesthetic Complications (nausea, vomitting, difficult incubation)",value:"No"}]} isNew={true}/>

          </Grid>
        </Grid>
        <br></br>
        <br></br>
        <Button variant="contained" color="secondary" disableElevation style={{color:"#FFF"}}>
+ Add Surgery
</Button>
<br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
      </>
)

}
export default PatientInfoRightPane