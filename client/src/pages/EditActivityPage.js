import React, { useState, useContext } from 'react'
import '../styles/form.css'
import { ActivityContext } from '../contexts/ActivityContext'
import { useEffect } from 'react'
import moment from 'moment'
import { _editActivityFromLocal } from '../functions/activity/local/activityFunctions'
import { _editActivityFromCloud } from '../functions/activity/cloud/activityFunctions'
import { useNavigate, useParams } from 'react-router-dom'

const EditActivityPage = (props) => {    
       
    const { id } = useParams()
    const navigate = useNavigate()
    const { dispatch } = useContext(ActivityContext)
        
    const [newActivity, setNewActivity] = useState({
        title: "",
        desc: "",
        time: "",
        reminder: "none",
        activity_id: null
    })

    // local storage data
    const localData = JSON.parse(localStorage.getItem('user'));
    const prevVisitDate = JSON.parse(localStorage.getItem('current_dateInformation'))

    // cloud data
    const cloudData = JSON.parse(localStorage.getItem('cloud_data'));

    // authorized user
    const authorized_user = JSON.parse(localStorage.getItem('authorized_user'));

    useEffect(() => {            
        

        if(cloudData && cloudData.length > 0) {            
            cloudData.map((activity, index) => {
                if(activity.activity_id === id) {
                    setNewActivity(activity)
                }

                return activity
            })
        }
        
        else if(localData) {            
            localData.activities.map((activity, index) => {
                if(activity.date_string === prevVisitDate.dateString) {                
                    activity.data.map(item => item.activity_id === id && setNewActivity(item))
                }
                return activity
            })
        }       
        
        return () => console.log('Edit activity page unmounted')

    }, [])    

    const [errMsg, setErrMsg] = useState("")

    const _onChange = (e) => {
        e.persist()

        if (errMsg)
            setErrMsg("")

        setNewActivity(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const _onSubmit = (e) => {
        e.preventDefault();

        if (newActivity.title === "") {
            setErrMsg("* Title must not be blank.")
            const _scrollToTop = window.setInterval(() => {
                console.log('running')
                var pos = window.pageYOffset;
                if (pos > 0) {
                    window.scrollTo(0, pos - 20);
                }
                else
                    window.clearInterval(_scrollToTop);
            }, 16);
        }

        else {            

            if(cloudData && authorized_user) { 
                
                let reminder_date;

                if(newActivity.reminder !== "none") {

                    const int_reminderDay = parseInt(newActivity.reminder, 10);    

                    if(int_reminderDay !== NaN) {
        
                        // HH:MM
                        const hour = newActivity.time.slice(0, 2)
                        const minute = newActivity.time.slice(3, 5)

                        reminder_date = moment(`${newActivity.dateString} ${hour}:${minute}`, "YYYY-MM-DD HH:mm").subtract(newActivity.reminder, 'days').toDate();                                                                            
                    }                    
                }

                const new_activity = {                                                            
                    ...newActivity,                    
                    reminder_date
                }                
                
                // Edit in mongo
                _editActivityFromCloud(new_activity, authorized_user.token, dispatch)
            }

            else {
                _editActivityFromLocal(localData, prevVisitDate, newActivity)
            }                        

            setTimeout(() => {
                navigate(-1);
            }, 1000);

        }

    }



    return (
        <div className="container small-container">        
            <svg onClick={() => navigate(-1)} className="return-logo neomorphism-logo round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path className="add-svg" d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg>
            <form onSubmit={e => _onSubmit(e)} method="POST" autoComplete="off">
                {errMsg && <h2 style={{ margin: "1em 0" }}>{errMsg}</h2>}
                <label htmlFor="title">Title</label>
                <input type="text" value={newActivity.title} onChange={e => _onChange(e)} name="title" id="title" />

                <label htmlFor="desc">Description</label>
                <textarea name="desc" value={newActivity.desc} onChange={e => _onChange(e)} id="desc"></textarea>

                <label htmlFor="dt">Date & Time</label>
                <div className="custom-dt inner-shadow">
                    <strong className="big-font bold-font">{prevVisitDate.currentDay}/{prevVisitDate.currentMonth}/{prevVisitDate.currentYear}</strong>
                    <input type="time" value={newActivity.time} name="time" onChange={e => _onChange(e)} />
                </div>

                {authorized_user && (
                    <>
                        <label htmlFor="reminder">Send me notification before</label>
                        <select value={newActivity.reminder}  onChange={e => _onChange(e)} name="reminder" id="reminder">                            
                            <option value="none">-</option>
                            <option value="1">1 day</option>
                            <option value="2">2 days</option>
                            <option value="3">3 days</option>
                            <option value="4">4 days</option>
                            <option value="5">5 days</option>
                            <option value="6">6 days</option>
                            <option value="7">7 days</option>
                        </select>
                    </>
                )}

                <button type="submit" className="neomorphism-logo">
                    <svg className="logo" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="add-svg" d="M36.7495 66.15L19.5995 49L13.8828 54.7167L36.7495 77.5834L85.7495 28.5834L80.0328 22.8667L36.7495 66.15Z" />
                    </svg>
                </button>

            </form>
        </div>
    )
}

export default EditActivityPage
