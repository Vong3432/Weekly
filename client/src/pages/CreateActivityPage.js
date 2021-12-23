import React, { useState, useContext } from 'react'
import '../styles/form.css'
import moment from 'moment'
import Modal from 'react-modal';
import HashLoader from 'react-spinners/HashLoader'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'

// Import Context
import { DayContext } from '../contexts/DayContext'
import { ActivityContext } from '../contexts/ActivityContext'
import { _addActivityToLocal } from '../functions/activity/local/activityFunctions';
import { _addActivityToCloud } from '../functions/activity/cloud/activityFunctions';
import { useNavigate } from 'react-router-dom';

Modal.setAppElement('#root');

const CreateActivityPage = () => {

    const navigate = useNavigate()

    const [modalIsOpen, setIsOpen] = useState(false);

    // Context
    const authorized_user = JSON.parse(localStorage.getItem('authorized_user'));
    const { date } = useContext(DayContext)
    const { dispatch } = useContext(ActivityContext)

    const [newActivity, setNewActivity] = useState({
        title: "",
        desc: "",
        time: "",
        reminder: "none",
        activity_id: uuidv4()
    })

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
            /*
                [👌] Add data

                1. Create an user object (if not existed in local storage).
                2. Loop through the `activities` array object.
                3. If date is found in `activities` array object under `user` object,                   
                   Add it to 
                   `data` array of `activities` array object 
                   under `user` object.                                   

            */

            // Convert date to string 
            const dateString = moment(`${date.currentYear}/${date.currentMonth}/${date.currentDay}`).format('YYYY MM DD').split(" ").join("-");

            // If user signed in with Gmail
            // Save to cloud
            if (authorized_user && authorized_user.email) {                

                let reminder_date;

                if(newActivity.reminder !== "none") {

                    const int_reminderDay = parseInt(newActivity.reminder, 10);    

                    if(int_reminderDay !== NaN) {
        
                        // HH:MM
                        const hour = newActivity.time.slice(0, 2)
                        const minute = newActivity.time.slice(3, 5)
                                                                  
                        reminder_date = moment(`${dateString} ${hour}:${minute}`, "YYYY-MM-DD HH:mm").subtract(newActivity.reminder, 'days').toDate();                                                        
                    }                    
                }

                const new_activity = {
                    email: authorized_user.email,
                    currentYear: date.currentYear,
                    currentMonth: date.currentMonth,
                    currentDay: date.currentDay,
                    token: authorized_user.token,                    
                    reminder_date,
                    dateString,
                    ...newActivity
                }

                _addActivityToCloud(new_activity, dispatch)
            }

            else {
                _addActivityToLocal(newActivity, dateString)               
            }

            setIsOpen(true);
            setTimeout(() => {
                navigate(-1);
            }, 1000);

        }
    }


    return (
        <div className="container small-container">
            <svg onClick={() => navigate(-1)} className="return-logo neomorphism-logo round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path className="add-svg" d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z" /></svg>
            <Modal
                isOpen={modalIsOpen}
                className="modal--success"
                contentLabel="Successfull"
            >

                <h2 style={{ marginBottom: "1em" }}>Added successfully.</h2>
                <HashLoader color={"#fff"} />
                <small style={{ marginTop: "1em" }}>Redirecting ...</small>
            </Modal>

            <form onSubmit={e => _onSubmit(e)} method="POST" autoComplete="off">
                {errMsg && <h2 style={{ margin: "1em 0" }}>{errMsg}</h2>}
                <label htmlFor="title">Title</label>
                <input type="text" onChange={e => _onChange(e)} name="title" id="title" />

                <label htmlFor="desc">Description</label>
                <textarea name="desc" onChange={e => _onChange(e)} id="desc"></textarea>

                <label htmlFor="dt">Date & Time</label>
                <div className="custom-dt inner-shadow">
                    <strong className="big-font bold-font">{date.currentDay}/{date.currentMonth}/{date.currentYear}</strong>
                    <input type="time" name="time" onChange={e => _onChange(e)} />
                </div>

                {authorized_user ? (
                    <>
                        <label htmlFor="reminder">Send me notification before</label>
                        <select onChange={e => _onChange(e)} value={newActivity.reminder} name="reminder" id="reminder">                            
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
                ) : (
                        <>
                            <p className="note">* Please note that all your activities will be saved in your local device only.</p>
                            <div className="qna-container">
                                <strong className="question">Q: How to access on different devices and get notifications?</strong>
                                <p className="answer">A: Scroll to top and click the button with "Sign In" text. After signed in, every activities you create will be saved online and we will send you a notification before a week. Don't worry, we hate spams too.</p>
                            </div>
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

export default CreateActivityPage
