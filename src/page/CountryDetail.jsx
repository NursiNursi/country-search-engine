import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CountryName from "../components/CountryName";
import LatLong from "../components/LatLong";
import Capital from "../components/Capital";
import CallingCode from "../components/CallingCode";
import Currency from "../components/Currency";
import Button from "../components/Button";

function CountryDetail() {
  const [country, setCountry] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/alpha/${params.id}`,
        );
        if (!res.ok) {
          throw new Error("Failed to fetch country");
        }
        const [data] = await res.json();
        setCountry(data);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };
    fetchCountry();
  }, [params.id]);

  return (
    <div className="my-auto flex h-screen w-full flex-col items-center justify-center">
      {country.name && (
        <div className="mt-80 flex w-full max-w-[80%] flex-col sm:mt-0">
          <Button navigate={navigate} />
          <div>
            <CountryName country={country} />
            <div className="mt-[25px] flex flex-col">
              <div className="flex flex-col gap-[25px] sm:flex-row">
                <LatLong country={country} />
                <Capital country={country} />
              </div>
              <div className="flex flex-col gap-[25px] sm:flex-row">
                <CallingCode country={country} />
                <Currency country={country} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CountryDetail;
