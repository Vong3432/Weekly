import React, { useContext, useEffect, useState } from 'react'
import moment from 'moment';
import {ActivityContext} from '../contexts/ActivityContext'
import { UserContext } from '../contexts/UserContext';

const Day = ({ _onDayClicked, day, month, year }) => {

    const { activities } = useContext(ActivityContext);
    const { authorized_user } = useContext(UserContext);       
    const [isLoading, setIsLoading] = useState(true);
    const [activityClassName, setActivityClassName] = useState("");
    const [todayClassName, setTodayClassName] = useState("")

    useEffect(() => {                       

        // Current dateString        
        const dateString = moment(`${year}/${month}/${day}`).format('YYYY MM DD').split(" ").join("-");

        // Today date
        const currentDate = moment().format('YYYY-MM-DD').split(" ").join("-");

        if(dateString === currentDate)
            setTodayClassName("today");

        // Compare dateString with every data in localStorage
        if (JSON.parse(localStorage.getItem('user')) !== null) {

            // Parse data to JSON
            const localData = JSON.parse(localStorage.getItem('user'));

            // If has at least 1 activity is stored,
            // then check if current day has any activity.
            if (localData && localData.activities.length > 0) {

                // Compare every date_string in the activities array
                // If is matched, set hasActivity to `true`
                localData.activities.map((activity) => {                    
                    
                    if(activity.date_string === dateString) {                        
                        setActivityClassName("hasActivity") 
                    }                       
                    
                    return activity
                        
                })

            }

        }

        else if(authorized_user) {
            // If has at least 1 activity is stored,
            // then check if current day has any activity.
            if (activities && activities.length > 0) {                                

                // Compare every date_string in the activities array
                // If is matched, set hasActivity to `true`
                activities.map((activity) => {                                      
                    
                    if(activity.dateString === dateString) {                        
                        setActivityClassName("hasActivity")
                        return 
                    }                                                                
                        
                })

            }
        }        

        setIsLoading(false)

    }, [month, year])    

    return (
        <>
            {isLoading === false && (
                <div onClick={(e) => day && _onDayClicked(e, day)} className={`soft-shadow main-right__day ${todayClassName} ${activityClassName}`}>
                    <h1 className="bold-font font--big calendar-date">{day}</h1>            
                </div>
            )}
        </>
    )
}

export default Day
