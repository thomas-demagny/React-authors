// eslint-disable-next-line no-unused-vars
import React, { useReducer }from "react";
import { useHistory } from 'react-router-dom';
import Authors from "./Authors";


function Admin() {

    const history = useHistory();
    const handleAuthor = e => {
        e.preventDefault();

    }

    return(
        <React.Fragment>

            <h1 className="text-center pt-4"> Ajouter un auteur</h1>
            <div className="container text-left">

                <form className="container row col-12 pt-4" onClick={handleAuthor}>

                    <div className="col-6">

                        <input type="text" className="form-control" id="name"
                               placeholder="Nom de l'auteur"/>

                    </div>
                    <div className="col-6">

                        <input type="text" className="form-control" id="passion"
                               placeholder="Passions"/>
                    </div>
                    <div className="align-content-left col-3 mt-3 pt-2">
                        <button type="submit"
                                className="btn btn-secondary">
                            Envoyer
                        </button>
                    </div>

                </form>
            </div>


            <button className="mt-5 btn btn-info fa fa-angle-double-left " onClick={ () => history.push('/')}> Retour à l'accueil</button>
        </React.Fragment>
    )
}

export default Admin;


