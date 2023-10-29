import React from 'react'
import ReserveForm from './ReserveForm'

const Booking = (props) => {
  return (
    <ReserveForm availableTimes={props.availableTimes} dispatch={props.dispatch} SubmitForm={props.SubmitForm}/>
  )
}

export default Booking