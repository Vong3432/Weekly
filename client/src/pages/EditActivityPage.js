import React, { useState, useContext } from 'react'
import '../styles/form.css'
import { ActivityContext } from '../contexts/ActivityContext'
import { useEffect } from 'react'
import axios from 'axios'

const EditActivityPage = (props) => {

    console.log(props)
       
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

                    return activity
                })
            }                        

            setTimeout(() => {
                history.goBack();
            }, 1000);

        }

    }



    return (
        <div className="container small-container">        
            <svg onClick={() => history.goBack()} className="return-logo neomorphism-logo round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path className="add-svg" d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg>
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
