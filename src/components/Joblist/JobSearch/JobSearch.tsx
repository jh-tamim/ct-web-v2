import { makeApiCall } from "@/config/Apicall";
import { Card, Divider } from "@nextui-org/react";
import { Button, DatePicker, Select } from "antd";
import type { SelectProps } from "antd";
import JobCountrySelect from "../JobCountry/JobCountrySelect";
import LocationWiseFilterFrom from "./LocationWise/LocationWiseFilterFrom";
import TextDecoration from "@/components/TextDecoration/TextDecoration";

const JobSearch = async () => {
  const { Option } = Select;

  //   country data

  const searchCountry: any = await makeApiCall<any>(
    `${process.env.NEXT_API}/static/country`,
    "GET"
  );

  const options: SelectProps["options"] = [
    { value: "home", label: "Home Tutoring" },
    { value: "online", label: "Online Tutoring" },
    { value: "group", label: "Group Tutoring" },
    { value: "package", label: "Package Tutoring" },
  ];

  return (
    <Card className="w-full bg-white p-8 sticky top-24 space-y-2" radius="sm">
      <TextDecoration
        type={"subheading"}
        text={"Filter"}
        mode="bold"
      ></TextDecoration>
      <Divider className="my-8" />
      <div className="flex flex-row gap-2 justify-between ">
        <DatePicker name="date" placeholder="Posted Date From" size={"large"} />
        <DatePicker placeholder="Posted Date To" size={"large"} name="dated2" />
      </div>
      {/* <LocationWiseFilterFrom /> */}
      <Select
        mode="multiple"
        allowClear
        style={{ width: "100%" }}
        placeholder="Tuition Type"
        size="large"
        options={options}
      />
    </Card>
  );
};

export default JobSearch;
