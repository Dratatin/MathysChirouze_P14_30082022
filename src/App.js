import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import "./style/main.css"

function App() {
  return (
    <BrowserRouter>
      <Sidebar></Sidebar>
      <Routes>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
