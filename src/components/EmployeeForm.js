import { statesName } from "../datas/states";
import departements from "../datas/departements";
import { useEffect, useState } from "react";
import InputWrapper from "./form-inputs/InputWrapper";
import InputDateWrapper from "./form-inputs/InputDateWrapper";
import InputDropdownWrapper from "./form-inputs/InputDropdownWrapper"
import useEmployeeStore from "../utils/EmployeeContext";


function EmployeeForm({ openDialog }) {
    const { state, setEmployee } = useEmployeeStore()
    const initialState = {
        firstName: {
            value: '',
            error: null,
            valid: false
        },
        lastName: {
            value: '',
            error: null,
            valid: false
        },
        birthdate: {
            value: new Date('January 1, 2000'),
            error: null,
            valid: true
        },
        startDate: {
            value: new Date(),
            error: null,
            valid: true
        },
        departements: {
            value: departements[0],
            error: null,
            valid: true
        },
        state: {
            value: statesName[0],
            error: null,
            valid: true
        },
        street: {
            value: '',
            error: null,
            valid: false
        },
        city: {
            value: '',
            error: null,
            valid: false
        },
        zipCode: {
            value: '',
            error: null,
            valid: false
        }
    }
    const [inputs, setInputs] = useState(initialState);
    const [formValid, setFormValid] = useState(false);

    const formatDate = (date) => {
        return `${date.toLocaleDateString(undefined, { // you can use undefined as first argument
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        })}`
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formValid) {
            setInputs(initialState)
            setEmployee({
                firstName: inputs.firstName.value,
                lastName: inputs.lastName.value,
                birthdate: formatDate(inputs.birthdate.value),
                startDate: formatDate(inputs.startDate.value),
                departement: inputs.departements.value,
                state: inputs.state.value,
                street: inputs.street.value,
                city: inputs.city.value,
                zipCode: inputs.zipCode.value
            })
            setFormValid(false)
            openDialog()
        }
    }

    useEffect(() => {
        const validity = []
        for (const property in inputs) {
            validity.push(inputs[property].valid)
            if (validity.some(elem => elem === false) === true) {
                setFormValid(false)
                return
            }
            setFormValid(true)
        }
    }, [inputs])

    useEffect(() => {
        console.log(state)
    }, [state])

    return (
        <form className="employee-form" onSubmit={handleSubmit}>
            <fieldset className="employee-form__fieldset">
                <InputWrapper inputs={inputs} setInputs={setInputs} name="firstName" type="text">First Name</InputWrapper>
                <InputWrapper inputs={inputs} setInputs={setInputs} name="lastName" type="text">Last Name</InputWrapper>
                <InputDateWrapper inputs={inputs} setInputs={setInputs} name="birthdate">Date of birth</InputDateWrapper>
                <InputDateWrapper inputs={inputs} setInputs={setInputs} name="startDate">Start Date</InputDateWrapper>
                <InputDropdownWrapper inputs={inputs} setInputs={setInputs} name="departements" data={departements}>Departements</InputDropdownWrapper>
            </fieldset>
            <fieldset className="employee-form__fieldset">
                <legend>Address</legend>
                <InputWrapper inputs={inputs} setInputs={setInputs} name="street" type="text">Street</InputWrapper>
                <InputWrapper inputs={inputs} setInputs={setInputs} name="city" type="text">City</InputWrapper>
                <InputDropdownWrapper inputs={inputs} setInputs={setInputs} name="state" data={statesName}>State</InputDropdownWrapper>
                <InputWrapper inputs={inputs} setInputs={setInputs} name="zipCode" type="number">Zip Code</InputWrapper>
            </fieldset>
            <div className="employee-form__submit">
                <input className={`employee-form__submit__button ${!formValid ? "employee-form__submit__button--invalid" : ""}`} type="submit" value="Save"></input>
            </div>
        </form>
    )
}

export default EmployeeForm