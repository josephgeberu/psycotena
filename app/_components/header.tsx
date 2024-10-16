import CustumButton from "./custumButton";
import { Book } from "../_assetexport";
import Image from "next/image";
const Header = () => {
  return (
    <section className="flex header_section px-20 py-14 ">
      <div className="flex-col  relative right-12 text-white w-[670px]">
        <h6 className="text-heading_6  font-bold uppercase tracking-widest">
          Find Relief
        </h6>
        <h1 className="text-heading_1 uppercase  font-bold">
          from Mental Health Struggles
        </h1>
        <p className="text-heading_5 pt-6 pb-10  ">
          Experienced psychologists offering compassionate care and effective
          treatment.
        </p>
        <CustumButton className="flex border border-custum-primary_100  px-12 py-5  text-white gap-x-5 items-center text-heading_4 font-bold rounded-full  hover:bg-custum-primary_100 transition-colors">
          <Image src={Book} width="40" alt="Book" />
          <p>Book Now</p>
        </CustumButton>
      </div>
    </section>
  );
};
export default Header;
