import { EmployeeAction, EMPLOYEE_LIST_DATA } from "../actions/action"


const initialData = {
    listData: []
}

export const EmployeeReducer = (state = initialData, action: EmployeeAction) => {
    switch (action.type) {
        case EMPLOYEE_LIST_DATA:

            return { ...state, listData: action.payload }

        default:
            return state;
    }
}