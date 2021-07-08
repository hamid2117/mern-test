import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '	#A9A9A9',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow)

function createData(name, time) {
  return { name, time }
}

const useStyles = makeStyles({
  table: {
    width: '100%',
  },
})

export default function CustomizedTables({ Fajr, Dhuhr, Asr, Maghrib, Isha }) {
  const classes = useStyles()
  const rows = [
    createData('Fajr', Fajr),
    createData('Dhuhr', Dhuhr),
    createData('Asr', Asr),
    createData('Maghrib', Maghrib),
    createData('Isha', Isha),
  ]
  const newDate = new Date().getHours()
  var time = new Date()
  console.log(newDate)
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>Jammat</StyledTableCell>
            <StyledTableCell align='right'>Time</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component='th' scope='row'>
                {row.name}
              </StyledTableCell>
              <StyledTableCell align='right'>{row.time}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
