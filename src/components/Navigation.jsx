// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from 'react-router-dom';

function Navigation(){

    return (
        <React.Fragment>
            <nav className="pt-4 pb-4 bg-secondary ">
                <NavLink to="/">
                    <button className="btn btn-dark ml-3">
                        Home
                    </button>
                </NavLink>
                <NavLink to="/Authors">
                    <button
                        className="btn btn-dark ml-3">
                        Auteurs
                    </button>
                </NavLink>
                <NavLink to="/Admin">
                    <button
                        className="btn btn-dark ml-3">
                        Auteurs Admin
                    </button>
                </NavLink>

            </nav>
        </React.Fragment>)

}

export default Navigation;



