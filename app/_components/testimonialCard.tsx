import { testimonialCardType } from "../type";
const TestimonialCard = ({
  rating,
  body,

  autor,
}: testimonialCardType) => {
  return (
    <div className="flex gap-5 flex-col items-start p-5  rounded-lg bg-custum-secondary_100 text-custum-gray_50 rotate-45 w-[440px]">
      <div className="text-paragraph leading-loose p-5 shadow-lg text-white bg-custum-primary_50">
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
