import { useEffect, useState } from "react";
import ToolTip from "./Tooltip";

const Currency = ({ country }) => {
  const [sameCurrency, setSameCurrency] = useState(0);
  const [similarCurrency, setSimilarCurrency] = useState();

  const currency = country.currencies ? Object.keys(country.currencies)[0] : "";

  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/currency/${currency}`,
        );
        if (!res.ok) {
          throw new Error("Failed to fetch country");
        }
        const data = await res.json();
        setSimilarCurrency(data);
        setSameCurrency(data.length);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };
    fetchCurrency();
  }, [currency]);

  function getCountry() {
    const similar = similarCurrency
      ?.map((item) => item.name.common)
      .sort((a, b) => a.localeCompare(b));
    return (
      <div>
        {similar &&
          similar.map((name, index) => (
            <div key={index} className="mb-1">
              {name}
            </div>
          ))}
      </div>
    );
  }

  return (
    <div className="mt-[25px] flex h-[143px] w-[540px] flex-col gap-2 pl-[25px] pt-[25px]">
      <p className="text-lg font-medium">Currency</p>
      <p className="text-5xl font-bold text-[#8362F2]">{currency}</p>
      <p className="font-medium">
        <ToolTip content={getCountry()}>
          <span className="text-[#8362F2] underline">
            {sameCurrency} countries
          </span>
        </ToolTip>{" "}
        with this currency
      </p>
    </div>
  );
};

export default Currency;
