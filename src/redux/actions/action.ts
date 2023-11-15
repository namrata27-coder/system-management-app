import { ThunkAction } from "redux-thunk";

export const EMPLOYEE_LIST_DATA = "EMPLOYEE_LIST_DATA"


interface EmployeeListAction {
    type: typeof EMPLOYEE_LIST_DATA;
    payload: any[]
}

export type EmployeeAction = EmployeeListAction;


export const loadEmployeeList = (payload: any[]) => {
    return async (dispatch: (arg0: { type: string; payload: any[]; }) => void) => {
        dispatch({ type: EMPLOYEE_LIST_DATA, payload })

    }
}
