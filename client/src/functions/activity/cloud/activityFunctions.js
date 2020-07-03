import axios from 'axios'

/*
    [X] 1. Add
    [X] 2. Edit
    [X] 3. Delete
    [X] 4. Get
*/

export const _addLocalActivityToCloud = async (current_activity, dispatch) => {
    axios.post('/activity/local_to_cloud', current_activity)
        .then(res => {
            const cloud_data = res.data
            dispatch({ type: "ADD_ACTIVITY", cloud_data })
        })
        .then(() => {
            // Clear localData so Google user can save on mongo directly
            localStorage.setItem('user', null)
        })
        .catch(err => console.log(err));
}

export const _addActivityToCloud = async (new_activity, dispatch) => {
    const response = await axios.post('/activity/create', new_activity);
    const data = response.data;

    dispatch({ type: "ADD_ACTIVITY", data });
}

export const _deleteActivityFromCloud = async (activity_id, authorized_user, dispatch) => {
    const response = await axios.delete(`/activity/delete/${activity_id}`, { headers: { "authorization": authorized_user.token } })
    const id = response.data;

    // Delete on MongoDB
    dispatch({ type: "DELETE_ACTIVITY", id })
}

export const _editActivityFromCloud = async (new_activity, token, dispatch) => {
    const response = await axios.put(`/activity/editActivity/${new_activity.activity_id}`, new_activity, { headers: { "authorization": token } })
    const data = response.data;

    dispatch({ type: "EDIT_ACTIVITY", data })
}

export const _loadActivitiesFromCloud = async (email, token, dispatch) => {
    const response = await axios.get(`/activity/displayAll/${email}`, { headers: { "authorization": token } })
    const data = response.data

    dispatch({ type: "FETCH_FROM_CLOUD", data })
}  