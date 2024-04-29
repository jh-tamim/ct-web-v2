import { makeApiCall } from "@/config/Apicall";

export const staticData = async () => {
  try {
    const result = await makeApiCall<any>(
      `${process.env.NEXT_API}/web/home-statistics`,
      "GET"
    );
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
