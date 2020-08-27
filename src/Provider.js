import React, {useReducer} from 'react';
import {initialState, reducer, AuthorsContext} from "./reducers/AuthReducer";

const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <AuthorsContext.Provider value={[state, dispatch]}>
            {children}
        </AuthorsContext.Provider>
    )
}

export default Provider;