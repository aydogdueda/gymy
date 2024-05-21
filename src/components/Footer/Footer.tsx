import {
  FooterDescription,
  FooterLogo,
  FooterSections,
  FooterSection,
  FooterCompanyDetails,
  FooterSectionLink,
  FooterLink,
  FooterList,
  FooterSectionsTitle,
  FooterLine,
  Copyright,
  LegalLinks,
  LegalLink,
} from "@/components/styles/Footer.styled";
import { Section } from "@/components/styles/Sections.styled";

const Footer = (): JSX.Element => {
  const year = new Date().getFullYear();

  return (
    <Section>
      <FooterSection>
        <FooterCompanyDetails>
          <FooterLogo>INTREPIDE</FooterLogo>
          <FooterDescription>
            Enerjinizi artırın, stresinizi azaltın ve formda kalın! Spor
            salonumuzda sizleri bekliyoruz.
          </FooterDescription>
        </FooterCompanyDetails>
        <FooterSections>
          <FooterSectionLink>
            <FooterSectionsTitle>Firma</FooterSectionsTitle>
            <FooterList>
              <FooterLink
                target="__blank"
                rel="noopener noreferrer"
                href="https://jerichobantiquete.netlify.app/"
              >
                Hakkımızda
              </FooterLink>
            </FooterList>
            <FooterList>
              <FooterLink href="#0">Kariyer</FooterLink>
            </FooterList>
            <FooterList>
              <FooterLink href="mailto:jerichobantiquete@gmail.com">
                İletişime Geçin
              </FooterLink>
            </FooterList>
          </FooterSectionLink>
          <FooterSectionLink>
            <FooterSectionsTitle>Üyelik</FooterSectionsTitle>
            <FooterList>
              <FooterLink href="#0">Eğitim</FooterLink>
            </FooterList>
            <FooterList>
              <FooterLink href="#0">Üye Politikaları</FooterLink>
            </FooterList>
            <FooterList>
              <FooterLink href="#0">Kişisel Eğitim</FooterLink>
            </FooterList>
          </FooterSectionLink>
          <FooterSectionLink>
            <FooterSectionsTitle>Gym</FooterSectionsTitle>
            <FooterList>
              <FooterLink href="#0">Tüm salonları görüntüle</FooterLink>
            </FooterList>
            <FooterList>
              <FooterLink href="#0">Spor Salonu Bul</FooterLink>
            </FooterList>
            <FooterList>
              <FooterLink href="#0">Konum</FooterLink>
            </FooterList>
          </FooterSectionLink>
        </FooterSections>
      </FooterSection>
      <FooterLine />
      <Copyright>© {year} Tüm Hakları Saklıdır</Copyright>

      <LegalLinks>
        <LegalLink>Gizlilik Politikası</LegalLink>
        <LegalLink>Kullanım Koşulları</LegalLink>
        <LegalLink>Kurumsal Sosyal Sorumluluk</LegalLink>
        <LegalLink>Yasal</LegalLink>
      </LegalLinks>
    </Section>
  );
};

export default Footer;
