import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import CreateEmployee from "./pages/CreateEmployee";
import EmployeeList from "./pages/EmployeeList";
import "./style/main.css"

function App() {
  return (
    <BrowserRouter>
      <Sidebar></Sidebar>
      <main className="main">
        <Routes>
          <Route path="/" element={<Navigate to="create-employee"></Navigate>}></Route>
          <Route path="/create-employee" element={<CreateEmployee />}></Route>
          <Route path="/employee-list" element={<EmployeeList />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
