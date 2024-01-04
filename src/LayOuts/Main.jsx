import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <h2>This is header</h2>
            <Outlet />
            <h2>This is footer</h2>
        </div>
    );
};

export default Main;