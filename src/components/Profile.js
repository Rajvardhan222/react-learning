import React, { useContext } from 'react'
import my from '../context/UserContext'

function Profile() {
    let {user} = useContext(my)
  return (
    <div>
      <h1>{user.userName}</h1>
    </div>
  )
}

export default Profile
