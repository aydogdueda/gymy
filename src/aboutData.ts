import theFounder from "./assets/the-founder.png";
import theProfessionals from "./assets/the-professionals.png";

export type TAboutData = {
  id: number;
  img: string;
  subTitle: string;
  title: string;
  details: string;
  imgStart?: boolean;
};

export const aboutData: TAboutData[] = [
  {
    id: 1,
    img: theFounder,
    subTitle: "BAŞLANGIÇ",
    title: "KURUCU",
    details:
      "Tüm kaslarınızı sarsacak yüksek enerjili, hızlı tempolu egzersizler bekleyin. Intrepide, 2012 yılında Jericho Bantiquete tarafından kuruldu ve şimdi üçüncü New York City lokasyonu yolda! Kurucumuz olarak, amacımız topluluk merkezli egzersizi kullanarak fitnessin odak noktasını 'ben'den 'biz'e kaydırmak ve motive edici, topluluk odaklı ve sorumluluk bilinci yüksek bir deneyim sunmaktır.",
    imgStart: true,
  },
  {
    id: 2,
    img: theProfessionals,
    subTitle: "BİZ KİMİZ?",
    title: "PROFESYONELLER",
    details:
      "Dürüst bir çözüm bulmak için, koşucu ve fitness endüstrisi veteranı Paul Toback, bir başka fitness endüstrisi veteranı olan Steven Lenz ile işbirliği yaptı. Paul, 10 yıldan fazla süredir kıdemli bir fitness yetkilisiydi. Başkan olarak, dünyanın en büyük halka açık spor salonu şirketi olan Jack Paul'un önceki başkanı ve CEO'su olarak, spor salonu müşterilerinin ihtiyaçlarını ve isteklerini anlar.",
  },
];
