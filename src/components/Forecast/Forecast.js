import React from "react";
import { iconUrl } from "../../constants/imgImports";

function Forecast({ data }) {
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

  function getIconUrl(e) {
    if (e.icon === "clear-day") {
      return iconUrl.clearDay;
    } else if (e.icon === "clear-night") {
      return iconUrl.clearNight;
    } else if (e.icon === "clear-night") {
      return iconUrl.clearNight;
    } else if (e.icon === "cloudy") {
      return iconUrl.cloud;
    } else if (e.icon === "fog") {
      return iconUrl.foggy;
    } else if (e.icon === "hail") {
      return iconUrl.hail;
    } else if (e.icon === "partly-cloudy-day") {
      return iconUrl.partlyCloudyDay;
    } else if (e.icon === "partly-cloudy-night") {
      return iconUrl.partlyCloudyNight;
    } else if (e.icon === "rain-snow-showers-day") {
      return iconUrl.rainSnowShowersDay;
    } else if (e.icon === "rain-snow-showers-night") {
      return iconUrl.rainSnowShowersNight;
    } else if (e.icon === "rain-snow") {
      return iconUrl.rainSnow;
    } else if (e.icon === "rain") {
      return iconUrl.rainy;
    } else if (e.icon === "showers-day") {
      return iconUrl.showersDay;
    } else if (e.icon === "showers-night") {
      return iconUrl.showersNight;
    } else if (e.icon === "sleet") {
      return iconUrl.sleet;
    } else if (e.icon === "snow-showers-day") {
      return iconUrl.snowShowersDay;
    } else if (e.icon === "snow-showers-night") {
      return iconUrl.snowShowersNight;
    } else if (e.icon === "snow") {
      return iconUrl.snowy;
    } else if (e.icon === "thunder-rain") {
      return iconUrl.thunderRain;
    } else if (e.icon === "thunder-showers-day") {
      return iconUrl.thunderShowersDay;
    } else if (e.icon === "thunder-showers-night") {
      return iconUrl.thunderShowersNight;
    } else if (e.icon === "thunder") {
      return iconUrl.thunder;
    } else {
      return iconUrl.windy;
    }
  }

  return (
    <>
      <div className="forecast-container container flex-wrap d-flex flex-row justify-content-center align-items-center">
        {data?.days.map((e, i) => {
          let date = new Date(e?.datetime);

          let formatedDate =
            date.getDate().toString() + " " + months[date.getMonth()];

          const iconUrl = getIconUrl(e);
          return (
            i !== 0 && (
              <div
                key={i}
                className="forecast"
                style={{
                  borderRight:
                    i !== 14 ? "0.1px solid rgb(255 255 255 / 56%)" : "none",
                }}
              >
                <div style={{ fontSize: "15px" }}>{formatedDate}</div>
                <img
                  src={iconUrl}
                  alt=""
                  style={{ width: "36px", padding: "5px 0" }}
                />
                <div style={{ fontSize: "15px" }}>
                  {(((e?.temp - 32) * 5) / 9).toFixed(0)}&deg;
                </div>
              </div>
            )
          );
        })}
      </div>
    </>
  );
}

export default Forecast;
