import React from 'react';
import { NavLink } from "react-router-dom";

const Spotbar = () => {
    return (
        <div className='spot-container'>
            <NavLink to="/spots">
                Spots
              </NavLink>
        </div>
    );
};

export default Spotbar;