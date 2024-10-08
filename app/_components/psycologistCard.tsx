import Image from "next/image";

import { psycologistCardPropsType } from "../type";
const Psycologist = ({ photo, name, titel }: psycologistCardPropsType) => {
  return (
    <div className="flex flex-col items-center border border-custum-gray_10 px-8 py-9 bg-custum-primary_25 uppercase text-custum-gray_100">
      <Image src={photo} alt="photo" width={150} height={150} />

      <h5 className="text-heading_5 text-custum-grary_100 leading-loose mt-1">
        {name}
      </h5>
      <h6 className="text-heading_6 text-custum-gray_50">{titel}</h6>
    </div>
  );
};
export default Psycologist;
