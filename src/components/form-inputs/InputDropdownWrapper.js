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
            <label htmlFor={name}>{children}</label>
            <Dropdown
                options={datas}
                setValue={(e) => handleChange(e, name)}
                value={inputs[name].value}
                name={name}
                className="dropdown"
            />
        </div>
    )
}

export default InputDropdownWrapper