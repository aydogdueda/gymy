import {
  HeroImage,
  MainButtons,
  MainDescription,
  MainDetails,
  MainHero,
  MainImage,
  MainTitleLine,
  MainTitleTextGradient,
  MainTitlte,
} from "@/components/styles/Hero.styled";
import { StyledButton } from "@/components/styles/Button.styled";
import {
  BsArrowUpRightCircleFill as ArrowIcon,
  BsFillPlayCircleFill as PlayIcon,
} from "react-icons/bs";
import heroImg from "@/assets/hero-image.png";

const Hero = (): JSX.Element => {
  return (
    <MainHero>
      <MainDetails>
        <MainTitlte>
          Asla Pes Etme, <MainTitleLine>Güçlü Kal </MainTitleLine> <br />
          <MainTitleTextGradient>Yeni seni keşfet!</MainTitleTextGradient>
        </MainTitlte>
        <MainDescription>
          Sağlıklı bir yaşam için adım atın! Spor yapmaya bugün başlayın ve
          kendinizi daha iyi hissedin.
        </MainDescription>
        <MainButtons>
          <StyledButton primary={true}>
            Başlayın <ArrowIcon />
          </StyledButton>
          <StyledButton>
            Daha Fazla <PlayIcon />{" "}
          </StyledButton>
        </MainButtons>
      </MainDetails>

      <MainImage>
        <HeroImage src={heroImg} alt="main image" />
      </MainImage>
    </MainHero>
  );
};

export default Hero;
