import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllCountries from "./components/AllCountries/AllCountries";
import CountryInfo from "./components/CountryInfo/CountryInfo";

function App() {
  const changeTheme = () => {
    const header = document.querySelector(".header");
    const details = document.querySelectorAll('.details');
    const uls = document.querySelectorAll("ul");
  
    // Toggle between dark and light modes
    const isLightMode = header.classList.contains("light-theme");
    
    header.classList.toggle("light-theme", !isLightMode);
    
    details.forEach((detail) => {
      detail.classList.toggle("light-theme", !isLightMode);
    });
    
    uls.forEach((ul) => {
      ul.classList.toggle("light-theme", !isLightMode);
    });
  
    document.body.classList.toggle("light-theme", !isLightMode);
  
    // Update button text based on the current mode
    const button = document.querySelector(".theme-toggle-button");
    button.textContent = isLightMode ? "Dark Mode" : "Light Mode";
  
    // Toggle the dark-theme and light-theme classes on the button
    button.classList.toggle("dark-theme", !isLightMode);
    button.classList.toggle("light-theme", isLightMode);
  };
  

  return (
    <div className="app-container">
      <header className="header">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h5>Where in the world</h5>
          <button className="theme-toggle-button" onClick={changeTheme}>
            Dark Mode
          </button>
        </div>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<AllCountries />} />
          <Route path="/country/:countryName" element={<CountryInfo />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
