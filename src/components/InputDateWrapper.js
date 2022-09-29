import DatePicker from "react-widgets/DatePicker"

function InputDateWrapper({ children, inputs, setInputs, name }) {
    const handleChange = (e, name) => {
        if (e !== null) {
            const year = e.getFullYear();
            const maxStartDate = new Date().getFullYear() + 1;
            if ((Object.prototype.toString.call(e) !== '[object Date]' || year < 1900 || year > 2010) && name === "birthdate") {
                setInputs({
                    ...inputs,
                    [name]: {
                        ...inputs[name],
                        value: e,
                        error: "please enter a valid date",
                        valid: false
                    }
                });
            }
            else if ((Object.prototype.toString.call(e) !== '[object Date]' || year < 1900 || year > maxStartDate) && name === "startDate") {
                setInputs({
                    ...inputs,
                    [name]: {
                        ...inputs[name],
                        value: e,
                        error: "please enter a valid date",
                        valid: false
                    }
                });
            }
            else {
                setInputs({
                    ...inputs,
                    [name]: {
                        ...inputs[name],
                        value: e,
                        error: null,
                        valid: true
                    }
                });
            }
        }
        else {
            setInputs({
                ...inputs,
                [name]: {
                    ...inputs[name],
                    value: e,
                    error: null,
                    valid: false
                }
            });
        }
    }

    return (
        <div className="inputDate-wrapper">
            <label htmlFor={name}>{children}</label>
            <DatePicker
                valueEditFormat={{ dateStyle: "short" }}
                valueDisplayFormat={{ dateStyle: "medium" }}
                onChange={(e) => handleChange(e, name)}
                value={inputs[name].value}
                className={`inputDate-wrapper__input ${inputs[name].error
                    ? "inputDate-wrapper__input--error"
                    : !inputs[name].error && inputs[name].value !== null
                        ? "inputDate-wrapper__input--valid"
                        : ''}`}
            />
            {inputs[name].error !== null ? <p className="inputDate-wrapper__error">*{inputs[name].error}</p> : null}
        </div>
    )
}

export default InputDateWrapper