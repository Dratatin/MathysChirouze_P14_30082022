import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function BasicDatepicker() {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker showPopperArrow={false} selected={startDate} onChange={(date) => setStartDate(date)} />
    )
}

export default BasicDatepicker