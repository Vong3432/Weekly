import '../styles/navbar.css'
import moon from '../assets/images/moon.svg';
import sun from '../assets/images/sun.svg';
import { NavLink } from 'react-router-dom';
import GoogleLogin, {GoogleLogout} from 'react-google-login';
import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { ActivityContext } from '../contexts/ActivityContext';
import axios from 'axios'

const Navbar = ({ theme, toggleTheme }) => {    

    const { dispatch } = useContext(ActivityContext)
    const { authorized_user, dispatchUser } = useContext(UserContext);    

    // Check if user is already login
    const [isLogin, setIsLogin] = useState(false)   
    const [collapse, setCollapse] = useState(true)        

    const responseGoogle = (googleUser) => {
        
        if(googleUser.error)
            return console.log(googleUser.error)
        
        async function loadProfile() {
            const profile = await googleUser.getBasicProfile();

            if(!profile)
                return setIsLogin(false);                                         
            
            const user = {
                name: profile.getName(),
                image: profile.getImageUrl(),
                email: profile.getEmail(),
                id: profile.getId()
            }

            const localData = JSON.parse(localStorage.getItem('user'));

            // If user has create activities before
            if(localData) {
                localData.activities.map((activity, index) => {                    
                    
                    activity.data.map((data) => {

                        const date_arr = activity.date_string.split('-')            
                        const currentYear = date_arr[0],
                              currentMonth = date_arr[1],
                              currentDay = date_arr[2]

                        const current_activity = {
                            email: user.email,
                            dateString: activity.date_string,
                            title: data.title,
                            desc: data.desc,
                            time: data.time,
                            activity_id: data.activity_id,
                            currentYear,
                            currentMonth,
                            currentDay
                        }

                        axios.post('/activity/local_to_cloud', current_activity)
                            .then(res => {
                                const cloud_data = res.data  
                                console.log(cloud_data);
                                dispatch({type: "ADD_ACTIVITY", cloud_data})                
                            })
                            .then(() => {
                                // Clear localData so Google user can save on mongo directly
                                localStorage.setItem('user', null)
                            })
                            .catch(err => console.log(err));                                                                                                      
                    })
                    
                })                
                
            }

            async function getToken() {
                // Calling api                
                const response = await axios.post('/user/login', user)
                const data = response.data;                  
                
                const authorizedUser = {
                    ...data.user,
                    token: data.token
                }                
    
                // // Store user that logged in by Google in localStorage
                localStorage.setItem('authorized_user', JSON.stringify(authorizedUser));
                
                dispatchUser({type:"LOGIN", authorizedUser})  
                setIsLogin(true); 
            }                     

            getToken();                                  

        }

        loadProfile();        
        
        // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        // console.log('Name: ' + profile.getName());
        // console.log('Image URL: ' + profile.getImageUrl());
        // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }    

    useEffect(() => {
        
        if(authorized_user) {

            console.log(authorized_user)
            
            const email = authorized_user.email; 
            const token = authorized_user.token;             

            const loadCloudData = async() => {                                
                const response = await axios.get(`/activity/displayAll/${email}`, {headers: {"authorization": token}})
                const data = response.data
                console.log(data)
                
                dispatch({type: "FETCH_FROM_CLOUD", data})
            }          
            
            loadCloudData()
                        
        }
        
    }, [authorized_user])
    
    const onLogout = () => {
        setIsLogin(false)
        dispatchUser({type:"LOGOUT"})        
    }


    return (
        <nav className="navbar">
            <div className="container">
            <strong className="big-font"><NavLink to="/">Weekly.</NavLink></strong>                
                {isLogin === false ? (
                    <div className="unauthorized-navbar">
                        <img onClick={() => toggleTheme()} className="logo" src={theme === 'light' ? moon : sun} alt="mode"/>                                                                          
                        <GoogleLogin 
                            className="google-button"
                            clientId={process.env.REACT_APP_GOOGLE_SIGNIN_CLIENT}
                            buttonText="Sign In"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            isSignedIn={true}
                            cookiePolicy={'single_host_origin'}
                        />                        
                    </div>
                ) : (
                    <div className="profile-container">
                        <div className="profile-header">
                            <img className="profile-avatar" src={authorized_user.image} alt={authorized_user.name}/>                            
                            <p className="profile-name">{authorized_user.name}</p> 
                            <svg onClick={() => setCollapse(!collapse)} className="neomorphism-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path className="add-svg" d="M12,15a1,1,0,0,1-.71-.29l-4-4A1,1,0,0,1,8.71,9.29L12,12.59l3.29-3.29a1,1,0,0,1,1.41,1.41l-4,4A1,1,0,0,1,12,15Z"/></svg>
                        </div>                                                
                        <div className={`profile-collapse-content ${collapse ? "collapse" : "show-collapse"}`}>                            
                            <p className="profile-name profile-collapse-item">{authorized_user.name}</p>                                                      
                            <div className="profile-collapse-item" onClick={() => toggleTheme()}>
                                <img className="logo" src={theme === 'light' ? moon : sun} alt="mode"/>                                                                          
                                <span className="profile-collapse-item-text">Mode</span>
                            </div> 

                            <GoogleLogout 
                                className="profile-collapse-item google-logout-button" 
                                onLogoutSuccess={onLogout}
                                buttonText="Sign out"
                                clientId={process.env.REACT_APP_GOOGLE_SIGNIN_CLIENT}
                            />
                        </div>                                                
                    </div>                    
                )}                
            </div>
        </nav>
    )
}

export default Navbar
