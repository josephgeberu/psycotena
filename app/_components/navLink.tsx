import Link from "next/link";
import Image from "next/image";
import { AM, EN } from "../_assetexport";

const NavLinks = () => {
  return (
    <ul className="flex text-heading_6 text-custum-gray_75 items-center h-16">
      <li className=" ">
        <Link
          href="/"
          className="focus:text-custum-secondary_100 px-4  hover:text-custum-primary_50 transition-colors "
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="#service"
          className="focus:text-custum-secondary_100 px-4  hover:text-custum-primary_50 transition-colors "
        >
          Service
        </Link>
      </li>

      <li>
        <Link
          href="#contact"
          className="focus:text-custum-secondary_100 px-4  hover:text-custum-primary_50 transition-colors "
        >
          Contact Us
        </Link>
      </li>
      <li>
        <Link
          href="#contact"
          className="focus:text-custum-secondary_100 px-4  hover:text-custum-primary_50 transition-colors "
        >
          Help
        </Link>
      </li>
      <div className="flex pl-48 gap-x-20">
        <div className="flex items-center gap-x-2 ">
          <li>
            <Link
              href="#help"
              className="flex gap-2 focus:text-custum-secondary_100 px-4  hover:text-custum-primary_50 transition-colors "
            >
              <div className="flex items-center gap-4">
                <Image src={AM} width={30} alt="English" />
                <p className="text-paragraph">AM</p>
              </div>
            </Link>
          </li>
          <p className="text-gray-300 text-[8px] font-bold">|</p>
          <div className="flex">
            <li>
              <Link
                href="#help"
                className="flex gap-2 focus:text-custum-secondary_100 px-4  hover:text-custum-primary_50 transition-colors "
              >
                <div className="flex items-center gap-4">
                  <Image src={EN} width={30} alt="English" />
                  <p className="text-paragraph">EN</p>
                </div>
              </Link>
            </li>
          </div>
        </div>
        <li>
          <Link
            href="/account"
            className="focus:text-custum-secondary_100 px-4  hover:text-custum-primary_50 transition-colors "
          >
            <p className="text-custum-primary_100  border border-custum-primary_100 px-6 py-1 rounded-3xl text-center shadow-sm">
              Login
            </p>
          </Link>
        </li>
      </div>
    </ul>
  );
};
export default NavLinks;
