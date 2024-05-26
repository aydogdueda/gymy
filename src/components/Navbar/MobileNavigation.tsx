import { StyledButton } from "@/components/styles/Button.styled";
import {
  CloseMenu,
  MobileBottomText,
  MobileHeader,
  MobileImg,
  MobileLink,
  MobileList,
  MobileLogo,
  MobileMenuImage,
  MobileNavList,
  MobileStyledNav,
} from "@/components/styles/MobileNav.styled";
import Image from "@/assets/program1-img.png";
import { NavLink } from "react-router-dom";
import {
  BsArrowUpRightCircleFill as ArrowIcon,
  BsFillPlayCircleFill as PlayIcon,
} from "react-icons/bs";

type MobileNavProps = {
  isOpen: boolean;
  toggleHandler: () => void;
};

const MobileNav = ({ isOpen, toggleHandler }: MobileNavProps): JSX.Element => {
  return (
    <MobileStyledNav isOpen={isOpen}>
      <MobileHeader>
        <MobileLogo>Intrepide</MobileLogo>
        <CloseMenu onClick={toggleHandler} />
      </MobileHeader>
      <MobileNavList>
        <MobileList>
          <MobileLink
            to="/"
            smooth={true}
            duration={650}
            delay={0}
            onClick={toggleHandler}
          >
            Anasayfa
          </MobileLink>
        </MobileList>
        <MobileList>
          <MobileLink
            to="programs"
            smooth={true}
            duration={650}
            delay={0}
            onClick={toggleHandler}
          >
            Programlar
          </MobileLink>
        </MobileList>
        <MobileList>
          <MobileLink
            to="about"
            smooth={true}
            duration={650}
            delay={0}
            onClick={toggleHandler}
          >
            Hakkımızda
          </MobileLink>
        </MobileList>
        <MobileList>
          <MobileLink
            to="memberships"
            smooth={true}
            duration={650}
            delay={0}
            onClick={toggleHandler}
          >
            Üyelikler
          </MobileLink>
        </MobileList>
        <MobileList>
          <MobileLink
            to="testimonials"
            smooth={true}
            duration={650}
            delay={0}
            onClick={toggleHandler}
          >
            Referanslar
          </MobileLink>
        </MobileList>
      </MobileNavList>
      <StyledButton
        onClick={toggleHandler}
        style={{ width: "100%", marginTop: "1rem" }}
        primary={true}
      >
        <NavLink to="/kayit">
          Üye Olun <ArrowIcon />
        </NavLink>
      </StyledButton>
      <MobileMenuImage>
        <MobileImg src={Image} />
      </MobileMenuImage>
      <MobileBottomText>Make it or break it!</MobileBottomText>
    </MobileStyledNav>
  );
};

export default MobileNav;
