import Logo from "./logo";
import NavLinks from "./navLink";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-20 py-2  ">
      <Logo />
      <NavLinks />
    </nav>
  );
};
export default NavBar;
