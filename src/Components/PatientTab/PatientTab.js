import React from "react"
import {Button, ButtonGroup} from "@material-ui/core"




const PatientTab = () =>{
  return(
<ButtonGroup  aria-label="outlined primary button group" style={{backgroundColor:"white",color:"black", fontSize:1}}>
  <Button style={{color:"#00A0F0",}}><span style={{fontSize:10}}>List Of Prior Surgeries</span></Button>
  <Button><span style={{fontSize:11, padding:10}}>List of Medical Diagnosis</span></Button>
  <Button><span style={{fontSize:11, padding:10}}>List Of Medications</span></Button>
  <Button><span style={{fontSize:11, padding:10}}>Airway Evaluation</span></Button>
  <Button><span style={{fontSize:11, padding:10}}>Anesthesia Clearance and Reccomendation</span></Button>
</ButtonGroup>)
}

export default PatientTab