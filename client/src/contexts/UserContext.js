import React, { createContext, useReducer } from "react";
import moment from 'moment'
import { UserReducer } from "../reducers/UserReducer";
import { useContext } from "react";
import { ActivityContext } from "./ActivityContext";

export const UserContext = createContext();

export const UserContextProvider = props => {

    const {dispatch} = useContext(ActivityContext);
    const [ authorized_user, dispatchUser ] = useReducer(UserReducer, null, () => {
        
        const localAuthorizedUser = localStorage.getItem('authorized_user');        
        if(localAuthorizedUser) {
            dispatch({type: "FETCH_FROM_CLOUD"})
        }

        return localAuthorizedUser ? JSON.parse(localAuthorizedUser) : null;
    })

    return (
        <UserContext.Provider value={{authorized_user, dispatchUser}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;