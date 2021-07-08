import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { IconButton } from '@material-ui/core'
import { prayerdata } from './homedata'
import Table from './Table'
import useNew from './newHook'
import CurrentTime from './CurrentTime'
import Next from './Next'
const useStyles = makeStyles((theme) => ({
  main: {
    height: '100vh',
    width: '100%',
    maxWidth: '40%',
    display: 'grid',
    gridTemplateRows: '10% 90%',
    placeItems: 'center',
    margin: '0px auto',
    '@media (max-width: 800px)': {
      maxWidth: '70%',
    },
    '@media (max-width: 500px)': {
      maxWidth: '80%',
    },
  },
  times: {
    width: '70%',
    display: 'grid',
    gridTemplateAreas: '100%',
    gap: '10px',
    // gridTemplateRows: '80% 20%',
  },
}))
const Home = () => {
  const now = new Date()
  const [newTime, setNewTime] = useState(null)
  const [Upcoming, setUpcoming] = useState('')
  const [remaining, setRemaining] = useState(null)
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now - start
  const oneDay = 1000 * 60 * 60 * 24
  const day = Math.floor(diff / oneDay)
  const dataa = prayerdata.find((x) => x.id === day)
  const classes = useStyles()
  const h = new Date().getHours()
  const m = new Date().getMinutes()

  const { Asr, Dhuhr, Fajr, Isha, Maghrib } = dataa
  const {
    NewFajrh,
    NewFajrm,
    NewDhuhrh,
    NewDhuhrm,
    NewAsrh,
    NewAsrm,
    NewMaghribh,
    NewMaghribm,
    NewIshah,
    NewIsham,
  } = useNew(Asr, Dhuhr, Fajr, Isha, Maghrib)

  // const RemainingTime =
  useEffect(() => {
    if (
      ((h === NewFajrh && NewFajrm <= m) || NewFajrh + 1 <= h) &&
      ((h === NewDhuhrh && m <= NewDhuhrm) || h < NewDhuhrh)
    ) {
      setUpcoming('Dhuhr')
      setNewTime(0)
    } else if (
      ((h === NewDhuhrh && NewDhuhrm <= m) || NewDhuhrh + 1 <= h) &&
      ((h === NewAsrh && m <= NewAsrm) || h < NewAsrh)
    ) {
      setNewTime(1)
      setUpcoming('Asr')
    } else if (
      ((h === NewAsrh && NewAsrm <= m) || NewAsrh + 1 <= h) &&
      ((h === NewMaghribh && m <= NewMaghribm) || h < NewMaghribh)
    ) {
      setNewTime(2)
      setUpcoming('Maghrib')
    } else if (
      ((h === NewMaghribh && NewMaghribm <= m) || NewDhuhrh + 1 <= h) &&
      ((h === NewIshah && m <= NewIsham) || h < NewIshah)
    ) {
      setNewTime(3)
      setUpcoming('Isha')
    } else {
      setNewTime(4)
      setUpcoming('Fajr')
    }
  }, [m])

  useEffect(() => {
    if (Upcoming === 'Maghrib') {
      setRemaining(NewMaghribh - h)
    } else if (Upcoming === 'Asr') {
      setRemaining(NewAsrh - h)
    } else if (Upcoming === 'Isha') {
      setRemaining(NewIshah - h)
    } else if (Upcoming === 'Fajr') {
      setRemaining(NewFajrh - h)
    } else if (Upcoming === 'Dhuhr') {
      setRemaining(NewDhuhrh - h)
    }
  }, [Upcoming])
  console.log(remaining)
  console.log(h)
  console.log(NewIshah)
  console.log(Upcoming)

  //
  return (
    <>
      <section className={classes.main}>
        <CurrentTime />
        <div className={classes.times}>
          <Table {...dataa} newTime={newTime} />
          <>
            <Next Upcoming={Upcoming} remaining={remaining} />
          </>
        </div>
      </section>
    </>
  )
}
export default Home

// useEffect(() => {
//   if (((h === 2 && 58 <= m) || 3 <= h) && ((h === 13 && m <= 21) || h < 13)) {
//     setNewTime(0)
//   } else if (
//     ((h === 13 && 21 <= m) || 14 <= h) &&
//     ((h === 17 && m <= 56) || h < 17)
//   ) {
//     setNewTime(1)
//   } else if (
//     ((h === 17 && 56 <= m) || 18 <= h) &&
//     ((h === 21 && m <= 57) || h < 21)
//   ) {
//     setNewTime(2)
//   } else if (
//     ((h === 21 && 57 <= m) || 22 <= h) &&
//     ((h === 23 && m <= 27) || h < 23)
//   ) {
//     setNewTime(3)
//   } else {
//     setNewTime(4)
//   }
// }, [m])
