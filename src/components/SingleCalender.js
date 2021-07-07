import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useParams } from 'react-router-dom'
import { IconButton, Button } from '@material-ui/core'
import { imgdata } from './Img/imgdata'
import Navbar3 from './Navbar3'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { Link } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  main: {
    height: '80vh',
    width: '100%',
    maxWidth: '25%',
    margin: '0px auto',
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    '@media (max-width: 500px)': {
      maxWidth: '100%',
    },
  },
  btn: {
    position: 'absolute',
    left: -500,
    top: 10,
    '@media (max-width: 800px)': {
      left: -190,
      top: 2,
    },
  },
}))
const Calender = () => {
  const classes = useStyles()
  const { id: idd } = useParams()
  const { img } = imgdata.find((d, index) => {
    return index + 1 == idd
  })
  return (
    <>
      <Navbar3 />

      <section className={classes.main}>
        <div className={classes.btn}>
          <Button
            component={Link}
            to={'/calender'}
            className={classes.button}
            startIcon={<ChevronLeftIcon />}
          >
            Back
          </Button>
        </div>
        <img src={img} style={{ height: '100%' }} alt='' />
      </section>
    </>
  )
}
export default Calender
