import { link } from "fs";
import Program1Image from "./assets/program1-img.png";
import Program2Image from "./assets/program2-img.png";

export type TProgramData = {
  id: number;
  img: string;
  title: string;
  details: string;
  imgStart?: boolean;
  line?: boolean;
  link: string;
};

export const programData = [
  {
    id: 1,
    img: Program1Image,
    title: "Kardiyo ve Kuvvet",
    details:
      "Kardiyovasküler egzersiz, ayrıca kardiyo veya aerobik egzersiz olarak da adlandırılır, kalp atış hızınızı artırır ve akciğerlerinizi normalden daha fazla çalıştırır. Kuvvet antrenmanı ise kas, güç ve dayanıklılığı artırmak için direnç kullanır. Aynı zamanda direnç antrenmanı olarak da adlandırılır.",
    imgStart: true,
    line: true,
    link: "kardiyo-ve-kuvvet",
  },
  {
    id: 2,
    img: Program2Image,
    title: "Akıl ve Beden",
    details:
      "Grup fitnessi, iyi bir egzersiz yapmanın yanı sıra farkındalık pratiği yapma fırsatı sunar, ancak çoğumuz ders salonunu tercih ederiz. Kuvvet antrenmanı, fitness rutininizin çoğunluğunu oluşturuyorsa, farkındalığı benimsemek imkansız gibi görünebilir. ",
    imgStart: false,
    line: true,
    link : "akil-ve-beden"
  },
  {
    id: 3,
    img: Program2Image,
    title: "Pilates",
    details:
      "Sağlık ve zindelik yolculuğunuzda pilates size eşlik ediyor. Zihin ve beden arasındaki bağlantıyı güçlendirirken kas tonusunu artırır. Esneklik, denge ve güç kazanmak için bu klasik egzersizi keşfedin ve vücudunuzun potansiyelini açığa çıkarın.",
    imgStart: false,
    line: true,
    link: "pilates",
  },
  {
    id: 3,
    img: Program2Image,
    title: "Zumba",
    details:
      "Dans etmeyi seviyor musunuz? O zaman Zumba tam size göre! Egzotik dans hareketleri ve Latin müziği eşliğinde keyifli bir egzersiz deneyimi yaşayın. Ritmik dans hareketleriyle kardiyo ve kas geliştirme egzersizlerini bir araya getiren Zumba, enerjinizi yükseltirken bedeninizi forma sokar.",
    imgStart: false,
    line: true,
    link: "zumba",
  },
  {
    id: 3,
    img: Program2Image,
    title: "Masaj ve Sauna",
    details:
      "Fitness yolculuğunuzda vücudunuza bakım yapın! Masaj ve sauna, kas yorgunluğunu giderir, stresi azaltır ve zihni sakinleştirir. Spor sonrası iyileşmeyi hızlandırın ve vücudunuzu şımartın.",
    imgStart: false,
    line: true,
    link: "masaj-ve-sauna",
  },
];
