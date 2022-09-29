import profile from "./../assets/profile.svg";
import EmployeeHeading from "../components/EmployeeHeading";
import EmployeeForm from "../components/EmployeeForm";
import { NavLink } from "react-router-dom";
import { DialogContent, Dialog, DialogContentText } from "@mui/material";
import { useState } from "react";

function CreateEmployee() {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <section className="create-employee">
            <EmployeeHeading img={profile} alt="profile">Create Employee </EmployeeHeading>
            <EmployeeForm openDialog={handleClickOpen} />
            <Dialog
                open={open}
                onClose={handleClose}
                className="dialog">
                <DialogContent className="dialog__content">
                    <DialogContentText >New employee has been created. <NavLink to='/employee-list' className="dialog__content__link">Click here</NavLink> to navigate to employee list.
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </section >
    )
}

export default CreateEmployee