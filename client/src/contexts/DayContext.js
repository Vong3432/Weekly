import React, { createContext, useReducer } from "react";
import { DayReducer } from "../reducers/DayReducer";
import moment from 'moment'
import { useEffect } from "react";

export const DayContext = createContext();

export const DayContextProvider = props => {    

    let defaultState = {
        currentYear: moment().get('year'), 
        currentMonth: moment().get('month') + 1,
        currentDay: 1
    }

    const [ date, dispatch ] = useReducer(DayReducer, defaultState, () => {        
        const localData = localStorage.getItem('current_dateInformation')
        return localData ? JSON.parse(localData) : defaultState ;
    })

    useEffect(() => {                        
        localStorage.setItem('current_dateInformation', JSON.stringify(date))

        return () => console.log('unmount day context.')
    }, [date])

    return (
        <DayContext.Provider value={{date, dispatch}}>
            {props.children}
        </DayContext.Provider>
    )
}

export default DayContextProvider;