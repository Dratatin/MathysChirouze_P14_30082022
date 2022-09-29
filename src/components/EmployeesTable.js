import { TableContainer, TablePagination, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import useEmployeeStore from "../utils/EmployeeContext";
import { useState, Fragment, useEffect } from "react";
import { useMediaQuery } from "../utils/useMediaQuery"

function EmployeesTable() {
    const { state } = useEmployeeStore()
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const isBreakpoint = useMediaQuery(765)
    useEffect(() => {
        if (isBreakpoint) {
            setRowsPerPage(1)
            return
        }
        setRowsPerPage(5)
    }, [isBreakpoint])

    return (
        <div className="employee-table">
            {state.length > 0 ?
                <Fragment>
                    <TableContainer className="table-ctn">
                        <Table className="table" aria-label="simple table">
                            <TableHead className="table__tableHead">
                                <TableRow className="table__tableHead__tableRow">
                                    <TableCell className="table__tableHead__tableRow__tableCell">First Name</TableCell>
                                    <TableCell className="table__tableHead__tableRow__tableCell">Last Name</TableCell>
                                    <TableCell className="table__tableHead__tableRow__tableCell">Start Date</TableCell>
                                    <TableCell className="table__tableHead__tableRow__tableCell">Departement</TableCell>
                                    <TableCell className="table__tableHead__tableRow__tableCell">Date of Birth</TableCell>
                                    <TableCell className="table__tableHead__tableRow__tableCell">Street</TableCell>
                                    <TableCell className="table__tableHead__tableRow__tableCell">City</TableCell>
                                    <TableCell className="table__tableHead__tableRow__tableCell">State</TableCell>
                                    <TableCell className="table__tableHead__tableRow__tableCell">Zip Code</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody className="table__tableBody">
                                {(rowsPerPage > 0
                                    ? state.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    : state
                                ).map((employee) => (
                                    <TableRow
                                        key={employee.firstName}
                                        className="table__tableBody__tableRow"
                                    >
                                        <TableCell className="table__tableBody__tableRow__tableCell">{employee.firstName}</TableCell>
                                        <TableCell className="table__tableBody__tableRow__tableCell">{employee.lastName}test</TableCell>
                                        <TableCell className="table__tableBody__tableRow__tableCell">{employee.startDate}</TableCell>
                                        <TableCell className="table__tableBody__tableRow__tableCell">{employee.departement}</TableCell>
                                        <TableCell className="table__tableBody__tableRow__tableCell">{employee.birthdate}</TableCell>
                                        <TableCell className="table__tableBody__tableRow__tableCell">{employee.street}</TableCell>
                                        <TableCell className="table__tableBody__tableRow__tableCell">{employee.city}</TableCell>
                                        <TableCell className="table__tableBody__tableRow__tableCell">{employee.state}</TableCell>
                                        <TableCell className="table__tableBody__tableRow__tableCell">{employee.zipCode}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {isBreakpoint ?
                        <TablePagination
                            rowsPerPageOptions={[{ label: 'All', value: -1 }]}
                            component="div"
                            count={state.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            className="table-pagination"
                        />
                        :
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 15, { label: 'All', value: -1 }]}
                            component="div"
                            count={state.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            className="table-pagination"
                            sx={{
                                ".MuiPaper-root": {
                                    boxShadow: "none",
                                }
                            }}
                        />
                    }
                </Fragment>
                :
                <p>No employees to display.</p>
            }
        </div>
    )
}

export default EmployeesTable