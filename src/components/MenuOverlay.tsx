import React from "react";
import NavLink from "./NavLink";
import { NavLinkType } from "./TopNav";

const MenuOverlay = ({ links }: {links: NavLinkType[]}) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink link={link} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;