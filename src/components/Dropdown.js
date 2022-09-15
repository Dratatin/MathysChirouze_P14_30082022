import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function BasicDropdown({ dropdownOptions }) {
    return (
        <Dropdown options={dropdownOptions} value={dropdownOptions[0]} placeholder="Select an option" />
    )
}

export default BasicDropdown