import JobSearch from "@/components/Joblist/JobSearch/JobSearch";
import Jobs from "@/components/Joblist/Jobs/Jobs";
import { CLIENT_ID, CLIENT_SECRET } from "@/config";
import { makeApiCall } from "@/config/Apicall";
import { Card, CardHeader, CardBody, Image, Input } from "@nextui-org/react";
import { Select } from "antd";
import Link from "next/link";

export interface JobDataTypes {
  job_id: number;
  tuition_type: string;
  salary: string;
  city: string;
  location: string | null;
  posted_date: string;
  subjects?: string;
  title: string;
  preferred_gender: string | null;
  class_image: string | null;
}

interface JobData {
  status: number | null;
  message: string | null;
  data: {
    jobs: JobDataTypes[] | null;
    total: number | null;
    page: number | null;
    showing: number | null;
    has_more: boolean | null;
  };
}

const JobList = async ({ params, searchParams }: any) => {
  console.log(searchParams);
  const jobData: JobData = await makeApiCall<JobData>(
    `${process.env.NEXT_API}/job/list?page=${
      searchParams.page ? searchParams.page : 1
    }`,
    "GET"
  );

  // console.log(jobData.data);

  return (
    <div className="mt-2 md:px-0 p-4">
      <div className="w-full flex gap-6">
        <div className="md:w-2/3 w-full">
          <div className="w-full">
            <div className="flex flex-col justify-center">
              {jobData.data.jobs?.map((items: JobDataTypes) => {
                return <Jobs key={items.job_id} items={items}></Jobs>;
              })}
            </div>
          </div>
        </div>
        {/* <Link href="?page=2">page</Link> */}

        <div className="md:w-1/3 hidden md:block">
          <JobSearch></JobSearch>
        </div>
      </div>
    </div>
  );
};

export default JobList;
