import React, { createContext, useReducer } from "react";
import moment from 'moment'
import { ActivityReducer } from "../reducers/ActivityReducer";

export const ActivityContext = createContext();

export const ActivityContextProvider = props => {

    const [ activities, dispatch ] = useReducer(ActivityReducer, [], () => {

        const authorized_user = localStorage.getItem('authorized_user');

        if(!authorized_user) {
            console.log('here?')
            const localData = localStorage.getItem('user');
            return localData ? JSON.parse(localData) : [];   
        }     
    })

    return (
        <ActivityContext.Provider value={{activities, dispatch}}>
            {props.children}
        </ActivityContext.Provider>
    )
}

export default ActivityContextProvider;