import Image from "next/image";

import { TestBack } from "../_assetexport";
import { testimonialCardType } from "../type";
const TestimonialCard = ({
  rating,
  body,

  autor,
}: testimonialCardType) => {
  return (
    <div className="text-paragraph leading-loose px-14 py-20 text-custum-gray_75 w-72 h-72   relative z-0 ">
      <Image src={TestBack} alt="background" className="object-cover" fill />

      <div className="relative z-10">
        {body}
        <div className="flex items-center ">
          <div className="flex items-center gap-5 w-full ">
            <div className="flex justify-between w-28  ">
              <p>{rating}</p>
              <p>{rating}</p>
              <p>{rating}</p>
              <p>{rating}</p>
              <p>{rating}</p>
            </div>
            <h6 className="text-heading_6">{autor}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestimonialCard;
