import Image from "next/image";

import { psycologistCardPropsType } from "../type";
const Psycologist = ({ photo, name, titel }: psycologistCardPropsType) => {
  return (
    <div className="flex flex-col items-center border bg-custum-primary_10  px-9 py-12   text-custum-gray_50">
      <div className="w-56 h-56  relative p-3">
        <Image
          src={photo}
          alt="photo"
          className="object-cover object-top rounded-full "
          fill
        />
      </div>

      <h5 className="text-heading_5 text-custum-primary_100 leading-loose mt-1 ">
        {name}
      </h5>
      <p className="text-heading_6 text-custum-gray_50">{titel}</p>
    </div>
  );
};
export default Psycologist;
