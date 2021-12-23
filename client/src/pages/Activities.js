import React from 'react'
import "../styles/activities.css";
import { useEffect } from 'react';
import { useContext } from 'react';
import { ActivityContext } from '../contexts/ActivityContext';
import { useState } from 'react';
import ActivityCard from '../components/ActivityCard';
import PageLoadingHandler from '../components/PageLoadingHandler';

const Activities = () => {

    // Activities from local
    const { activities } = useContext(ActivityContext);

    const [ isLoading, setIsLoading ] = useState(true)
    const [ fetchedActivities, setFetchedActivities ] = useState([]);

    useEffect(() => {

        console.log(activities)
        
        if(activities === null || activities === undefined)
            return;

        setFetchedActivities(activities);
        setIsLoading(false);

    }, [])

    if(isLoading)
        return <PageLoadingHandler message="Loading ..." />

    if(fetchedActivities.length === 0)
        return <PageLoadingHandler message="You don't have any activities at this moment." />

    return (
        <section className="activities-section">        
            <div className="container">
                {fetchedActivities.map((activity, index) => <ActivityCard showDate={true} key={index} index={index} activity={activity} />)}
            </div>            
        </section>
    )
}

export default Activities
