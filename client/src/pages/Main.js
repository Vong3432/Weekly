import React, { useState, useEffect, useContext } from 'react'
import '../styles/main.css'
import moment from 'moment'
import { DayContext } from '../contexts/DayContext'
import Day from '../components/Day'
import { ActivityContext } from '../contexts/ActivityContext'
import {} from 'gsap'
import { TweenLite } from 'gsap/gsap-core'
import { TimelineLite } from 'gsap/gsap-core'

const Main = ({ history }, props) => {    

    const { date: {currentMonth, currentYear}, dispatch } = useContext(DayContext);    
    const [daysInMonth, setDaysInMonth] = useState(0)
    const { activities } = useContext(ActivityContext)
    
    let mainCoverElement = null,
        mainCoverTween = null;    

    useEffect(() => {        
        
        setDaysInMonth(moment(`${currentYear}-${currentMonth}`, "YYYY-MM").daysInMonth());                

    }, [currentMonth, currentYear, activities])        
    
    useEffect(() => {        

        mainCoverTween = new TimelineLite()
                            .to(mainCoverElement, .75, {opacity: 1})
                            .to(mainCoverElement, .25, {opacity: 0, display: "none"})  
                            // .to(mainCoverElement, 5, { backgroundColor: "none", translateX: -5000})
    }, [])

    const _update = (type, action) => {
        if (type === 'year') {
            switch (action) {
                case 'INCREMENT':
                    dispatch({type: "CHANGE_YEAR", currentYear: currentYear + 1})                    
                    break;
                case 'DECREMENT':
                    dispatch({type: "CHANGE_YEAR", currentYear: currentYear - 1})                    
                    break;
            }
        }

        else if (type === 'month') {

            switch (action) {
                case 'INCREMENT':
                    if (currentMonth === 12) {
                        dispatch({type: "CHANGE_YEAR", currentYear: currentYear + 1})                    
                        dispatch({type: "CHANGE_MONTH", currentMonth: 1})                                            
                    }
                    else                        
                        dispatch({type: "CHANGE_MONTH", currentMonth: currentMonth + 1})                    
                    break;
                case 'DECREMENT':
                    if (currentMonth === 1) {
                        dispatch({type: "CHANGE_YEAR", currentYear: currentYear - 1})                    
                        dispatch({type: "CHANGE_MONTH", currentMonth: 12})                                            
                    }
                    else
                        dispatch({type: "CHANGE_MONTH", currentMonth: currentMonth - 1})                    
                    break;
                default:
                    break;
            }
        }        
    }

    const DaysWrapper = () => {
        return (_displayDays())
    }

    const _displayDays = () => {
        let elements = []

        // Get first day of the month
        let firstDay = moment(`${currentYear}-${currentMonth}`, "YYYY-MM").day(),
            startAt = 1 - firstDay;            

        for (var i = startAt; i <= daysInMonth; i++) {                        

            if (i >= 1) {                                             
                elements.push(<Day key={i} _onDayClicked={_onDayClicked} day={i} month={currentMonth} year={currentYear} />)
            }
            else {
                elements.push(<Day key={i} day={""} />)
            }
        }

        return elements
    }

    const _onDayClicked = (e, currentDay) => {                        
        
        dispatch({type: "CHANGE_DAY", currentDay})
                    
        localStorage.setItem('current_dateInformation', JSON.stringify({            
            currentDay,
            currentMonth,
            currentYear
        }));

        history.push('/detail'); 
    }

    return (
        <section className="main-section">
            <div ref={div => mainCoverElement = div} id="main-cover">
                <h1 className="main-cover-title">Weekly.</h1>
            </div>
            <div className="container main-container">

                <div className="main-left" unselectable="on">

                    <div className="main-left-item">
                        <div className="neomorphism-logo" onClick={() => _update('year', 'DECREMENT')}>
                            <svg className="logo" width="36" height="30" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="arrow-svg" d="M18 0L35.3205 30H0.679491L18 0Z" />
                            </svg>
                        </div>
                        <div className="main-left__itemContent">
                            {/* <p>Year</p> */}
                            <strong className="big-font">{currentYear}</strong>
                        </div>
                        <div className="neomorphism-logo" onClick={() => _update('year', 'INCREMENT')} >
                            <svg className="logo" width="36" height="30" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="arrow-svg" d="M18 30L35.3205 0H0.679491L18 30Z" fill="#C3C5C8" />
                            </svg>
                        </div>                        
                    </div>

                    <div className="main-left-item">
                        <div className="neomorphism-logo" onClick={() => _update('month', 'DECREMENT')} >
                            <svg className="logo" width="36" height="30" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="arrow-svg" d="M18 0L35.3205 30H0.679491L18 0Z" />
                            </svg>
                        </div>
                        <div className="main-left__itemContent">
                            {/* <p>Month</p> */}
                            <strong className="big-font">{currentMonth}</strong>
                        </div>
                        <div className="neomorphism-logo"  onClick={() => _update('month', 'INCREMENT')}>
                            <svg className="logo" width="36" height="30" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="arrow-svg" d="M18 30L35.3205 0H0.679491L18 30Z" fill="#C3C5C8" />
                            </svg>
                        </div>                                                
                    </div>

                </div>
                <div className="main-right">
                    <p className="day main-right__day">SUN</p>
                    <p className="day main-right__day">MON</p>
                    <p className="day main-right__day">TUE</p>
                    <p className="day main-right__day">WED</p>
                    <p className="day main-right__day">THU</p>
                    <p className="day main-right__day">FRI</p>
                    <p className="day main-right__day">SAT</p>                    
                    {daysInMonth > 0 && <DaysWrapper />}
                </div>

            </div>
        </section>
    )
}

export default Main
