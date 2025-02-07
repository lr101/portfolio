import React from "react";

const socialLinks = [
  {
    href: "https://github.com/lr101",
    src: "https://cdn.simpleicons.org/github/black",
    alt: "GitHub",
  },
  {
    href: "https://linkedin.com/in/lukas-reim",
    src: "/icons/linkedin.svg",
    alt: "LinkedIn",
  },
  {
    href: "mailto:info@lr-projects.de",
    src: "https://cdn.simpleicons.org/protonmail/black",
    alt: "Email",
  },
];

const SocialIcons = ({ className }:{className: string } ) => {
  return (
    <div
      className={className}
    >
      {socialLinks.map((icon, index) => (
        <a key={index} href={icon.href} target="_blank" rel="noopener noreferrer">
          <img
            src={icon.src}
            alt={icon.alt}
            className="h-6 w-6 transition-transform hover:scale-110 fill"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
