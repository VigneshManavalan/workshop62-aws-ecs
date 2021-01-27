import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
const useStyles = makeStyles((theme)=>({
  table: {
    minWidth: 200,
    boxShadow:"none",
    border:"none",
   
  },
  MuiTableCell: { borderBottom: "none",margin:0, padding:10, background:theme.palette.primary.dark }
}));



export default function PatientInfoTable(props) {
  const classes = useStyles();
  const rows = props.rows
  return (
    <TableContainer component={Paper} style={{border:"none",    boxShadow:"none",}}>
      <Table className={classes.table}>
          {props.isNew ? (      
          <TableBody>
          <TableRow>
          {rows.map((row,index) => (
          <TableCell  classes={{ root: classes.MuiTableCell}} style={{fontWeight:"bold",backgroundColor:"#E8F5FE"}}>
            {row.name}
          </TableCell>))}
          <TableCell  classes={{ root: classes.MuiTableCell}} style={{fontWeight:"bold",backgroundColor:"#E8F5FE"}}>
           
          </TableCell>
          </TableRow>
          <TableRow>
          {rows.map((row) => (
          <TableCell align="left" classes={{ root: classes.MuiTableCell}} style={{paddingTop:8}}>{row.value}</TableCell>
        ))}
        <TableCell align="left" classes={{ root: classes.MuiTableCell}} style={{paddingTop:8}}><DeleteIcon style={{paddingRight:10}}></DeleteIcon><EditIcon/></TableCell></TableRow>
        </TableBody>) : (      <TableBody>
          {rows.map((row) => (
              <>
          <TableRow key={row.name}>
          <TableCell  classes={{ root: classes.MuiTableCell}} style={{fontWeight:"bold",backgroundColor:"#E8F5FE"}}>
            {row.name}
          </TableCell>
          </TableRow>
          <TableRow>
          <TableCell align="left" classes={{ root: classes.MuiTableCell}} style={{paddingTop:8}}>{row.value}</TableCell>
        </TableRow>
        </>
          ))}
        </TableBody>) }
  
      </Table>
    </TableContainer>
  );
}