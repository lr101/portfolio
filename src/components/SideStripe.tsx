"use client";

import React from "react";
import SocialIcons from "./SocialIcons";

const SideStripe = () => {
  return (
    <SocialIcons className="hidden lg:flex fixed left-4 top-1/2 -translate-y-1/2 flex-col items-center gap-6 bg-white/50 p-4 rounded-full shadow-lg"/>
  );
};

export default SideStripe;
