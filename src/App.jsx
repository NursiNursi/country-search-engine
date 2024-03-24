import "./index.css";
import { useState, useEffect } from "react";
import magnify from "./assets/magnify.svg";
import { Link } from "react-router-dom";

function App() {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [typingTimeout, setTypingTimeout] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${query}`);
        if (!res.ok) {
          throw new Error("Failed to fetch countries");
        }
        const data = await res.json();
        if (data.length === 0) {
          setCountries([]);
          setErrorMessage("No countries found.");
        } else {
          setErrorMessage("");
          setCountries(
            data
              .sort((a, b) => a.name.common.localeCompare(b.name.common))
              .slice(0, 5),
          );
        }
      } catch (err) {
        setErrorMessage("Data not found");
      }
    };

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    const newTimeout = setTimeout(() => {
      if (!query) {
        setCountries([]);
        setErrorMessage("");
        return;
      }
      fetchCountries();
    }, 200);

    setTypingTimeout(newTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <div className="mt-64 flex flex-col items-center">
      <h1 className="text-7xl font-bold">Country</h1>
      <div className="relative mb-6">
        <input
          type="text"
          id="default-input"
          className="mt-10 block h-[60px] w-[325px] rounded-lg border border-gray-300 bg-gray-50 p-2 pl-[28px] text-[18px] text-sm font-medium text-gray-900 focus:border-[#8362F2] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#8362F2] sm:w-[700px]"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
          <img
            src={magnify}
            className="mr-4 mt-10 h-[30px] w-[30px] text-gray-400"
            alt="Search Icon"
          />
        </div>
      </div>
      {errorMessage && (
        <div className="w-[700px]">
          <p className="self-start pl-[25px] text-[18px] text-red-500">
            {errorMessage}
          </p>
        </div>
      )}
      <div className="flex w-[325px] flex-row flex-wrap sm:w-[700px]">
        {countries.length > 0 &&
          countries.map((country, i) => (
            <Link
              key={i}
              to={`/country/${country.cca2}`}
              className="w-full px-[25px] py-[9px] hover:bg-[#F4F4F4]"
            >
              <h3 className="text-[18px] font-normal">{country.name.common}</h3>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default App;
