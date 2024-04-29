"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

interface ImageObject {
  img: string;
  id: number;
}
const imageArray: ImageObject[] = [
  { img: "/assets/img/illustration/forTutorSVG/png/sliders/0001.png", id: 1 },
  { img: "/assets/img/illustration/forTutorSVG/png/sliders/0002.png", id: 2 },
  { img: "/assets/img/illustration/forTutorSVG/png/sliders/0003.png", id: 3 },
  { img: "/assets/img/illustration/forTutorSVG/png/sliders/0004.png", id: 4 },
  {
    img: "/assets/img/illustration/forTutorSVG/png/sliders/0005.png",
    id: 5,
  },
];

const SignInSwipper2 = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 1500, playOnInit: true }),
  ]);

  return (
    <>
      <>
        <div className="embla w-2/4 m-auto " ref={emblaRef}>
          <div className="embla__container">
            {imageArray.map((image) => (
              <div className="embla__slide " key={image.id}>
                <Image
                  src={image.img}
                  alt={`Slide ${image.id}`}
                  height={144}
                  width={144}
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </>
    </>
  );
};

export default SignInSwipper2;
