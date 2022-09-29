import EmployeeHeading from "../components/EmployeeHeading";
import EmployeesTable from "../components/EmployeesTable";
import profiles from "./../assets/profiles.svg";

function EmployeeList() {
    return (
        <section className="employee-list">
            <EmployeeHeading img={profiles} alt="profile">Current Employees </EmployeeHeading>
            <EmployeesTable />
        </section>
    )
}

export default EmployeeList