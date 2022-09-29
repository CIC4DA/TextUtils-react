import "./App.css";
import Navbar from "./Component/Navbar.js";
import TextForm from "./Component/TextForm.js";
import React, { useState } from "react";
import Alert from "./Component/Alert.js";
import About from "./Component/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

  const [darkmode, setDarkMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const togglemode = () => {
    if (darkmode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils-Dark Mode";
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils-Light Mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={darkmode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/About" element={<About/>}></Route>
            <Route path="/" element={<TextForm showalert={showAlert} mode={darkmode} heading="Enter to anlayze your text"/>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
