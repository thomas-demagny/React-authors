// eslint-disable-next-line no-undef,no-unused-vars
import React, {createContext} from "react";

export const AuthorsContext = createContext({});

//source de vérité, ne pas toucher à sa structure
export const initialState = {
    authors : [
        {
            name : "Harlan Coben",
            notes : [],
            passion : ["React", "JS", "MongoDB"]
        },
        {
            name : "Alice Nevers",
            notes : [],
            passion : ["SQL", "JS"]
        }
    ]

};

export const reducer = (state, action)=> {

    switch (action.type) {

        case "AUTHORS":
            return {
            ...state, authors : action.authors
            }



        default:
            return state;
    }
}
