import React, { useState } from 'react'
const TimedPopup = ({ trigger, state, children }) => {
  // useEffect(()=> {
  //     setTimeout(() => {
  //     setTimedPopup(true);
  //     }, 3000)
  // }, []);

  return state ? (
    <div className='popup-layout'>
      <div className='popup-main' onClick={trigger}></div>
      <div className='pop-inner'>{children}</div>
    </div>
  ) : (
    ''
  )
}

export default TimedPopup
