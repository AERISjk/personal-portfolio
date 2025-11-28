"use client";
import StaggeredMenu from "./ui/StaggeredMenu";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About", ariaLabel: "Learn about us", link: "/about" },
  { label: "Services", ariaLabel: "View our services", link: "/provide" },
  { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
];

const socialItems = [
  {
    label: "TikTok",
    link: "https://www.tiktok.com/@aerisjk8?_r=1&_t=ZS-91dzxoPcRLk",
  },
  { label: "GitHub", link: "https://github.com/AERISjk" },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/chhengly-siek-5b475323b/",
  },
  { label: "Behance", link: "https://www.behance.net/chhenglyseak" },
  { label: "Dribble", link: "https://dribbble.com/HelloAeris123" },
];

export const Navbar = () => {
  return (
    <>
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#2563EB"
        openMenuButtonColor="#2563EB"
        changeMenuColorOnOpen={true}
        colors={["#5227FF", "#5227FF"]}
        accentColor="#2563EB"
        onMenuOpen={() => console.log("Menu opened")}
        onMenuClose={() => console.log("Menu closed")}
        isFixed={true}
      />
    </>
  );
};
