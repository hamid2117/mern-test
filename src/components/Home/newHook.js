import React from 'react'

const useNew = (Asr, Dhuhr, Fajr, Isha, Maghrib) => {
  let NewAsrh
  let NewDhuhrh
  let NewFajrh
  let NewIshah
  let NewMaghribh
  let NewAsrm
  let NewDhuhrm
  let NewFajrm
  let NewIsham
  let NewMaghribm

  const zs = Dhuhr
  let seeit = zs.slice(5, 7)
  let newDh = parseInt(zs.slice(0, 1))
  NewDhuhrm = parseInt(zs.slice(2, 4))
  if (seeit === 'PM') {
    NewDhuhrh = newDh + 12
  } else {
    NewDhuhrh = newDh
  }
  const zss = Fajr
  let newfh = parseInt(zss.slice(0, 1))
  NewFajrm = parseInt(zss.slice(2, 4))
  NewFajrh = newfh

  const zsss = Asr
  let ss = zsss.slice(5, 7)
  let newAh = parseInt(zsss.slice(0, 1))
  NewAsrm = parseInt(zsss.slice(2, 4))
  if (ss === 'PM') {
    NewAsrh = newAh + 12
  } else {
    NewAsrh = newAh
  }
  const zssss = Maghrib
  let sss = zssss.slice(5, 7)
  let newMh = parseInt(zssss.slice(0, 1))
  NewMaghribm = parseInt(zssss.slice(2, 4))
  if (sss === 'PM') {
    NewMaghribh = newMh + 12
  } else {
    NewMaghribh = newMh
  }
  const zsssss = Isha
  let ssss = zsssss.slice(5, 7)
  let newIh = parseInt(zsssss.slice(0, 1))
  NewIsham = parseInt(zsssss.slice(2, 4))
  if (ssss === 'PM') {
    NewIshah = newIh + 12
  } else {
    NewIshah = newIh
  }
  console.log(Isha)
  console.log(Asr)
  console.log(
    NewAsrh,
    NewDhuhrh,
    NewIshah,
    NewFajrh,
    NewMaghribh,
    NewAsrm,
    NewDhuhrm,
    NewFajrm,
    NewIsham,
    NewMaghribm
  )
  return {
    NewAsrh,
    NewDhuhrh,
    NewFajrh,
    NewIshah,
    NewMaghribh,
    NewAsrm,
    NewDhuhrm,
    NewFajrm,
    NewIsham,
    NewMaghribm,
  }
}

export default useNew
