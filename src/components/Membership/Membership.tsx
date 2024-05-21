import { useState } from "react";
import { Section } from "@/components/styles/Sections.styled";
import {
  MembershipCards,
  MembershipChoose,
  MembershipChooseText,
  ToggleInput,
  ToggleLabel,
} from "@/components/styles/Membership.styled";
import {
  SectionDescription,
  SectionTitle,
} from "@/components/styles/SectionHeaders.styled";
import MembershipCard from "@/components/Membership/MembershipCard";
import { membershipCarDatas } from "@/membershipCardData";

const Membership = (): JSX.Element => {
  const [annualy, setAnually] = useState(false);

  const annualyFunction = () => {
    setAnually((prev) => !prev);
  };

  return (
    <Section id="memberships">
      <SectionTitle>ÜYELİK PLANLARI"</SectionTitle>
      <SectionDescription>
        Fitness hedeflerinize ulaşmanıza yardımcı olacak çeşitli üyelik
        seçenekleri sunuyoruz, özellikle bireysel programlara vurgu yapıyoruz.
      </SectionDescription>
      <MembershipChoose>
        <MembershipChooseText>AYLIK ÖDEME</MembershipChooseText>
        <ToggleInput id="switch" type="checkbox" />
        <ToggleLabel
          htmlFor="switch"
          title="Toggle"
          onClick={annualyFunction}
        />
        <MembershipChooseText>YILLIK ÖDEME</MembershipChooseText>
      </MembershipChoose>
      <MembershipCards>
        {membershipCarDatas.map((membershipCard) => {
          return (
            <MembershipCard
              key={membershipCard.id}
              {...membershipCard}
              annualyFunction={annualy}
            />
          );
        })}
      </MembershipCards>
    </Section>
  );
};

export default Membership;
