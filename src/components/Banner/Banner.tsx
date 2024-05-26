import {
  BannerContainer,
  BannerCTA,
  BannerDetails,
  BannerTitle,
} from "@/components/styles/Banner.styled";
import { StyledButton } from "@/components/styles/Button.styled";
import { BsArrowUpRightCircleFill as ArrowIcon } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Banner = (): JSX.Element => {
  return (
    <BannerContainer>
      <BannerTitle>SENİN İÇİN HAZIRLANMIŞ ANTRENMAN PROGRAMI!</BannerTitle>
      <BannerCTA>
        <BannerDetails>
          Sağlıklı ve ideal bir vücuda sahip olmak isteyenler için sunduğumuz
          özel programlar. Hedeflerinize göre ücretsiz seçim yapabilirsiniz!
        </BannerDetails>
        <StyledButton primary={true}>
          <NavLink to="/kayit">
            Şimdi Katıl <ArrowIcon />
          </NavLink>
        </StyledButton>
      </BannerCTA>
    </BannerContainer>
  );
};

export default Banner;
