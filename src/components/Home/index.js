import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { IconButton } from '@material-ui/core'
import { prayerdata } from './homedata'
import Table from './Table'
const useStyles = makeStyles((theme) => ({
  main: {
    height: '83vh',
    width: '100%',
    maxWidth: '40%',
    display: 'grid',
    placeItems: 'center',
    margin: '0px auto',
    '@media (max-width: 800px)': {
      maxWidth: '70%',
    },
    '@media (max-width: 500px)': {
      maxWidth: '80%',
    },
  },
  title: {
    display: 'grid',
    gridTemplateRows: '60% 20% 20%',
    gap: '20px',
    '& h2': {
      marginBottom: '20px',
      textAlign: 'center',
    },
    '& h3': {
      marginBottom: '20px',
      textAlign: 'center',
    },
  },
  times: {
    width: '70%',
  },
}))
const Home = () => {
  const classes = useStyles()
  const [timee, setTimee] = useState()
  const [dateee, setDateee] = useState()
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now - start
  const oneDay = 1000 * 60 * 60 * 24
  const day = Math.floor(diff / oneDay)
  const dataa = prayerdata.find((x) => x.id === day)
  const Timer = () => {
    const Time = new Date().toLocaleTimeString()
    const Datee = new Date().toLocaleDateString()
    setTimee(Time)
    setDateee(Datee)
  }
  setInterval(Timer, 1000)
  return (
    <>
      <section className={classes.main}>
        <div className={classes.title}>
          <div></div>
          <h2>Time</h2>
          <h3>{timee ? `${timee}  ${dateee}` : 'Loading...'} </h3>
        </div>
        <div className={classes.times}>
          <Table {...dataa} />
        </div>
      </section>
    </>
  )
}
export default Home
