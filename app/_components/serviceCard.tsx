import { serviceCardPropsType } from "../type";
import Image from "next/image";
const ServiceCard = ({ title, body, iconUrl }: serviceCardPropsType) => {
  return (
    <div className="flex flex-col  items-center  max-h-64  ">
      <Image src={iconUrl} width={80} height={80} alt="icon" />
      <div className="text-center  shadow-custum-primary_100 bg-custum-primary_10 px-6 py-7 rounded min-h-64 ">
        <h4 className="text-heading_4 leading-loose text-custum-gray_75 ">
          {title}
        </h4>
        <p className="text-paragraph text-custum-gray_50 leading-relaxed relative ">
          {body}
        </p>
      </div>
    </div>
  );
};
export default ServiceCard;
