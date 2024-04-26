import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import { navLinksArray } from "./data/NavItems";

export default function TheFooter() {
  return (
    <footer id="footer" className="p-5 lg:p-10 lg:pb-5 w-full h-fit">
      <div className="flex flex-col gap-10">
        <div className="grid gap-5 lg:gap-y-10 grid-cols-2 lg:grid-cols-5">
          {navLinksArray.map((item, index) => (
            <Link
              key={index}
              href={item.linkTo}
              className="col-span-1 w-fit font-medium hover:underline underline-offset-4 hover:text-clutchBlue-500"
            >
              {item.text}
            </Link>
          ))}
          <div className="flex flex-col gap-2">
            <p className="font-medium">Follow Us</p>
            <div className="flex flex-row gap-4 text-xl">
              <a
                href="https://www.linkedin.com/company/clutchbowling/"
                target="_blank"
                className="hover:text-clutchBlue-500"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com/clutchbowling"
                target="_blank"
                className="hover:text-clutchBlue-500"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com/ClutchBowling"
                target="_blank"
                className="hover:text-clutchBlue-500"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/clutchbowling/"
                target="_blank"
                className="hover:text-clutchBlue-500"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-medium">Physical Address</p>
            <a
              href="https://maps.app.goo.gl/zoq8vx7NMeZvhW6D7"
              target="_blank"
              className="hover:underline underline-offset-4 hover:text-clutchBlue-500"
            >
              370 Belmont St NE <br />
              Salem, OR 97301
            </a>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-medium">Phone</p>
            <a
              href="tel:+15039675228"
              target="_blank"
              className="hover:underline underline-offset-4 hover:text-clutchBlue-500"
            >
              503-779-7796
            </a>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-medium">Email</p>
            <a
              href="mailto:sales@clutchbowling.com"
              target="_blank"
              className="hover:underline underline-offset-4 hover:text-clutchBlue-500"
            >
              sales@clutchbowling.com
            </a>
          </div>
          <p className="text-xs text-gray-400">© 2024 Clutch Bowling</p>
        </div>
      </div>
    </footer>
  );
}
