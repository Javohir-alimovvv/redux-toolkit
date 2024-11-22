import React, { useState } from 'react'
import './Userregister.scss'
import { useDispatch } from 'react-redux'
import { addToUser } from "../../context/usersSlice"


const Userregiter = () => {
  const [user, setUser] = useState("")
  const [perofessin, setPerofessin] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")
  const dispatch = useDispatch()


  const handleSubmit = (e) => {
    e.preventDefault()
    let nawUser = {
      id: new Date().getTime(),
      user,
      perofessin,
      age: +age,
      gender
    }
    dispatch(addToUser(nawUser))

    setAge("")
    setGender("")
    setPerofessin("")
    setUser("")
  }

  return (
    <>

      <div className="container">
        <div className="user">
          <h3 className='user__top__title'>Create User</h3>
          <form className='user__content' onSubmit={handleSubmit} action="">
            <input required placeholder='User name' className='user__content__form' value={user} onChange={(e) => setUser(e.target.value)} type="text" />
            <input required placeholder='Profession' className='user__content__form' value={perofessin} onChange={(e) => setPerofessin(e.target.value)} type="text" />
            <input required placeholder='Your age' className='user__content__form' value={age} onChange={(e) => setAge(e.target.value)} type="number" />
            <select className='user__content__select' name="" id="" value={gender} onChange={(e) => setGender(e.target.value)} >
              <option value="">gender</option>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
            <button className='user__content__btn' type='submit'>Create</button>
          </form>
        </div>
      </div>

    </>
  )
}

export default Userregiter