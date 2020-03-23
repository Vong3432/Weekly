import moment from "moment"

export const DayReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_YEAR":
            return {
                ...state,
                currentYear: action.currentYear,                
                dateString: moment(`${action.currentYear}/${state.currentMonth}/${state.currentDay}`).format('YYYY MM DD').split(" ").join("-")                
            }                    
    
        case "CHANGE_MONTH":
            return {
                ...state,
                currentMonth: action.currentMonth,
                dateString: moment(`${state.currentYear}/${action.currentMonth}/${state.currentDay}`).format('YYYY MM DD').split(" ").join("-")
            }        

        case "CHANGE_DAY":
            return {
                ...state,                 
                currentDay: action.currentDay,
                dateString: moment(`${state.currentYear}/${state.currentMonth}/${action.currentDay}`).format('YYYY MM DD').split(" ").join("-")
            }        

        default:
            break;
    }
}