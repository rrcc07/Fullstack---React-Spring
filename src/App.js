import './App.css';
import { Navbar } from './layout/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Home } from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AddUser } from './users/AddUser';
import { EditUser } from './users/EditUser';
import { ViewUser } from './users/ViewUser';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/adduser" element={<AddUser />}/>
        <Route exact path="/edituser/:id" element={<EditUser />}/>
        <Route exact path="/viewuser/:id" element={<ViewUser />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
