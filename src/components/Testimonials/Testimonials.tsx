import React from "react";
import {
  SectionDescription,
  SectionTitle,
} from "@/components/styles/SectionHeaders.styled";
import { Section } from "@/components/styles/Sections.styled";
import {
  ArrowNext,
  ArrowPrev,
  AttestantDetails,
  Avatar,
  AvatarContainer,
  TestimonialArrows,
  TestimonialAvatars,
  TestimonialCard,
  TestimonialCardContainer,
  TestimonialDetails,
  TestimonialDetailsCTA,
  TestimonialQuoteIcon,
  TestimonialReviewCount,
  TestimonialSection,
  TestimonialText,
  AttestantAvatarImage,
  AttestantAvatar,
  AttestantName,
  AttestantInformation,
  AttestantSubName,
} from "@/components/styles/Testimonials.styed";
import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
} from "@/components/Testimonials/avatars";
import { IconContext } from "react-icons";
import attestantAvatar from "@/assets/attestant-avatar1.jpg";

const Testimonials = () => {
  const iconStyle = {
    color: "#fff",
    size: "1.25rem",
  };

  return (
    <Section id="testimonials">
      <TestimonialSection>
        <TestimonialDetails>
          <SectionTitle textDefault={true}>Müşteri görüşleri</SectionTitle>
          <SectionDescription textDefault={true}>
            İşte dünyanın dört bir yanından bazı üyelerimizin çeşitli
            referansları.
          </SectionDescription>
          <TestimonialDetailsCTA>
            <TestimonialAvatars>
              <AvatarContainer>
                <Avatar src={avatar1} />
                <Avatar src={avatar2} />
                <Avatar src={avatar3} />
                <Avatar src={avatar4} />
                <Avatar src={avatar5} />
              </AvatarContainer>
              <TestimonialReviewCount>3,041 inceleme</TestimonialReviewCount>
            </TestimonialAvatars>
            <TestimonialArrows>
              <IconContext.Provider value={iconStyle}>
                <ArrowPrev />
                <ArrowNext />
              </IconContext.Provider>
            </TestimonialArrows>
          </TestimonialDetailsCTA>
        </TestimonialDetails>
        <TestimonialCardContainer>
          <TestimonialCard>
            <TestimonialQuoteIcon />
            <TestimonialText>
              Şimdi çok daha güçlüyüm ve denge yeteneğim yüzde 100 iyileşti.
              Steven'ın her antrenman seansında bana sağladığı zorluktan
              hoşlanıyorum. Steven, her yeni egzersizi bana kendi yaparak
              tanıtıyor.
            </TestimonialText>
            <AttestantDetails>
              <AttestantAvatarImage>
                <AttestantAvatar src={attestantAvatar} alt="attestant" />
              </AttestantAvatarImage>
              <AttestantInformation>
                <AttestantName>Pelin Yiğit</AttestantName>
                <AttestantSubName>Atlet</AttestantSubName>
              </AttestantInformation>
            </AttestantDetails>
          </TestimonialCard>
        </TestimonialCardContainer>
      </TestimonialSection>
    </Section>
  );
};

export default Testimonials;
