import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container">
      <div className="flex justify-center text-xl">
        <FaFacebookF></FaFacebookF>
        <FaInstagram className="mx-4"></FaInstagram>
        <FaTwitter></FaTwitter>
      </div>
      <div className="flex justify-center my-3">
        <p className="underline underline-offset-4">Advertising</p>
        <p className="mx-4 underline underline-offset-4">Terms & Conditions</p>
        <p className="underline underline-offset-4">Privacy Policy</p>
      </div>
      <div className="text-center">
        <p>© Copyright 2023 — <span className="underline underline-offset-2">Powered by Tasty Tales</span></p>
      </div>
    </div>
  );
};

export default Footer;
