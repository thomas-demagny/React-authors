// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from 'react-router-dom';

function Navigation(){

    return (
        <React.Fragment>
            <nav className="pt-4 pb-4 bg-secondary ">
                <Link to="/">
                    <button className="btn btn-dark ml-3">
                        Home
                    </button>
                </Link>
                <Link to="/Authors">
                    <button
                        className="btn btn-dark ml-3">
                        Auteurs
                    </button>
                </Link>
                <Link to="/Admin">
                    <button
                        className="btn btn-dark ml-3">
                        Auteurs Admin
                    </button>
                </Link>

            </nav>
        </React.Fragment>)

}

export default Navigation;



