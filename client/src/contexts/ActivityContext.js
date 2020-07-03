import React, { createContext, useReducer } from "react";
import { ActivityReducer } from "../reducers/ActivityReducer";

export const ActivityContext = createContext();

export const ActivityContextProvider = props => {

    const [ activities, dispatch ] = useReducer(ActivityReducer, [], () => {

        const local_data = localStorage.getItem('user');        
        const cloud_data = localStorage.getItem('cloud_data');            
        
        if(local_data && local_data.length > 0) {                
            const localData = localStorage.getItem('user');
            return localData ? JSON.parse(localData) : [];   
        }     

        else if(cloud_data && cloud_data.length > 0) {               
            return cloud_data ? JSON.parse(cloud_data) : [];
        }

        else 
            return [];
    })

    return (
        <ActivityContext.Provider value={{activities, dispatch}}>
            {props.children}
        </ActivityContext.Provider>
    )
}

export default ActivityContextProvider;