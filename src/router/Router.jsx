import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../pages/layout/Layout'
import Home from '../pages/home/Home'
import Userregiter from '../pages/userregister/Userregister'
import Allregister from '../pages/allregister/Allregister'

const Routerone = () => {
    return (
        <>

            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/userregister' element={<Userregiter />} />
                    <Route path='/allregister' element={<Allregister />} />
                </Route>
            </Routes>

        </>
    )
}

export default Routerone