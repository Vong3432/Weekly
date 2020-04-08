import React, { createContext, useReducer, useEffect } from "react";
import moment from 'moment'
import { ActivityReducer } from "../reducers/ActivityReducer";

export const ActivityContext = createContext();

export const ActivityContextProvider = props => {

    const [ activities, dispatch ] = useReducer(ActivityReducer, [], () => {

        const authorized_user = localStorage.getItem('authorized_user');        
        const cloud_data = localStorage.getItem('cloud_data');            
        
        if(!authorized_user) {            
            const localData = localStorage.getItem('user');
            return localData ? JSON.parse(localData) : [];   
        }     

        else if(cloud_data) {            
            return cloud_data ? JSON.parse(cloud_data) : [];
        }
    })

    useEffect(() => {
        console.log(activities)
    }, [activities])

    return (
        <ActivityContext.Provider value={{activities, dispatch}}>
            {props.children}
        </ActivityContext.Provider>
    )
}

export default ActivityContextProvider;