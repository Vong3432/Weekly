export const UserReducer = (state, action) => {    

    switch (action.type) {
        case "LOGIN": {                                    
            return action.authorizedUser;                    
        }
        case "LOGOUT":
            localStorage.setItem('cloud_data', null);
            localStorage.setItem('authorized_user', null);
            break;

        default:
            break;
    }
}