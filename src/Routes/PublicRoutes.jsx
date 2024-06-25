import React from 'react'
import PublicLayout from '../Layouts/PublicLayout'
import Home from '../Pages/Home/Home'
import Menu from '../Pages/Menu/Menu'
import Aboutme from '../Pages/AboutMe/Aboutme'
import Contactus from '../Pages/ContactUs/Contactus'
import Shop from '../Pages/Shop/Shop'
import Wishlist from '../Pages/Wishlist/Wishlist'
import { Route, Routes } from 'react-router-dom'

const PublicRoutes = () => {
    return (
        <PublicLayout>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/menu' element={<Menu/>} />
                <Route path='/aboutme' element={<Aboutme/>} />
                <Route path='/contactus' element={<Contactus/>} />
                <Route path='/shopcard' element={<Shop/>} />
                <Route path='/wishlist' element={<Wishlist/>} />
            </Routes>
        </PublicLayout>
    )
}

export default PublicRoutes