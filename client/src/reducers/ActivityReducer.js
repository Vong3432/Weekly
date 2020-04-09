import moment from "moment";
import { useContext } from "react";
import {UserContext} from '../contexts/UserContext'
import axios from "axios";

export const ActivityReducer = (state, action) => {   
        
    const authorized_user = JSON.parse(localStorage.getItem('authorized_user'))    

    switch (action.type) {
        case "ADD_ACTIVITY": {       
            return [...state, action.data]
        }        
        break;    

        case "FETCH_FROM_CLOUD": {                        
            // console.log(action.data)
            return action.data;
        }
        break;

        case "EDIT_ACTIVITY": {
            const data = action.data;
            const id = action.data.activity_id;   
                        
            return state.map(activity => activity.activity_id === id ? data : activity)
        }
        break;

        case "DELETE_ACTIVITY": {            
            return state.filter((activity) => activity.activity_id !== action.id)
        }
        break;



        default:
            break;
    }
}