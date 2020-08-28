// eslint-disable-next-line no-unused-vars
import React, {useReducer, useState} from "react";
import  { useHistory } from 'react-router-dom';
import {initialState, reducer} from "../reducers/AuthReducer";

function Author()  {


    const history = useHistory();

    const [state, dispatch] = useReducer(reducer, initialState);
const [note, setNote] = useState('');


    const handleChange = e => {
        const { value} = e.target;

            setNote(value)



    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: "ADD_NOTE", note : note, name : "Harlan Coben" })
console.log("submit")
    }


    const {authors, message} = state;
    return(
        <React.Fragment>
            <h1 className="text-center pt-4"> Les auteurs et leurs passions</h1>
            <div className="container">
                <p className="text-uppercase">liste des auteurs</p>

                <table className="table">
                    <thead>
                    <tr className="bg-secondary">
                        <th scope="col">Auteur</th>
                        <th scope="col">Passion</th>
                        <th scope="col">Notes reçues</th>
                        <th scope="col">Votre notation</th>
                        <th scope="col">Moyenne des notes</th>
                    </tr>
                    </thead>
                    <tbody>
                    {authors.map((author, i) =>
                        <tr key={i}>
                            <td>{author.name}</td>
                            <td>{(author.passion).join(' - ')}</td>
                            <td>{author.notes.join(' - ')}</td>
                            <td><form onSubmit={handleSubmit}>
                                {message !== '' && <p>{message}</p>}
                                <input type="text" name='note' value={note} onChange={handleChange}/>
                                <button className="btn-xs btn-outline-info ml-1">Ajouter</button>
                            </form>
                            </td>

                            <td><button className="btn-sm btn-outline-info" onClick={() => dispatch({ type: "AVERAGE" })}>Moyenne</button>
                                {state.averageScore}
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table >
                <div>

                </div>
            </div>

            <button className="btn-sm btn-info fa fa-angle-double-left " onClick={ () => history.push('/')}> Retour à l'accueil</button>
        </React.Fragment>
    )
}


export default Author;



