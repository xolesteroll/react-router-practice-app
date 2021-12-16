import React from 'react';
import {NavLink} from "react-router-dom";

import s from './MainHeader.module.css'

const MainHeader = () => {
    return (
        <header className={s.header}>
            <ul>
                <li><NavLink activeClassName={s.active} to="/welcome">Welcome</NavLink></li>
                <li><NavLink activeClassName={s.active} to="/products">Products</NavLink></li>
            </ul>
        </header>
    );
};

export default MainHeader;
