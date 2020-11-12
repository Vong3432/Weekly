/*
    [X] 1. Add
    [X] 2. Edit
    [X] 3. Delete
    [ ] 4. Get
*/

export const _addActivityToLocal = (newActivity, dateString) => {

    // New user
    if (JSON.parse(localStorage.getItem('user')) === null) {

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

    // Existing User
    else {

        const user = JSON.parse(localStorage.getItem('user'));
        let hasFoundSameDate = false;

        user.activities.map((activity, index) => {
            if (activity.date_string === dateString) {
                activity.data.push(newActivity);
                hasFoundSameDate = true
            }
            return activity;
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

export const _editActivityFromLocal = (localData, prevVisitDate, newActivity) => {

    // Edit activity, cost n^2
    localData.activities.map((activity, index) => {

        if (activity.date_string === prevVisitDate.dateString) {
            
            const newState = localData;
            const { title, desc, time, activity_id } = newActivity
            newState.activities[index].data = newState.activities[index].data.map((data, data_index) => data.activity_id === activity_id ? { ...data, title, desc, time, activity_id } : data)

            localStorage.setItem('user', JSON.stringify(newState));
        }

        return activity
        
    })

}

export const _deleteActivityFromLocal = (localData, prevVisitDate, activity_id) => {
    // Delete on local data
    localData.activities.map((activity, activity_index) => {
        if (activity.date_string === prevVisitDate.dateString) {
            const newState = localData;
            newState.activities[activity_index].data = newState.activities[activity_index].data.filter((data, data_index) => data.activity_id !== activity_id)
            newState.activities = newState.activities.filter((activity) => activity.data.length > 0)
            localStorage.setItem('user', JSON.stringify(newState));
        }

        return activity;
    })
}             

export const _loadActivitiesFromLocal = () => {
    
}