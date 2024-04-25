import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { desktopNavArray } from "./data/NavItems";
import Image from "next/image";
import clutchLogo from "../../../public/logos/clutch-icon-white.png";
import LinkButton from "./Buttons/LinkButton";

export default function TheHeader() {
  return (
    <header className="absolute top-0 flex flex-row w-full z-50">
      <nav className="flex flex-row w-full h-fit lg:items-center justify-between m-5">
        <Link href="/" className="lg:w-1/5 flex-grow">
          <Image
            src={clutchLogo}
            alt="Clutch Bowling"
            className="h-[75px] w-auto"
            priority
          />
        </Link>

        <div className="hidden lg:flex flex-row items-center justify-center gap-8 lg:w-3/5 max-w-fit">
          {desktopNavArray.map((item, index) => (
            <Link
              key={index}
              href={item.linkTo}
              className="hover:text-clutchBlue-300 hover:underline decoration-2 underline-offset-[6px]"
            >
              {item.text}
            </Link>
          ))}
        </div>

        <div
          href="/"
          className="hidden lg:flex flex-row items-center lg:w-1/5 flex-grow justify-end"
        >
          <LinkButton
            linkTo="/contact"
            buttonText="Contact Us"
            variation="primary"
          />
        </div>
        <MobileMenu />
      </nav>
    </header>
  );
}
