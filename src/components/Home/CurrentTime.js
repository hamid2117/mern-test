import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { prayerdata } from './homedata'
import Table from './Table'
const useStyles = makeStyles((theme) => ({
  title: {
    display: 'grid',
    gridTemplateRows: '60% 20% 20%',
    '@media (max-width: 800px)': {
      gridTemplateRows: '50% 25% 25%',
    },
    gap: '10px',
    '@media (max-width: 500px)': {
      gridTemplateRows: '30% 35% 35%',
      gap: '2px',
    },
    '& h2': {
      marginBottom: '20px',
      textAlign: 'center',
    },
    '& h3': {
      marginBottom: '20px',
      textAlign: 'center',
    },
  },
}))
const CurrentTime = () => {
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
      <div className={classes.title}>
        <div></div>
        <div></div>
        {timee ? (
          <>
            <h3>{timee} </h3>
            <h3>{dateee}</h3>
          </>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </>
  )
}
export default CurrentTime
