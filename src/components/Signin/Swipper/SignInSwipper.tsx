"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

interface ImageObject {
  img: string;
  id: number;
}
const imageArray: ImageObject[] = [
  { img: "/assets/img/illustration/forGuardian/sliders/001.png", id: 1 },
  { img: "/assets/img/illustration/forGuardian/sliders/002.png", id: 2 },
  { img: "/assets/img/illustration/forGuardian/sliders/003.png", id: 3 },
];

const SignInSwipper = () => {
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

export default SignInSwipper;
