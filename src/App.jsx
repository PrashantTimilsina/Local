import { useState, useEffect } from "react";
import Head from "./components/Head";
import "./App.css";
import CountryCard from "./components/CountryCard";

// import CountryCard from "./components/CountryCard";

// const CountryCard = () => {
//   return (
//     <div className="card">
//       <img
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCl-edaR4SQu75YCMrwxBToUO2jqoKGiV8Tw&s"
//         alt="Country"
//       />
//       <h2>Prashant Timilsina</h2>
//       <h3>Data</h3>
//       <h4>Population</h4>
//     </div>
//   );
// };

// eslint-disable-next-line
const List = ({ data }) => {
  return (
    <>
      <div className="country-list">
        {/* eslint-disable-next-line */}
        {data.slice(0).map((el, i) => (
          <CountryCard key={i} country={el} />
        ))}
      </div>
    </>
  );
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [countryList, setCountryList] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountryList(data);
  }
  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button>Search</button>
      </div>
      <List data={countryList} />
    </>
  );
};

const Footer = () => {
  return <h2>Footer</h2>;
};

function App() {
  return (
    <>
      <Head />
      <Body />

      <Footer />
    </>
  );
}

export default App;
