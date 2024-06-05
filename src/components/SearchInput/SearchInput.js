/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { ipData_api_key } from "../../constants/appConfig";
import { fetchWeather } from "../../weather-data/fetchWeather";
import { StyledSearchInput } from "./StyledSearchInput";

function SearchInput({ updateData }) {
  const [city, setCity] = useState("");

  const handleClick = async (fetchCity) => {
    const data = await fetchWeather(fetchCity);
    updateData(data);
    setCity("");
    return;
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const fetchIpData = async () => {
    const ipData = await fetch(
      `https://api.ipdata.co/?api-key=${ipData_api_key}`,
      {
        method: "GET",
      }
    )
      .then((res) => {
        return res.text();
      })
      .then((txt) => {
        return JSON.parse(txt);
      });

    handleClick(ipData.city);
  };

  useEffect(() => {
    fetchIpData();
  }, []);

  return (
    <StyledSearchInput>
      <div className="Card">
        <div className="CardInner">
          <div className="container">
            <div
              className="Icon"
              onClick={() => {
                handleClick(city);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#657789"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-search"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <div className="InputContainer">
              <input
                placeholder="Search for a city..."
                onChange={handleChange}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleClick(city);
                  }
                }}
                value={city}
              />
            </div>
          </div>
        </div>
      </div>
    </StyledSearchInput>
  );
}

export default SearchInput;
