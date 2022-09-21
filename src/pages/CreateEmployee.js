import profile from "./../assets/profile.svg";
import EmployeeHeading from "../components/EmployeeHeading";
import EmployeeForm from "../components/EmployeeForm";

function CreateEmployee() {
    return (
        <section className="create-employee">
            <EmployeeHeading img={profile} alt="profile">Create Employee </EmployeeHeading>
            <EmployeeForm />
        </section>
    )
}

export default CreateEmployee