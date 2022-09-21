export const initialState = []

const employeeReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "SET_EMPLOYEE":
            return [
                ...state,
                payload
            ]
        default:
            throw new Error(`No case for ${type}`)
    }

}

export default employeeReducer