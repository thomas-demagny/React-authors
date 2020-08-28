// eslint-disable-next-line no-undef,no-unused-vars
import React, {createContext} from "react";

export const AuthorsContext = createContext({});

//source de vérité, ne pas toucher à sa structure
export const initialState = {
    authors : [
        {
            name : "Harlan Coben",
            notes : [5, 10, 4],

            passion : ["React", "JS", "MongoDB"]

        },

        {
            name : "Alice Rivers",
            notes : [3, 2, 5],

            passion : ["SQL", "JS"]

        },
        {
            name : "John Doe",
            notes : [10, 4, 8],

            passion : ["Django", "PYTHON", "JSX"]

        }
    ],
    averageScore : 0,
    note: '',
    message : ''
};

export const reducer = (state, action)=> {

    switch (action.type) {

        case "AUTHOR":
            return {
                ...state, authors: action.authors
            }

        case "SET_NOTE":

            return {
                ...state,
                note: action.note,
                message: ''
            }

        case "ADD_NOTE":
       console.log(action)

            // eslint-disable-next-line array-callback-return
            const authors = state.authors.map(author => {
                if(author.name === action.name ){
                    return {
                        ...author,
                        notes : author.notes.concat(Number(action.note))
                    }
                }
                return author;
            })
            console.log(authors)
            return {
                ...state,
                authors
            }



        case "AVERAGE":



            const getNote = () => {
                return state.authors.notes
            }

            const notesScore = state.authors.map(getNote);

            const addScores = notesScore.reduce((current, acc) => acc + current);

            let averageScore = addScores / notesScore.length;
            averageScore = Math.floor(averageScore*100)/100;
            return {
                ...state,
                averageScore : averageScore
            }


        default:
            return state;
    }
}















