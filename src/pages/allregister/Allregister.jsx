import React from 'react'
import './Allregister.scss'
import { useSelector } from 'react-redux'
import Users from "../../components/users/Users"

const Allregister = () => {
  let users = useSelector(state => state.users.value)

  return (
    <>

      {
        <Users data={users} />
      }

    </>
  )
}

export default Allregister