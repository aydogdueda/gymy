import {
  SectionDescription,
  SectionTitle,
} from "@/components/styles/SectionHeaders.styled";
import { programData } from "@/programData";
import ProgramCard from "@/components/Programs/ProgramCard";
import { Section, SectionCards } from "@/components/styles/Sections.styled";

const Program = (): JSX.Element => {
  return (
    <Section id="programs">
      <SectionTitle>Antrenman Programlarımız</SectionTitle>
      <SectionDescription>
        {" "}
        Uzmanlarımız, güvenliğinizi riske atmadan sizi en üst seviyeye taşıyacak
        şekilde şekil odaklı değişiklikler sunmak için son derece hazırlıklı ve
        yetkin.
      </SectionDescription>
      <SectionCards>
        {programData.map((program) => (
          <ProgramCard key={program.id} {...program} />
        ))}
      </SectionCards>
    </Section>
  );
};

export default Program;
