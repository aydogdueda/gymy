import Banner from "../components/Banner/Banner";
import Membership from "../components/Membership/Membership";
import React from "react";

function Pilates() {
  return (
    <>
      <h1>Pilates</h1>
      <h3>
        Sağlık ve zindelik yolculuğunuzda pilates size eşlik ediyor. Zihin ve
        beden arasındaki bağlantıyı güçlendirirken kas tonusunu artırır.
        Esneklik, denge ve güç kazanmak için bu klasik egzersizi keşfedin ve
        vücudunuzun potansiyelini açığa çıkarın.
      </h3>
      <div style={{ margin: 100 }}></div>
      <Banner />
      <p></p>
      <Membership />
    </>
  );
}

export default Pilates;
