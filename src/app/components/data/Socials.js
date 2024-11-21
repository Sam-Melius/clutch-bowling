import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

const facebookIcon = <FaFacebook />;
const instagramIcon = <FaInstagram />;
const twitterIcon = <FaTwitter />;
const linkedInIcon = <FaLinkedin />;

export const socialsArray = [
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/company/clutchbowling/",
    icon: linkedInIcon,
  },
  {
    platform: "Facebook",
    url: "https://www.facebook.com/clutchbowling",
    icon: facebookIcon,
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/ClutchBowling",
    icon: twitterIcon,
  },
  {
    platform: "Instagram",
    url: "https://www.instagram.com/clutchbowling/",
    icon: instagramIcon,
  },
];
