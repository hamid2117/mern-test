import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  main: {
    height: '80vh',
    display: 'grid',
    placeItems: 'center',
    textAlign: 'center',
  },
}))
const Error = () => {
  const classes = useStyles()
  const History = useHistory()
  useEffect(() => {
    setInterval(() => {
      History.push('/')
    }, 4000)
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <div className={classes.main}>
        <h1 style={{ textAlign: 'center' }}> You enter wrong URL ........</h1>
      </div>
    </>
  )
}
export default Error
