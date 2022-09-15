import DropdownList from "react-widgets/DropdownList";
import DatePicker from "react-widgets/DatePicker";
import profile from "./../assets/profile.svg"
import states from "./../datas/states"
import departements from "./../datas/departements"
import { useState } from "react";


function CreateEmployee() {
    let statesName = [];
    states.forEach(element => {
        statesName.push(element.name)
    });

    const [inputs, setInputs] = useState({
        firstName: {
            value: '',
            error: null,
        },
        lastName: {
            value: '',
            error: null
        },
        birthdate: {
            value: new Date('January 1, 2000'),
            error: null
        },
        startDate: {
            value: new Date(),
            error: null
        },
        departements: {
            value: departements[0],
            error: null
        },
        state: {
            value: statesName[0],
            error: null
        },
        street: {
            value: '',
            error: null
        },
        city: {
            value: '',
            error: null
        },
        zipCode: {
            value: '',
            error: null
        }
    })

    const avoidBadInput = (e) => {
        if (e.key.match(/^[-+=eE]*$/)) {
            e.preventDefault()
        }
    }

    const handleChange = (e, widget) => {
        const name = e.target.name;
        const value = e.target.value;
        const type = e.target.type;
        if (widget) {
            setInputs({
                ...inputs,
                [widget]: {
                    ...inputs[widget],
                    value: e
                }
            });
        }
        else {
            switch (type) {
                case 'text':
                    if (name === "street") {
                        if (!value.match(/^[A-zÀ-ú-0-9-,\s]*$/)) {
                            setInputs({
                                ...inputs,
                                [name]: {
                                    value: value,
                                    error: 'only letters or numbers accepted'
                                }
                            });
                        }
                        else {
                            setInputs({
                                ...inputs,
                                [name]: {
                                    value: value,
                                    error: null
                                }
                            });
                        }
                    }
                    else {
                        if (!value.match(/^[A-zÀ-ú\s]*$/)) {
                            setInputs({
                                ...inputs,
                                [name]: {
                                    value: value,
                                    error: 'only letters accepted'
                                }
                            });
                        }
                        else {
                            setInputs({
                                ...inputs,
                                [name]: {
                                    value: value,
                                    error: null
                                }
                            });
                        }
                    }
                    break
                case 'number':
                    if (name === "zipCode" && value.toString().length !== 5 && value.toString().length !== 0) {
                        setInputs({
                            ...inputs,
                            [name]: {
                                value: value,
                                error: 'enter at minimal 5 digits'
                            }
                        })
                    }
                    else {
                        setInputs({
                            ...inputs,
                            [name]: {
                                value: value,
                                error: null
                            }
                        })
                    }
                    break
                default:
                    return
            }
        }
    }

    return (
        <section className="create-employee">
            <div className="create-employee__heading">
                <img className="create-employee__heading__img" src={profile} alt="profile icon"></img>
                <h2 className="create-employee__heading__title">Create Employee</h2>
            </div>
            <form className="create-employee__form">
                <fieldset className="create-employee__form__fieldset">
                    <div className="create-employee__form__fieldset__wrapper">
                        <label htmlFor="firstName">First name</label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            value={inputs.firstName.value}
                            onChange={handleChange}
                            className={`create-employee__form__fieldset__wrapper__input ${inputs.firstName.error
                                ? "create-employee__form__fieldset__wrapper__input--error"
                                : !inputs.firstName.error && inputs.firstName.value.length > 0
                                    ? "create-employee__form__fieldset__wrapper__input--valid"
                                    : null}`}>
                        </input>
                        {inputs.firstName.error !== null ? <p className="create-employee__form__fieldset__wrapper__error">*{inputs.firstName.error}</p> : null}
                    </div>
                    <div className="create-employee__form__fieldset__wrapper">
                        <label htmlFor="lastName">Last name</label>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            value={inputs.lastName.value}
                            onChange={handleChange}
                            className={`create-employee__form__fieldset__wrapper__input ${inputs.lastName.error
                                ? "create-employee__form__fieldset__wrapper__input--error"
                                : !inputs.lastName.error && inputs.lastName.value.length > 0
                                    ? "create-employee__form__fieldset__wrapper__input--valid"
                                    : null}`}>
                        </input>
                        {inputs.lastName.error !== null ? <p className="create-employee__form__fieldset__wrapper__error">*{inputs.lastName.error}</p> : null}
                    </div>
                    <div>
                        <label htmlFor="dateOfBirth">Date of birth</label>
                        <DatePicker
                            valueFormat={{ dateStyle: "medium" }}
                            onChange={(e) => handleChange(e, "birthdate")}
                            value={inputs.birthdate.value}
                        />
                    </div>
                    <div>
                        <label>Start Date</label>
                        <DatePicker
                            valueFormat={{ dateStyle: "medium" }}
                            onChange={(e) => handleChange(e, "startDate")}
                            value={inputs.startDate.value}
                        />
                    </div>
                    <div>
                        <label>Departements</label>
                        <DropdownList
                            data={departements}
                            onChange={(e) => handleChange(e, "departements")}
                            value={inputs.departements.value}
                        />
                    </div>
                </fieldset>
                <fieldset className="create-employee__form__fieldset">
                    <legend>Address</legend>
                    <div className="create-employee__form__fieldset__wrapper">
                        <label htmlFor="street">Street</label>
                        <input
                            id="street"
                            name="street"
                            type="text"
                            value={inputs.street.value}
                            onChange={handleChange}
                            className={`create-employee__form__fieldset__wrapper__input ${inputs.street.error
                                ? "create-employee__form__fieldset__wrapper__input--error"
                                : !inputs.street.error && inputs.street.value.length > 0
                                    ? "create-employee__form__fieldset__wrapper__input--valid"
                                    : null}`}>
                        </input>
                        {inputs.street.error !== null ? <p className="create-employee__form__fieldset__wrapper__error">*{inputs.street.error}</p> : null}
                    </div>
                    <div className="create-employee__form__fieldset__wrapper">
                        <label htmlFor="city">City</label>
                        <input
                            id="city"
                            name="city"
                            type="text"
                            value={inputs.city.value}
                            onChange={handleChange}
                            className={`create-employee__form__fieldset__wrapper__input ${inputs.city.error
                                ? "create-employee__form__fieldset__wrapper__input--error"
                                : !inputs.city.error && inputs.city.value.length > 0
                                    ? "create-employee__form__fieldset__wrapper__input--valid"
                                    : null}`}>
                        </input>
                        {inputs.city.error !== null ? <p className="create-employee__form__fieldset__wrapper__error">*{inputs.city.error}</p> : null}
                    </div>
                    <div>
                        <label htmlFor="state">State</label>
                        <DropdownList
                            data={statesName}
                            onChange={(e) => handleChange(e, "state")}
                            value={inputs.state.value}
                        />
                    </div>
                    <div className="create-employee__form__fieldset__wrapper">
                        <label htmlFor="zipCode">Zip Code</label>
                        <input
                            id="zipCode"
                            name="zipCode"
                            type="number"
                            value={inputs.zipCode.value}
                            onKeyDown={avoidBadInput}
                            onChange={handleChange}
                            min={0}
                            className={`create-employee__form__fieldset__wrapper__input ${inputs.zipCode.error
                                ? "create-employee__form__fieldset__wrapper__input--error"
                                : !inputs.zipCode.error && inputs.zipCode.value.length > 0
                                    ? "create-employee__form__fieldset__wrapper__input--valid"
                                    : null}`}>
                        </input>
                        {inputs.zipCode.error !== null ? <p className="create-employee__form__fieldset__wrapper__error">*{inputs.zipCode.error}</p> : null}
                    </div>
                </fieldset>
                <div className="create-employee__form__submit">
                    <input className="create-employee__form__submit__button" type="submit" value="Save"></input>
                </div>
            </form>
        </section>
    )
}

export default CreateEmployee