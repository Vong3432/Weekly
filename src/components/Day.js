import React from 'react'
import { useEffect } from 'react'
import moment from 'moment';
import { useState } from 'react';

const Day = ({ _onDayClicked, day, month, year }) => {

    const [ hasActivity, setHasActivity ] = useState(false)

    useEffect(() => {          

        // Compare dateString with every data in localStorage
        if (localStorage.getItem('user') !== null) {

            // Parse data to JSON
            const localData = JSON.parse(localStorage.getItem('user'));

            // If has at least 1 activity is stored,
            // then check if current day has any activity.
            if (localData.activities.length > 0) {

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
    }, [month, year])    

    return (
        <div onClick={(e) => day && _onDayClicked(e, day)} className={`soft-shadow main-right__day ${hasActivity && 'hasActivity'}`}>
            <h1 className="bold-font font--big calendar-date">{day}</h1>            
        </div>
    )
}

export default Day
