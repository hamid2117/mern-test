import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { IconButton } from '@material-ui/core'
import ScheduleIcon from '@material-ui/icons/Schedule'
import EventNoteIcon from '@material-ui/icons/EventNote'
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  main: {
    height: '10vh',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr ',
    '@media (max-width: 500px)': {},
  },
  btn: {
    width: '100%',
    borderRadius: '0px',
    height: '100%',
  },
  active: {
    borderTop: '2px solid blue',
  },
}))
const Footer = () => {
  const classes = useStyles()
  return (
    <>
      <footer className={classes.main}>
        <div>
          <IconButton
            component={NavLink}
            exact
            to={'/'}
            activeClassName={classes.active}
            className={classes.btn}
          >
            <ScheduleIcon />
          </IconButton>
        </div>
        <div>
          <IconButton
            component={NavLink}
            exact
            to={'/calender'}
            className={classes.btn}
            activeClassName={classes.active}
          >
            <EventNoteIcon />
          </IconButton>
        </div>
      </footer>
    </>
  )
}
export default Footer
