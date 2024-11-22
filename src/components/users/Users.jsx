import React, { useState } from 'react'
import "./Users.scss"
import male from '../../assets/images/male-avatar-boy-face-man-user-9.svg'
import female from "../../assets/images/female-avatar-girl-face-woman-user-2.svg"
import Model from '../model/Model'
import { useDispatch } from 'react-redux'
import { removeFromUser, updateUser } from "../../context/usersSlice"


const Users = ({ data }) => {
    const [modelOpen, setModelOpen] = useState(false);
    const [edit, setEdit] = useState(null);
    const dispatch = useDispatch()

    const open = (user) => {
        setEdit(user);
        setModelOpen(true);
    };

    const closed = () => {
        setModelOpen(false);
        setEdit(null);
    };

    const saveChange = (e) => {
        dispatch(updateUser(edit));
        closed()

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEdit((prev) => ({
            ...prev,
            [name]: value,
        }))
    }


    return (
        <>

            <div className="container">
                <div className="user__components">
                    {
                        data?.map(user =>
                            <div className='user__card' key={user.id}>
                                <img className='user__card__image' src={user.gender === "male" ? male : female} alt="" />
                                <h2 className='user__card__title'>{user.user}</h2>
                                <p className='user__card__text'>{user.perofessin}</p>
                                <p className='user__card__age'>{user.age}</p>
                                <div className='user__card__btn__box'>
                                    <button onClick={() => dispatch(removeFromUser(user))} className='user__card__btn'>Remove</button>
                                    <button onClick={() => open(user)} className='user__card__btn__two'>Edit</button>
                                </div>
                            </div>
                        )
                    }
                    {modelOpen && (
                        <Model closed={closed}>
                            <div className="modal__collection">

                                <label>
                                    <input
                                        type="text"
                                        name='name'
                                        value={edit?.user || ""}
                                        onChange={handleChange}
                                    />
                                </label>

                                <label>
                                    <input
                                        type="text"
                                        name='profession'
                                        value={edit?.perofessin || ""}
                                        onChange={handleChange}
                                    />
                                </label>

                                <label>
                                    <input
                                        type="number"
                                        name='age'
                                        value={edit?.age || ""}
                                        onChange={handleChange}
                                    />
                                </label>

                                <label>
                                    <select
                                        name="gander"
                                        value={edit?.gander || ""}
                                        onChange={handleChange}
                                    >
                                        <option value="">gender</option>
                                        <option value="male">male</option>
                                        <option value="female">female</option>
                                    </select>
                                </label>

                                <button onClick={saveChange}>Save</button>
                                <button onClick={closed}>Close</button>
                            </div>
                        </Model>
                    )}

                </div>
            </div>

        </>
    )
}

export default Users