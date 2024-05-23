import { StyledButton } from "@/components/styles/Button.styled";
import { BsFillPlayCircleFill as PlayIcon } from "react-icons/bs";
import {
  CardDetails,
  CardImage,
  CardImg,
  SectionCardDetails,
  SectionCardTitle,
  StyledCard,
} from "@/components/styles/Card.styled";
import { TProgramData } from "@/programData";
import { NavLink } from "react-router-dom";

const ProgramCard = ({
  img,
  title,
  details,
  imgStart,
  line,
  link
}: TProgramData): JSX.Element => {
  return (
    <StyledCard imgStart={imgStart}>
      <CardImage imgStart={imgStart} line={line}>
        <CardImg src={img} alt={title} />
      </CardImage>
      <CardDetails>
        <SectionCardTitle>{title}</SectionCardTitle>
        <SectionCardDetails>{details}</SectionCardDetails>
        <NavLink to={link}>
          Daha Fazla <PlayIcon />
        </NavLink>
      </CardDetails>
    </StyledCard>
  );
};

export default ProgramCard;
