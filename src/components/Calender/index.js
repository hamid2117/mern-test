import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { IconButton, Button } from '@material-ui/core'
import { months } from './calenderData'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  main: {
    height: '80vh',
    width: '100%',
    maxWidth: '40%',
    margin: '10px auto',
    display: 'grid',
    placeItems: 'center',
    gridTemplateColumns: '1fr',
    '@media (max-width: 800px)': {
      height: '90vh',
      maxWidth: '80%',
    },
  },
  btn: {
    backgroundColor: '#DCDCDC	',
    width: '100%',
  },
  div: {},
}))
const Calender = () => {
  const classes = useStyles()

  return (
    <>
      <section className={classes.main}>
        {months.map((data) => {
          const { id, month } = data
          return (
            <Button
              component={Link}
              to={`/calender/${id}`}
              key={id}
              className={classes.btn}
            >
              {month}
            </Button>
          )
        })}
      </section>
    </>
  )
}
export default Calender
