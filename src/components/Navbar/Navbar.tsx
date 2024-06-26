import { useState } from "react";
import { StyledButton } from "@/components/styles/Button.styled";
import {
  Logo,
  StyledNavbar,
  Menu,
  NavLists,
  NavList,
} from "@/components/styles/Navbar.styled";
import MobileNav from "@/components/Navbar/MobileNavigation";
import { NavLink } from "react-router-dom";
import {
  BsArrowUpRightCircleFill as ArrowIcon,
  BsFillPlayCircleFill as PlayIcon,
} from "react-icons/bs";

const Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MobileNav isOpen={isOpen} toggleHandler={toggleHandler} />
      <StyledNavbar>
        <Logo>Intrepide</Logo>
        <Menu onClick={toggleHandler} />
        <NavLists>
          <NavList>
            <NavLink to="/">Home</NavLink>
          </NavList>
          <NavList>
            <NavLink to="about">About us</NavLink>
          </NavList>
          <NavList>
            <NavLink to="zumba">Zumba</NavLink>
          </NavList>

          <NavList>
            <NavLink to="testimonials">Testimonials</NavLink>
          </NavList>
          <StyledButton primary={true}>
            <NavLink to="/kayit">
              Become a member <ArrowIcon />
            </NavLink>
          </StyledButton>
        </NavLists>
      </StyledNavbar>
    </>
  );
};

export default Navbar;
