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
  times: {
    width: '70%',
    display: 'grid',
    gridTemplateAreas: '100%',
    gridTemplateRows: '1fr',
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
  // var time = new Date()
  // const newTimee = time.toLocaleString('en-US', {
  //   hour: 'numeric',
  //   minute: 'numeric',
  //   hour12: true,
  // })

  // console.log(dataa.Isha)
  // console.log(newTimee)
  // console.log(dataa.Fajr)
  // console.log(if(newTimee === dataa.Isha){})

  // if (newTimee === dataa.Isha) {
  //   return setColortime(4)
  // }
  // if (newTimee === dataa.Fajr) {
  //   return setColortime(0)
  // }
  // if (newTimee === dataa.Dhuhr) {
  //   return setColortime(1)
  // }
  // if (newTimee === dataa.Asr) {
  //   return setColortime(2)
  // }
  // if (newTimee === dataa.Maghrib) {
  //   return setColortime(3)
  // }
  // console.log(newTimee === dataa.Isha)

  return (
    <>
      <section className={classes.main}>
        <div className={classes.title}>
          <div></div>
          <div></div>
          <h3>{timee ? `${timee}  ` : 'Loading...'} </h3>
          <h3>{timee ? `${dateee}  ` : 'Loading...'} </h3>
        </div>
        <div className={classes.times}>
          <Table {...dataa} />
        </div>
      </section>
    </>
  )
}
export default Home
