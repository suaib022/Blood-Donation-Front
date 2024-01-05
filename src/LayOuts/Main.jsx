import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/Shared/NavBar';
import Footer from '../Components/Shared/Footer';

const Main = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;