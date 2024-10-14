import { testimonialCardType } from "../type";
const TestimonialCard = ({
  rating,
  body,

  autor,
}: testimonialCardType) => {
  return (
    <div className="text-paragraph leading-loose p-5 shadow-lg text-custum-gray_75 border border-custum-secondary_75">
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
  );
};
export default TestimonialCard;
