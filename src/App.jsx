import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const apiURL = `https://ih-countries-api.herokuapp.com/countries`;



function App() {

const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      const countries = response.data;
      setCountries(countries);
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage countries={countries} />} />
        <Route path="/:countryId" element={<CountryDetails/>} />
      </Routes>
    </div>
  );
}

export default App;