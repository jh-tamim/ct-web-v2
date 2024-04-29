"use client";

import { Select } from "antd";
import { useState } from "react";

interface Country {
  id: number;
  country: string;
}

const JobCountrySelect = ({
  country,
  countryId,
}: {
  country?: any;
  countryId?: number;
}) => {
  const [GetCountryId, setCountry] = useState(countryId);

  const options = country?.data.map((countryObj: Country) => ({
    value: countryObj.id, // Convert to string if necessary
    label: countryObj.country,
  }));

  const handleChange = (value: string) => {
    console.log(value);
  };

  return (
    <Select
      allowClear
      style={{ width: "100%" }}
      placeholder="Country"
      options={options}
      size="large"
      onChange={handleChange}
    />
  );
};

export default JobCountrySelect;
