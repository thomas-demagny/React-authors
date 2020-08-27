// eslint-disable-next-line no-unused-vars
import React ,{ useReducer } from "react";
import  { useHistory } from 'react-router-dom';
import {initialState, reducer} from "../reducers/AuthReducer";

function Authors() {


    const history = useHistory();

    const [state] = useReducer(reducer, initialState);

    const {authors} = state;


    return(
        <React.Fragment>
            <h1 className="text-center pb-4"> Les auteurs et leurs passions</h1>
            <div className="container">
                <p className="text-uppercase">liste des auteurs</p>

                <table className="table">
                    <thead>
                    <tr className="bg-secondary">
                        <th scope="col">Auteur</th>
                        <th scope="col">Passion</th>
                        <th scope="col">Notation</th>
                    </tr>
                    </thead>
                    <tbody>
                    {authors.map((author, i) =>
                        <tr key={i}>
                            <td>{author.name}</td>
                            <td>{(author.passion).join(' - ')}</td>
                            <td>Pas de notes pour l'instant</td>
                        </tr>
                    )}
                    </tbody>
                </table >
                <div>

                </div>
            </div>

            <button className="d-flex align-content btn btn-info fa fa-angle-double-left " onClick={ () => history.push('/')}> Retour à l'accueil</button>
        </React.Fragment>
    )
}


export default Authors;















