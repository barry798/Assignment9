import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/login";
import Home from "./pages/Home/home";
import PrivateRoute from "./components/PrivateRoute"; 
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Jobs from "./pages/Jobs/jobs";
import JobDetail from "./pages/Jobs/jobDetail";
import Companies from "./pages/Companies/companies";
import CompanyDetail from "./pages/Companies/companyDetail";
import About from "./pages/About/about";
import Contact from "./pages/Contact/contact";

const theme = createTheme(); 

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/jobs"
            element={
              <PrivateRoute>
                <Jobs />
              </PrivateRoute>
            }
          />
          <Route
            path="/jobs/:id"
            element={
              <PrivateRoute>
              <JobDetail />
              </PrivateRoute>
            }
          />
          <Route
            path="/companies"
            element={
              <PrivateRoute>
              <Companies />
              </PrivateRoute>
            }
          />
          <Route
            path="/companies/:id"
            element={
              <PrivateRoute>
              <CompanyDetail />
              </PrivateRoute>
            }
          />
          <Route
            path="/about"
            element={
              <PrivateRoute>
              <About />
              </PrivateRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <PrivateRoute>
              <Contact />
              </PrivateRoute>
            }
          />

        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
