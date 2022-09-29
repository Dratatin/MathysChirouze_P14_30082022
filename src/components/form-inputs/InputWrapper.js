function InputWrapper({ children, inputs, setInputs, name, type }) {
    const avoidBadInput = (e) => {
        if (e.key.match(/^[-+=eE]*$/)) {
            e.preventDefault()
        }
    }
    const handleChange = (input) => {
        const value = input.value;
        const name = input.name
        if (input.value.length > 0) {
            switch (type) {
                case 'text':
                    if (!value.match(/^[A-zÀ-ú-0-9-,\s]*$/) && name === "street") {
                        setInputs({
                            ...inputs,
                            [name]: {
                                ...inputs[name],
                                value: value,
                                error: 'only letters or numbers accepted',
                                valid: false
                            }
                        });
                    }
                    else if (!value.match(/^[A-zÀ-ú\s]*$/) && name !== "street") {
                        setInputs({
                            ...inputs,
                            [name]: {
                                ...inputs[name],
                                value: value,
                                error: 'only letters accepted',
                                valid: false
                            }
                        });
                    }
                    else {
                        setInputs({
                            ...inputs,
                            [name]: {
                                ...inputs[name],
                                value: value,
                                error: null,
                                valid: true
                            }
                        });
                    }

                    break
                case 'number':
                    if (name === "zipCode" && value.toString().length !== 5 && value.toString().length !== 0) {
                        setInputs({
                            ...inputs,
                            [name]: {
                                ...inputs[name],
                                value: value,
                                error: 'enter 5 digits',
                                valid: false
                            }
                        })
                    }
                    else {
                        setInputs({
                            ...inputs,
                            [name]: {
                                ...inputs[name],
                                value: value,
                                error: null,
                                valid: true
                            }
                        })
                    }
                    break
                default:
                    return
            }
        }
        else {
            setInputs({
                ...inputs,
                [name]: {
                    ...inputs[name],
                    value: value,
                    error: null,
                    valid: false
                }
            });
        }

    }
    return (
        <div className="input-wrapper">
            <label className="input-wrapper__label" htmlFor={name}>{children}</label>
            <input
                id={name}
                name={name}
                type={type}
                value={inputs[name].value}
                min={type === "number" ? 0 : null}
                onChange={(e) => handleChange(e.target)}
                onKeyDown={type === "number" ? avoidBadInput : null}
                className={`input-wrapper__input ${inputs[name].error
                    ? "input-wrapper__input--error"
                    : inputs[name].valid
                        ? "input-wrapper__input--valid"
                        : ''}`}>
            </input>
            {inputs[name].error !== null ? <p className="input-wrapper__error">*{inputs[name].error}</p> : null}
        </div>
    )
}

export default InputWrapper