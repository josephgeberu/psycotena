import Image from "next/image";

import { centerImageGridType } from "../type";

const CenteredImageGride = ({
  middleImage,
  topRight,
  topLeft,
  bottomLeft,
  bottomRight,
}: centerImageGridType) => {
  return (
    <div className="  max-h-[799] grid  items-center    service_section  gap-y-28 bg-custum-primary_25  ">
      <div className="topLeft">{topLeft}</div>
      <div className="middle">
        <Image src={middleImage} alt="Service" className="service_image" />
      </div>
      <div className="topRight">{topRight}</div>
      <div className="bottomLeft">{bottomLeft}</div>
      <div className="bottomRight">{bottomRight}</div>
    </div>
  );
};
export default CenteredImageGride;
