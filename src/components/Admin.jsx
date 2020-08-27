// eslint-disable-next-line no-unused-vars
import React from "react";
import { useHistory } from 'react-router-dom';


function Admin() {

    const history = useHistory();

    return(
        <React.Fragment>
            <h1 className="text-center pb-4"> Ajouter un auteur</h1>
            <div className="container text-left">
                <p>Admin des auteurs</p>

            </div>

            <button className="btn btn-info fa fa-angle-double-left align-left" onClick={ () => history.push('/')}> Retour à l'accueil</button>
        </React.Fragment>
    )
}

export default Admin;