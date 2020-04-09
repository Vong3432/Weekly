import React, { useContext, useEffect, useState } from 'react'
import '../styles/detail.css'
import { DayContext } from '../contexts/DayContext'
import moment from 'moment'
import ActivityCard from '../components/ActivityCard'
import { _scrollToTop } from '../functions/ScrollToTop'
import { ActivityContext } from '../contexts/ActivityContext'

const Detail = ({ history }) => {

    const { date: { currentYear, currentMonth, currentDay, dateString }, dispatch } = useContext(DayContext)
    const [daysInMonth, setDaysInMonth] = useState(0)
    const { activities } = useContext(ActivityContext)
    const [loadedActivities, setLoadedActivities] = useState([])    

    useEffect(() => {        
                
        setDaysInMonth(moment(`${currentYear}-${currentMonth}`, "YYYY-MM").daysInMonth());        

    }, [currentMonth, currentYear]) 
    
    useEffect(() => {  
        
        // const loadCloudData = async() => {                                
        //     const response = await axios.get(`/activity/displayAll/${email}`, {headers: {"authorization": token}})
        //     const data = response.data
            
        //     dispatch({type: "FETCH_FROM_CLOUD", data})
        // }          
        
        // loadCloudData()          

        if(JSON.parse(localStorage.getItem('authorized_user'))) {

            setLoadedActivities([])  
            console.log(activities)                                      
            
            localStorage.setItem('cloud_data', JSON.stringify(activities))                                                                       
            _loadActivities();
        }           

    }, [activities])

    useEffect(() => {        
        _loadActivities();                  
    }, [currentDay])    
    
    const _loadActivities = () => {                
        
        const user = JSON.parse(localStorage.getItem('user'));        
        const authorized_user = JSON.parse(localStorage.getItem('authorized_user'))
        
        setLoadedActivities([])                  

        if(user === null && authorized_user === null)
            return;                

        if(user) {            
            user.activities.map((activity, index) => {                    
                if(activity.date_string === dateString) {   
                    console.log(activity)               
                    setLoadedActivities(activity.data);
                }                                                            
            })
        }        

        else if(authorized_user) {            
            if(JSON.parse(localStorage.getItem('cloud_data'))) {
                
                let arr = [];
                const activities = JSON.parse(localStorage.getItem('cloud_data'))
                
                if(activities && activities.length > 0) {
                    activities.map((activity, index) => {                    
                        if(activity.dateString === dateString) {                                              
                            arr.push(activity)                            
                        }                                                            
                    })

                    setLoadedActivities(arr);
                }                
            }                        
        }

    }

    const _update = (type, action) => {

        const _scrollToTop = window.setInterval(() => {            
            var pos = window.pageYOffset;
            if( pos > 0 ) {
                window.scrollTo(0, pos - 20);
            }
            else
                window.clearInterval(_scrollToTop);
        }, 16);

        switch (action) {
            case 'INCREMENT':

                // If currentMonth is equal to 12, go to next year
                if (currentMonth === 12) {
                    dispatch({ type: "CHANGE_YEAR", currentYear: currentYear + 1 })
                    dispatch({ type: "CHANGE_MONTH", currentMonth: 1 })
                    dispatch({ type: "CHANGE_DAY", currentDay: 1 })
                }

                // If currentDay is equal to 30/31, then go to next month
                else if (currentDay === daysInMonth) {
                    dispatch({ type: "CHANGE_MONTH", currentMonth: currentMonth + 1 })
                    dispatch({ type: "CHANGE_DAY", currentDay: 1 })
                }

                else
                    dispatch({ type: "CHANGE_DAY", currentDay: currentDay + 1 })
            break;

            case 'DECREMENT':                

                // If currentMonth is equal to 1, go to last year
                if (currentMonth === 1) {
                    console.log('true')
                    dispatch({ type: "CHANGE_YEAR", currentYear: currentYear - 1 })
                    dispatch({ type: "CHANGE_MONTH", currentMonth: 12 })
                    dispatch({ type: "CHANGE_DAY", currentDay: 31 })
                }


                // If currentDay is equal to 1, then go to prev month
                else if (currentDay === 1) {
                    dispatch({ type: "CHANGE_MONTH", currentMonth: currentMonth - 1 })
                    dispatch({ type: "CHANGE_DAY", currentDay: moment(`${currentYear}-${currentMonth - 1}`, "YYYY-MM").daysInMonth() })
                }
            
                else
                    dispatch({ type: "CHANGE_DAY", currentDay: currentDay - 1 })

            break;
        }
        
    }

    /*
        ========================
        Activity obj structure
        ========================

        activities: [
            {
                date: '9-3-2020',
                data: [
                    {
                        name: 'activty1'
                    },
                    {
                        name: 'activty2'
                    },
                ]
            },
            {
                date: '10-3-2020',
                data: [
                    {
                        name: 'activty3'
                    },
                    {
                        name: 'activty4'
                    },
                ]
            }
        ]

        Q: How to add activity ?
        A: Create an user object (if not existed), 
           and then user object contains an activities array,
           and activity obj will be stored in the array

        Q: What if the day has at least 1 activity?
        A: Before adding a new activity, loops through the array and check with date
           If date is same, push in the array of activity obj        
        
        
        ========================
        Found issues/bugs (👌 = solved)
        ========================
        [👌] 1. Incorrect date when switch to next year.
        [👌] 2. Incorrect date when switch to previous year.
    */

    

    return (
        <section className="detail-section">
            <div className="detail-container container">
                <div className="detail-header">
                    <div className="detail-header-date date">
                        <h1>{`${currentDay}/${currentMonth}/${currentYear}`}</h1>
                        <span className="detail-header__arrow-container">
                            <div className="neomorphism-logo" onClick={e => _update("CHANGE_DAY", "DECREMENT")} >
                                <svg className="logo" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="arrow-svg" d="M18 0L35.3205 30H0.679491L18 0Z" />
                                </svg>
                            </div>
                            <div className="neomorphism-logo" onClick={e => _update("CHANGE_DAY", "INCREMENT")} >
                                <svg className="logo" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="arrow-svg" d="M18 30L35.3205 0H0.679491L18 30Z" fill="#C3C5C8" />
                                </svg>
                            </div>
                        </span>
                    </div>
                    <div className="neomorphism-logo round" onClick={e => history.push('/create')}>
                        <svg className="logo" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="add-svg" d="M25.05 0H24.95C22.2162 0 20 2.21619 20 4.95V45.05C20 47.7838 22.2162 50 24.95 50H25.05C27.7838 50 30 47.7838 30 45.05V4.95C30 2.21619 27.7838 0 25.05 0Z" />
                            <path className="add-svg" d="M45.05 20H4.95C2.21619 20 0 22.2162 0 24.95V25.05C0 27.7838 2.21619 30 4.95 30H45.05C47.7838 30 50 27.7838 50 25.05V24.95C50 22.2162 47.7838 20 45.05 20Z" />
                        </svg>
                    </div>

                </div>
                <div className="detail-activities">
                    <p className="opacity-50">Activities</p>
                    {loadedActivities.length > 0 && loadedActivities.map((activity, index) => <ActivityCard history={history} key={index} index={index} activity={activity} _loadActivities={_loadActivities} />)}

                </div>

            </div>
        </section>
    )
}

export default Detail
