import React from 'react'
import'./App.css'

const Form = () => {
  return (
    <>
    <form action="">
        <div>
            <label htmlFor='firstName'>firstName</label>
            <input type="text" name="firstName" id="firstName"/>
        </div>
        <div>
            <label htmlFor='lastName'>lastName</label>
            <input type="text" name="lastName" id="lastName"/>
        </div>
        <div>
            <label htmlFor='address'>address</label>
            <input type="text" name="address" id="address"/>
        </div>
        <div>
            <label htmlFor='pinCode'>pinCode</label>
            <input type="text" name="pinCode" id="pinCode"/>
        </div>
        <div>
            <label htmlFor='mobileNumber'>mobileNumber</label>
            <input type="text" name="mobileNumber" id="mobileNumber"/>
        </div>

        <button type ="submit">Registration</button>
    </form>
     
    </>
  )
}
 

export default Form
