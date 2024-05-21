import {
  MembershipPrice,
  MembershipStyledCard,
  MembershipTier,
  MembershipCardPer,
  MembershipIncludesTitle,
  MembershipList,
  MembershipIncluded,
  MembershipNotIncluded,
  MembershipCardCTA,
  MembershipListContainer,
  PopularPricing,
} from "@/components/styles/MembershipCard.styled";

type TMembershipCardDatas = {
  id: number;
  tier: string;
  price: number;
  anuallyPrice: number;
  membershipIncludes: TMembershipIncludes[];
  isPremier?: boolean;
  annualyFunction: boolean;
};

type TMembershipIncludes = {
  id: number;
  membershipIncludes: string;
  included: boolean;
};

const MembershipCard = ({
  tier,
  price,
  membershipIncludes,
  isPremier,
  anuallyPrice,
  annualyFunction,
}: TMembershipCardDatas): JSX.Element => {
  return (
    <MembershipStyledCard>
      {isPremier && <PopularPricing>Popüler fiyatlandırma</PopularPricing>}
      <MembershipTier>{tier}</MembershipTier>
      <MembershipPrice>
        ${annualyFunction ? anuallyPrice : price}
        <MembershipCardPer>
          / {annualyFunction ? " year" : " mo"}
        </MembershipCardPer>
      </MembershipPrice>
      <MembershipIncludesTitle>Neler İçerir?</MembershipIncludesTitle>
      <MembershipListContainer>
        {membershipIncludes.map((include) => {
          return (
            <MembershipList key={include.id}>
              {include.included ? (
                <MembershipIncluded />
              ) : (
                <MembershipNotIncluded />
              )}
              {include.membershipIncludes}
            </MembershipList>
          );
        })}
      </MembershipListContainer>

      <MembershipCardCTA isPremier={isPremier}>
        Antrenmana Başla
      </MembershipCardCTA>
    </MembershipStyledCard>
  );
};

export default MembershipCard;
