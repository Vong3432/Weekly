import React, { useState, useContext } from 'react'
import '../styles/form.css'
import { DayContext } from '../contexts/DayContext'
import moment from 'moment'
import { _scrollToTop } from '../functions/ScrollToTop'
import Modal from 'react-modal';
import HashLoader from 'react-spinners/HashLoader'
import { ActivityContext } from '../contexts/ActivityContext'
import { v4 as uuidv4 } from 'uuid'

Modal.setAppElement('#root');

const CreateActivityPage = ({ history }) => {

    const [modalIsOpen, setIsOpen] = useState(false);
    const { date } = useContext(DayContext)
    const { dispatch } = useContext(ActivityContext)

    const [newActivity, setNewActivity] = useState({
        title: "",
        desc: "",
        time: "",
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
    

            dispatch({ type: "ADD_ACTIVITY", date, newActivity });
            setIsOpen(true);
            setTimeout(() => {
                history.goBack();
            }, 1000);

        }

    }



    return (
        <div className="container small-container">
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
