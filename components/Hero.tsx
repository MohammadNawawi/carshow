"use client";
import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Temukan, Booking, atau Rental Mobil - Cepat dan Mudah
        </h1>
        <p className="hero__subtitle">
          Rampingkan pengalaman sewa mobil Anda dengan proses pemesanan kami
          yang mudah
        </p>
        <CustomButton
          title="Explore Mobil"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
          <div className="hero__image-overlay"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
