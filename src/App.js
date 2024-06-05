import React, { useState } from "react";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import SearchInput from "./components/SearchInput/SearchInput";
import { iconUrl } from "./constants/imgImports";
import "./App.css";

function App() {
  const [data, setData] = useState();
  const [imageUrl, setImageUrl] = useState();

  const updateData = (data) => {
    setData(data);

    if (data?.days[0]?.icon === "clear-day") {
      setImageUrl(iconUrl.clear);
    } else if (data?.days[0]?.icon === "cloudy") {
      setImageUrl(iconUrl.cloudy);
    } else if (data?.days[0]?.icon === "partly-cloudy-day") {
      setImageUrl(iconUrl.partlyCloudy);
    } else if (data?.days[0]?.icon === "rain") {
      setImageUrl(iconUrl.rain);
    } else if (data?.days[0]?.icon === "fog") {
      setImageUrl(iconUrl.fog);
    } else if (data?.days[0]?.icon === "wind") {
      setImageUrl(iconUrl.wind);
    } else {
      setImageUrl(iconUrl.snow);
    }
  };

  return (
    <>
      <div className="img-fluid">
        <Navbar />
        <SearchInput updateData={updateData} />
        <Card data={data} imageUrl={imageUrl} />
      </div>
    </>
  );
}

export default App;
