// eslint-disable-next-line no-unused-vars
import React from "react";
import { useHistory } from 'react-router-dom';

function Authors() {

    const history = useHistory();

    return(
        <React.Fragment>
            <h1 className="text-center pb-4"> Les auteurs et leurs passions</h1>
            <div className="container text-left">
                <p>liste des auteurs</p>
            </div>

            <button className="btn btn-info fa fa-angle-double-left align-left" onClick={ () => history.push('/')}> Retour à l'accueil</button>
        </React.Fragment>
    )
}

export default Authors;