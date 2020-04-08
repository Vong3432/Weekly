import React, { useContext } from 'react'
import { useEffect } from 'react'
import moment from 'moment';
import { useState } from 'react';
import {ActivityContext} from '../contexts/ActivityContext'
import { UserContext } from '../contexts/UserContext';

const Day = ({ _onDayClicked, day, month, year }) => {

    const { activities } = useContext(ActivityContext);
    const { authorized_user } = useContext(UserContext);
    const [ hasActivity, setHasActivity ] = useState(false)

    useEffect(() => {          

        // Compare dateString with every data in localStorage
        if (JSON.parse(localStorage.getItem('user')) !== null) {

            // Parse data to JSON
            const localData = JSON.parse(localStorage.getItem('user'));

            // If has at least 1 activity is stored,
            // then check if current day has any activity.
            if (localData && localData.activities.length > 0) {

                // Current dateString        
                const dateString = moment(`${year}/${month}/${day}`).format('YYYY MM DD').split(" ").join("-")                

                // Compare every date_string in the activities array
                // If is matched, set hasActivity to `true`
                localData.activities.map((activity) => {                    
                    
                    if(activity.date_string === dateString) {
                        setHasActivity(true)
                        return 
                    }                                                                
                        
                })

            }

        }

        else if(authorized_user) {
            // If has at least 1 activity is stored,
            // then check if current day has any activity.
            if (activities && activities.length > 0) {

                // Current dateString        
                const dateString = moment(`${year}/${month}/${day}`).format('YYYY MM DD').split(" ").join("-")                

                // Compare every date_string in the activities array
                // If is matched, set hasActivity to `true`
                activities.map((activity) => {                                      
                    
                    if(activity.dateString === dateString) {
                        setHasActivity(true)
                        return 
                    }                                                                
                        
                })

            }
        }        

    }, [month, year])    

    return (
        <div onClick={(e) => day && _onDayClicked(e, day)} className={`soft-shadow main-right__day ${hasActivity && 'hasActivity'}`}>
            <h1 className="bold-font font--big calendar-date">{day}</h1>            
        </div>
    )
}

export default Day
