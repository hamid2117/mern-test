import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  main: {
    height: '10vh',
    backgroundColor: '#2B7DE9',
    width: '100%',
    margin: 0,
    padding: 0,
    '@media (max-width: 500px)': {},
  },
  title: {
    margin: 'auto 14px',
    color: 'white',
    '@media (max-width: 500px)': {
      fontSize: '20px',
    },
  },
}))
const Navbar = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.main}>
        <Typography
          variant='h4'
          style={{ padding: '10px 0px' }}
          className={classes.title}
        >
          TimeTables of months
        </Typography>
      </div>
    </>
  )
}
export default Navbar
