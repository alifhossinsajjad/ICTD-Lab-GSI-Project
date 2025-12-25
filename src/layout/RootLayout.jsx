import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/sheard/Navbar'
import Footer from '../components/sheard/Footer'
const RootLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default RootLayout;