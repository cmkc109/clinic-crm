import "./App.css";
import Form from "./components/form/Form.jsx";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DoctorPage from "./components/pages/DoctorPage";
import PatientPage from "./components/pages/PatientPage";
import Nav from "./components/nav/Nav";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  const [user, setUser] = useState("patient");
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3f51b5",
      },
      secondary: {
        main: "#f50057",
      },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
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
      </ThemeProvider>
    </div>
  );
}

export default App;
