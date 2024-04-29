import { makeApiCall } from "@/config/Apicall";

interface Testimonial {
  id: number;
  name: string;
  comment: string;
  designation: string;
  type: "tutor" | "student" | "parent";
  photo: string;
}

interface TestimonialResponse {
  status: number;
  message: string | null;
  data: Testimonial[] | null;
}

const GuardianSlider = async () => {
  const testimonialData: TestimonialResponse =
    await makeApiCall<TestimonialResponse>(
      `${process.env.NEXT_API}/static/testimonials-web`,
      "GET"
    );

  return <div></div>;
};

export default GuardianSlider;
