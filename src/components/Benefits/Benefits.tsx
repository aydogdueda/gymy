import {
  Benefit,
  BenefitsImage,
  BenefitsImg,
  BenefitsList,
  BenefitsLists,
  CheckIcon,
  SectionBenefits,
  BenefitsDetails,
  BenefitsImageContainer,
} from "@/components/styles/Benefits.styled";
import {
  SectionDescription,
  SectionTitle,
} from "@/components/styles/SectionHeaders.styled";
import { Section } from "@/components/styles/Sections.styled";
import { benefitsData } from "@//benefitsData";
import BenefitImg from "@/assets/benefits-img.png";

const Benefits = (): JSX.Element => {
  return (
    <Section>
      <SectionBenefits>
        <BenefitsDetails>
          <SectionTitle textDefault={true}>faydaları</SectionTitle>
          <SectionDescription textDefault={true}>
            "Uzmanlarımız çok iyi hazırlanmış ve sizin güvenliğinizi riske
            atmadan sizi sınırlarınıza kadar zorlayacak şekilde şekil odaklı
            değişiklikler sunmaya yetkilidir."
          </SectionDescription>
          <BenefitsLists>
            {benefitsData.map((benefit) => {
              return (
                <BenefitsList key={benefit.id}>
                  <CheckIcon />
                  <Benefit>{benefit.benefit} </Benefit>
                </BenefitsList>
              );
            })}
          </BenefitsLists>
        </BenefitsDetails>
        <BenefitsImageContainer>
          <BenefitsImage>
            <BenefitsImg src={BenefitImg} alt="benefit image" />
          </BenefitsImage>
        </BenefitsImageContainer>
      </SectionBenefits>
    </Section>
  );
};

export default Benefits;
