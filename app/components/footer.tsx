import Image from "next/image";
import { Logo } from "../assetexport";
const Footer = () => {
  return (
    <div className="flex justify-between items-center px-20  text-custum-gray_50">
      <div>
        <Image src={Logo} alt="Logo" width={50} />
      </div>
      <div>
        <p className="text-small">
          Copyright © 2024 TenaPsyco All Rights Reserved
        </p>
      </div>
    </div>
  );
};
export default Footer;
