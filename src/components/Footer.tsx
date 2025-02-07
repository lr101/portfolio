import React from "react";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-12 py-2">
        <div className="flex flex-col place-items-start">
            <span>LR-Projects</span>
            <p className="text-slate-600">All rights reserved.</p>
        </div>
        <SocialIcons className="flex flex-row items-center gap-6  p-4 rounded-full"/>
      </div>
    </footer>
  );
};

export default Footer;