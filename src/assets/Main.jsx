import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Page/shard/Footer/Footer';
import Navbar from './navbar/Navbar';
import SignUp from './Page/Home/signup/SignUp';

const Main = () => {
    const location = useLocation()
    console.log(location)
    const noheaderfooter = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>
            {noheaderfooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noheaderfooter || <Footer></Footer>}
        </div>
    );
};

export default Main;