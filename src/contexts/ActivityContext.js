import React, { createContext, useReducer } from "react";
import moment from 'moment'
import { ActivityReducer } from "../reducers/ActivityReducer";

export const ActivityContext = createContext();

export const ActivityContextProvider = props => {

    const [ user, dispatch ] = useReducer(ActivityReducer, [], () => {
        const localData = localStorage.getItem('user');
        return localData ? JSON.parse(localData) : [];
    })

    return (
        <ActivityContext.Provider value={{user, dispatch}}>
            {props.children}
        </ActivityContext.Provider>
    )
}

export default ActivityContextProvider;