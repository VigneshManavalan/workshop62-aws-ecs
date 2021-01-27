import React from "react"
import {Grid,Paper,makeStyles} from "@material-ui/core"
import PatientInfoCard from "../PatientInfoCard/PatientInfoCard"
import SearchBar from "../SearchBar/SearchBar"

const patientData = [{avatar:"K",name:<b>Kaamil Sheriff</b> ,clearanceDate:"15 Aug 2020",isCleared:true,isSelected:true},
                    {avatar:"L",name:<b>Lakshman Mani</b>,clearanceDate:"No clearance",isCleared:false,isSelected:false},
                    {avatar:"M",name:<b>Mohan Kathir</b>,clearanceDate:"19 Aug 2020",isCleared:true,isSelected:false},
                    {avatar:"I",name:<b>Iniyann Ramesh</b>,clearanceDate:"21 Aug 2020",isCleared:true,isSelected:false},
                    ]

const useStyles = makeStyles((theme) => ({
  root: {
    margin:2,
    marginTop:0,
    background:theme.palette.secondary.light,
    height:800,
    width:250,
    padding:20,
    paddingTop:0

  }}))


const PatientsLeftPane = () =>{
    const fillPatientCards = () =>{
        return patientData.map((record)=>(
            <PatientInfoCard avatar={record.avatar} name={record.name} clearanceDate={record.clearanceDate} isCleared={record.isCleared} isSelected={record.isSelected}/>
        ))
    }
    const classes = useStyles()

    return(
        <div className={classes.root}>
          <Grid container item xs={12} style={{marginBottom:10}}>
              <Grid container item xs={12}>
              <p style={{fontWeight:"bold"}}>Patients</p> 
              </Grid>
          <SearchBar />
          </Grid>
    {fillPatientCards()}


  </div>
)

}
export default PatientsLeftPane