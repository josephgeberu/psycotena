import Link from "next/link";
import Image from "next/image";
import LogoImage from "@/public/assets/images/logo.png";
const Logo = () => {
  return (
    <Link href="/">
      <Image src={LogoImage} alt="PyscoTena Logo" width={50} />
    </Link>
  );
};
export default Logo;
