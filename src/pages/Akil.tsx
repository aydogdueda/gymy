import Banner from "@/components/Banner/Banner";
import Membership from "@/components/Membership/Membership";
import React from "react";

function akil() {
  return (
    <>
      <h1>Akıl ve Beden</h1>
      <h3>
        Grup fitnessi, iyi bir egzersiz yapmanın yanı sıra farkındalık pratiği
        yapma fırsatı sunar, ancak çoğumuz ders salonunu tercih ederiz. Kuvvet
        antrenmanı, fitness rutininizin çoğunluğunu oluşturuyorsa, farkındalığı
        benimsemek imkansız gibi görünebilir. Kuvvet antrenmanı, sıkça egzersiz
        yapmanın bir yolunu bulmada bize meydan okurken, farkındalık pratiği
        genellikle arka planda kalır. Oysa ki, her iki alanın da denge içinde
        olması, sağlıklı bir beden ve zihin için kritik öneme sahiptir. Bu
        dengeyi sağlamak, hem vücudunuzu güçlendirmek hem de zihinsel olarak
        daha odaklı ve huzurlu olmanıza yardımcı olabilir.
      </h3>
      <div style={{ margin: 100 }}></div>
      <Banner />
      <p></p>
      <Membership />
    </>
  );
}

export default akil;
