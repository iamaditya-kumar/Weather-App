import { weather_api_key } from "../constants/appConfig";

export const fetchWeather = async (city) => {
  return await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city
      .split(" ")
      .join("%20")}?key=${weather_api_key}`,
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
};
