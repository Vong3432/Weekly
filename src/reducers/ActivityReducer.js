import moment from "moment";

export const ActivityReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ACTIVITY": {
            const { date, newActivity } = action;

            // Convert date to string 
            const dateString = moment(`${date.currentYear}/${date.currentMonth}/${date.currentDay}`).format('YYYY MM DD').split(" ").join("-");

            if (localStorage.getItem('user') === null) {

                const user = {
                    activities: [
                        {
                            date_string: dateString,
                            data: [newActivity]
                        }
                    ]
                }

                // Store into localStorage
                localStorage.setItem('user', JSON.stringify(user));
            }

            else {

                const user = JSON.parse(localStorage.getItem('user'));
                let hasFoundSameDate = false;

                user.activities.map((activity, index) => {
                    if (activity.date_string === dateString) {
                        activity.data.push(newActivity);
                        hasFoundSameDate = true
                    }
                })

                if (!hasFoundSameDate) {
                    user.activities.push({
                        date_string: dateString,
                        data: [newActivity]
                    })
                }

                localStorage.setItem('user', JSON.stringify(user));
            }
        }

        break;

        case "EDIT_ACTIVITY": {

            const localData = JSON.parse(localStorage.getItem('user'))            
            const newState = localData;

            const { newActivity, newActivity: { title, desc, time, activity_id }, index } = action                                                                               
            newState.activities[index].data = newState.activities[index].data.map((data, data_index) => data.activity_id === activity_id ? {...data, title, desc, time, activity_id}  : data)                                                

            localStorage.setItem('user', JSON.stringify(newState));
            
        }    
        break;        

        case "DELETE_ACTIVITY": {

            const localData = JSON.parse(localStorage.getItem('user'))            
            const newState = localData;

            const { activity_id, activity_index } = action                                                                               
            newState.activities[activity_index].data = newState.activities[activity_index].data.filter((data, data_index) => data.activity_id !== activity_id )                                    

            newState.activities = newState.activities.filter((activity) => activity.data.length > 0 )

            localStorage.setItem('user', JSON.stringify(newState));

        }            
        break;

        default:
            break;
    }
}