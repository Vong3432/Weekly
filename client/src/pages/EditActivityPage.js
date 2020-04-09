import React, { useState, useContext } from 'react'
import '../styles/form.css'
import moment from 'moment'
import { _scrollToTop } from '../functions/ScrollToTop'
import { ActivityContext } from '../contexts/ActivityContext'
import { useEffect } from 'react'
import axios from 'axios'

const EditActivityPage = (props) => {
       
    const { id } = props.match.params
    const { history } = props    
    const { dispatch } = useContext(ActivityContext)
        
    const [newActivity, setNewActivity] = useState({
        title: "",
        desc: "",
        time: "",
        activity_id: null
    })

    // local storage data
    const localData = JSON.parse(localStorage.getItem('user'));
    const prevVisitDate = JSON.parse(localStorage.getItem('current_dateInformation'))

    // cloud data
    const cloudData = JSON.parse(localStorage.getItem('cloud_data'));

    useEffect(() => {            
        

        if(cloudData && cloudData.length > 0) {            
            cloudData.map((activity, index) => {
                if(activity.activity_id === id) {
                    setNewActivity(activity)
                }
            })
        }
        
        else if(localData) {            
            localData.activities.map((activity, index) => {
                if(activity.date_string === prevVisitDate.dateString) {                
                    activity.data.map(item => item.activity_id === id && setNewActivity(item))
                }
            })
        }        

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

            const authorized_user = JSON.parse(localStorage.getItem('authorized_user'));

            if(cloudData && authorized_user) {                
                
                // Edit in mongo
                async function updateActivity() {
                    const response = await axios.put(`/activity/editActivity/${newActivity.activity_id}`, newActivity ,{headers: {"authorization": authorized_user.token}})
                    const data = response.data; 
                    
                    console.log(data)
                    
                    dispatch({type: "EDIT_ACTIVITY", data})
                }

                updateActivity();                
            }

            else {
                // Edit in local
                localData.activities.map((activity, index) => {
                    if(activity.date_string === prevVisitDate.dateString) {                
                        
                        const localData = JSON.parse(localStorage.getItem('user'))
                        const newState = localData;

                        const { title, desc, time, activity_id } = newActivity
                        newState.activities[index].data = newState.activities[index].data.map((data, data_index) => data.activity_id === activity_id ? { ...data, title, desc, time, activity_id } : data)

                        localStorage.setItem('user', JSON.stringify(newState));
                    }
                })
            }                        

            setTimeout(() => {
                history.goBack();
            }, 1000);

        }

    }



    return (
        <div className="container small-container">        

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
