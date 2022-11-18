import "./App.css";
import Form from "./components/form/Form.jsx";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DoctorPage from "./components/pages/DoctorPage";
import PatientPage from "./components/pages/PatientPage";
import Nav from "./components/nav/Nav";


function App() {
  const [user, setUser] = useState("doctor");

  return (
    <div className="App">
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/form" element={<Form />} />
          {user === "patient" ? (
            <Route path="/user" element={<PatientPage />} />
          ) : (
            <Route path="/user" element={<DoctorPage />} />
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
