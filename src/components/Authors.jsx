// eslint-disable-next-line no-unused-vars
import React ,{ useReducer } from "react";
import  { useHistory } from 'react-router-dom';
import {initialState, reducer} from "../reducers/AuthReducer";

function Authors() {


    const history = useHistory();

    const [state, dispatch] = useReducer(reducer, initialState);



    const handleChange = e => {
        const { value , name } = e.target;
        if (name === 'note')
        dispatch({ type: "SET_NOTE", note: value });
    }

    const handleSubmit = e => {
        e.preventDefault();

        dispatch({ type: "ADD_NOTE" });
    }
    const {authors, note,message} = state;
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
                            <td><form onClick={handleSubmit}>
                                {message !== '' && <p>{message}</p>}

                                <input type="text" name='note' value={note} onChange={handleChange}/>
                                <button className="btn btn-outline-info">Ajouter</button>
                            </form></td>
                            <td>Pas encore de moyenne</td>
                        </tr>
                    )}
                    </tbody>
                </table >
                <div>

                </div>
            </div>

            <button className="btn btn-info fa fa-angle-double-left " onClick={ () => history.push('/')}> Retour à l'accueil</button>
        </React.Fragment>
    )
}


export default Authors;















