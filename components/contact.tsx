import React from "react";
import KontenContacts from "./konten_contacts";

export default function Contact() {
  return (
    <div
      className="bg-red-600 h-full w-full"
      id="contact"
      style={{ zIndex: 0 }}
    >
      <KontenContacts />
    </div>
  );
}
