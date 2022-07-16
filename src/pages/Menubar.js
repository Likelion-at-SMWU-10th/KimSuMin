import React from "react";
import {Link, Outlet} from 'react-router-dom';

const Menubar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/home">HOME</Link>
                </li>
                <li>
                    <Link to="/whoami">Who Am I?</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}
export default Menubar;