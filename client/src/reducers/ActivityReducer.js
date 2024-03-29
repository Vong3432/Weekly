export const ActivityReducer = (state, action) => {       

    switch (action.type) {
        case "ADD_ACTIVITY": {       
            return [...state, action.data]
        }        
        break;    

        case "FETCH_FROM_CLOUD": {                                    
            const data = action.data
            localStorage.setItem('cloud_data', JSON.stringify(data))
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