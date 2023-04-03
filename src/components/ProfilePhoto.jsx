import React from 'react'

const ProfilePhoto = (prpps) => {
  return (
    <div>
      <img src='Mnn.jpg' alt='profile photo' className='photos' />
      <div>
      <button onClick={() => prpps.alertMyInput('maouia ben maouia')}>

      click Naw </button>
      </div>
    </div>
  )
}

export default ProfilePhoto
