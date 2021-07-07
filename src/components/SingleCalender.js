import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useParams } from 'react-router-dom'
import { imgdata } from './Img/imgdata'
const useStyles = makeStyles((theme) => ({
  main: {
    height: '80vh',
    width: '100%',
    maxWidth: '25%',
    margin: '0px auto',
    display: 'flex',
    justifyContent: 'center',
    '@media (max-width: 500px)': {
      maxWidth: '100%',
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
      <section className={classes.main}>
        <img src={img} style={{ height: '100%' }} alt='' />
      </section>
    </>
  )
}
export default Calender
