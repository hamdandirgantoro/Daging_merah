import React from "react";
import Image from "next/image";
import FooterWeb from "./footer";

export default function Contact() {
  return (
    <div
      className="bg-red-100 h-screen w-screen absolute"
      id="contact"
      style={{ zIndex: 0 }}
    >
      <FooterWeb />
    </div>
  );
}
