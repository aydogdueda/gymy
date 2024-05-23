import Banner from "@/components/Banner/Banner";
import Membership from "@/components/Membership/Membership";
import React from "react";

function Zumba() {
  return (
    <>
      <h1>Zumba</h1>
      <h3>
        Dans etmeyi seviyor musunuz? O zaman Zumba tam size göre! Egzotik dans
        hareketleri ve Latin müziği eşliğinde keyifli bir egzersiz deneyimi
        yaşayın. Ritmik dans hareketleriyle kardiyo ve kas geliştirme
        egzersizlerini bir araya getiren Zumba, enerjinizi yükseltirken
        bedeninizi forma sokar.
      </h3>
      <div style={{ margin: 100 }}></div>
      <Banner />
      <p></p>
      <Membership />
    </>
  );
}

export default Zumba;
