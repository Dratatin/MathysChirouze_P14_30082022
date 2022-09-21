import { createContext, useContext, useReducer } from "react";
import employeeReducer, { initialState } from "./employeeRecuder";

const EmployeeContext = createContext(initialState);

export const EmployeeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(employeeReducer, initialState)
    const setEmployee = (inputs) => {
        dispatch({
            type: "SET_EMPLOYEE",
            payload: inputs
        })
    }
    const store = {
        state: state,
        setEmployee
    }
    return (
        <EmployeeContext.Provider value={store}>
            {children}
        </EmployeeContext.Provider>
    )
}

const useEmployeeStore = () => {
    const context = useContext(EmployeeContext)
    return context
}

export default useEmployeeStore