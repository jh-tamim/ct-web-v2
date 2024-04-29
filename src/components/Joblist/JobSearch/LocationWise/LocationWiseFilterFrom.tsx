"use client";

import { useState } from "react";
import CountryField from "./CountryField";
import CityField from "./CityField";

const LocationWiseFilterFrom = () => {
  // [{ value: 1, label: "bangladesh" }]
  // id and name
  const [country, setCountry] = useState();

  //  "id": 9,"city": "Barishal"
  const [city, setCity] = useState();

  //  "id": 666,"location": "30 Godown"

  const [location, setLocation] = useState();

  return (
    <div>
      <div>
        <CountryField country={country} setCity={(e: any) => setCity(e)} />
        <CityField city={city} />
      </div>
      <div></div>
    </div>
  );
};

export default LocationWiseFilterFrom;
