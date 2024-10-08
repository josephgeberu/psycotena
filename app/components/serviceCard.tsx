import { serviceCardPropsType } from "../type";
import Image from "next/image";
const ServiceCard = ({ title, body, iconUrl }: serviceCardPropsType) => {
  return (
    <div className="flex flex-col  items-center justify-center max-h-64  border border-transparent px-12 bg-custum-secondary_100">
      <Image src={iconUrl} width={80} height={80} alt="icon" />
      <div className="text-center shadow-2xl shadow-custum-primary_100 px-6 py-7 rounded-sm min-h-64 ">
        <h4 className="text-heading_4 leading-loose text-custum-gray_50 font-bold">
          {title}
        </h4>
        <p className="text-paragraph text-custum-gray_75 leading-relaxed relative ">
          {body}
        </p>
      </div>
    </div>
  );
};
export default ServiceCard;
