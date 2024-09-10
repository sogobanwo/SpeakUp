import React from "react";
import logo from "../../assets/app-logo.png";
import Image from "next/image";
import FacebookIcon from "../../assets/facebook-icon.png";
import InstagramIcon from "../../assets/instagram-icon.png";
import LinkedInIcon from "../../assets/linkedin-icon.png";
import TwitterIcon from "../../assets/twitter-icon.png";
import CopyrightIcon from "../../assets/copyright-icon.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-[#1F1F1F] h-32 rounded-xl my-4 py-4 px-24 flex justify-between items-center">
      <Image src={logo} width={180} height={34} alt={"logo"} />

      <div className="flex items-center gap-2">
        <Image src={CopyrightIcon} alt={"copyright"} />
        <p className="text-white text-lg font-normal">
          All Rights Reserved - SpeakUp 2024
        </p>
      </div>
      <div className="flex gap-3 items-center">
        <Image src={LinkedInIcon} alt={"linkedIn"} />
        <Image src={InstagramIcon} alt={"instagram"} />
        <Image src={FacebookIcon} alt={"facebook"} />
        <Image src={TwitterIcon} alt={"x"} />
      </div>
    </div>
  );
};

export default Footer;
