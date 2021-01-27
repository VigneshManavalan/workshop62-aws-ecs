import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme)=>({
  table: {
    minWidth: 350,
    boxShadow:"none",
    border:"none"
  },
  MuiTableCell: { borderBottom: "none",margin:0,padding:0, background:theme.palette.primary.dark }
}));



export default function PatientInfoTable(props) {
  const classes = useStyles();

  const rows = props.rows
  return (
    <TableContainer component={Paper} style={{border:"none",    boxShadow:"none",}}>
      <Table className={classes.table} >
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell  classes={{ root: classes.MuiTableCell}}>
                {row.name}
              </TableCell>
              <TableCell align="left" classes={{ root: classes.MuiTableCell}} style={{fontWeight:"bold"}}>{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}