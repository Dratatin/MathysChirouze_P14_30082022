import DEFAULT_EMPLOYEES_LIST from "../datas/mockEmployeeList"

export const initialState = DEFAULT_EMPLOYEES_LIST

const employeeReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "SET_EMPLOYEE":
            return [
                payload,
                ...state
            ]
        default:
            throw new Error(`No case for ${type}`)
    }

}

export default employeeReducer