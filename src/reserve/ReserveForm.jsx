import React, { useState } from 'react'

const ReserveForm = (props) => {
 const [date, setDate]=useState("")
 const [times, setTimes]=useState("")
 const [guest, setGuests]=useState("")
 const [occasion, setOccasion]=useState("")

 const handleSubmit =(e) =>{
e.preventDefault();
props.SubmitForm(e);
 }

    const handleChange=(e) =>{
  setDate(e);
  props.dispatch(e)
 }
 
    return (
    <header>
<section>
    <form onSubmit={handleSubmit}>
        <fieldset>
            <div>
                <label htmlFor='book-date'>Choose Date</label>
                <input id='book-date' value={date} onChange={(e)=> handleChange(e.target.value)}    type='date' required />
            </div>

            <div>
                <label htmlFor="book-time">Choose Time</label>
                <select id='book-time' value={times} onchange ={(e) => setTimes(e.target.value)}>
                        <option value="">Select a Time </option>{
                    props.availableTimes.availableTimes.map(availableTimes =>{return <option key={availableTimes}>{availableTimes}</option>})  
                        }
                </select>
            </div>
            

            {/* for number of guest */}
            <div>
           <label htmlFor="book-guests">Number of Guests:</label>
           <input id='book-guests' min='1' value={guest} onChange={(e)=>setGuests(e.target.value)}/>
            </div>

            {/* occasion field */}
 <div>
   <label htmlFor='book-occasion'>Occasion:</label>
   <select id='book-occasion' key={occasion} value={occasion} onchange={e => setOccasion(e.target.value)}
   >
    <option>Birthday</option>
    <option>Anniversary</option>
    <option>Wedding</option>
    <option>House warming</option>
    </select> 
 </div>

{/* submit button  */}
 <div className='btnReceive'>
<input aria-label="On Click"  type='submit' value={"Make Your Reservation"}/>
 </div>
        </fieldset>


    </form>
</section>

    </header>
  )
}

export default ReserveForm

