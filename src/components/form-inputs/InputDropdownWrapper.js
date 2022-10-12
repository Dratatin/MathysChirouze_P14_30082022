import { Dropdown } from "@dratatin/dropdown-react";

function InputDropdownWrapper({ children, inputs, setInputs, name, datas }) {
    const handleChange = (e, name) => {
        setInputs({
            ...inputs,
            [name]: {
                ...inputs[name],
                value: e
            }
        });
    }
    return (
        <div>
            <label id={name + "_label"} htmlFor={name}>{children}</label>
            <Dropdown
                options={datas}
                setValue={(e) => handleChange(e, name)}
                value={inputs[name].value}
                name={name}
                className="dropdown"
                labelledby={name + "_label"}
            />
        </div>
    )
}

export default InputDropdownWrapper