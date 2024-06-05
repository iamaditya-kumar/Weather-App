import React from "react";
import Forecast from "../Forecast/Forecast";
import Spinner from "../Spinner/Spinner";
import { StyledCard } from "./StyledCard";

function Card({ data, imageUrl }) {
  let date = new Date(data?.days[0]?.datetime);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let formatedDate =
    days[date.getDay()] +
    ", " +
    date.getDate().toString() +
    " " +
    months[date.getMonth()];

  return (
    <StyledCard>
      <div className="cardContainer">
        <div className="glassCard">
          {data ? (
            <div>
              <div className="d-flex flex-column flex-lg-row justify-content-evenly">
                <div className="d-flex flex-column">
                  {/* PLACE AND DATE */}
                  <div className="p-2">
                    {/* Address */}
                    <div className="flex-summary" style={{ fontSize: "28px" }}>
                      {data?.resolvedAddress}
                    </div>
                    {/* Date */}
                    <div className="flex-summary"> {formatedDate}</div>
                  </div>
                  {/* TEMP SUMMARY */}
                  <div
                    className="p-2 d-flex flex-row justify-content-center"
                    style={{ gap: "50px" }}
                  >
                    {/* Icon */}
                    <div>
                      <img src={imageUrl} alt="" />
                    </div>
                    <div>
                      {/* Temp  */}
                      <div className="main-temp">
                        {(((data?.days[0]?.temp - 32) * 5) / 9).toFixed(2)}&deg;
                      </div>
                      {/* Weather Condition  */}
                      <div
                        style={{
                          color: "#fff",
                          fontWeight: "500",
                          fontSize: "22px",
                        }}
                      >
                        {data?.days[0]?.conditions}
                      </div>
                    </div>
                  </div>
                </div>
                {/* WEATHER DETAILS  */}
                <div className="d-flex flex-column justify-content-center">
                  <div className="d-flex flex-row justify-content-center">
                    {/*  MAX TEMP  */}
                    <div className="flex-details">
                      <div className="flex-value">
                        {(((data?.days[0]?.tempmax - 32) * 5) / 9).toFixed(2)}
                        &#8451;
                      </div>
                      <div className="flex-key">Max</div>
                    </div>
                    {/* FEELS LIKE  */}
                    <div className="flex-details">
                      <div className="flex-value">
                        {(((data?.days[0]?.feelslike - 32) * 5) / 9).toFixed(2)}
                        &#8451;
                      </div>
                      <div className="flex-key">Feels Like</div>
                    </div>
                    {/* SUNRISE  */}
                    <div className="flex-details">
                      <div className="flex-value">{data?.days[0]?.sunrise}</div>
                      <div className="flex-key">Sunrise</div>
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-center">
                    {/* MIN TEMP  */}
                    <div className="flex-details">
                      <div className="flex-value">
                        {(((data?.days[0]?.tempmin - 32) * 5) / 9).toFixed(2)}
                        &#8451;
                      </div>
                      <div className="flex-key">Min</div>
                    </div>
                    {/* HUMIDITY  */}
                    <div className="flex-details">
                      <div className="flex-value">
                        {data?.days[0]?.humidity}
                      </div>
                      <div className="flex-key">Humidity</div>
                    </div>
                    {/* SUNSET  */}
                    <div className="flex-details">
                      <div className="flex-value">{data?.days[0]?.sunset}</div>
                      <div className="flex-key">Sunset</div>
                    </div>
                  </div>
                </div>
              </div>

              <Forecast data={data} />
            </div>
          ) : (
            <Spinner />
          )}
        </div>

        <div className="drops">
          <div className="drop drop-1"></div>
          <div className="drop drop-2"></div>
          <div className="drop drop-3"></div>
          <div className="drop drop-4"></div>
          <div className="drop drop-5"></div>
        </div>
      </div>
    </StyledCard>
  );
}

export default Card;
