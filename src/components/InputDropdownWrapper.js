import { DropdownList } from "react-widgets";

function InputDropdownWrapper({ children, inputs, setInputs, name, data }) {
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
            <DropdownList
                data={data}
                onChange={(e) => handleChange(e, name)}
                value={inputs[name].value}
                className="dropdown-widget"
            />
        </div>
    )
}

export default InputDropdownWrapper