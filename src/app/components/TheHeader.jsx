import Link from "next/link";
import Image from "next/image";
import clutchLogo from "../../../public/logos/clutch-icon-white.png";
import Menu from "./Menu";

export default function TheHeader() {
  return (
    <header className="absolute top-0 flex flex-row w-full z-50">
      <nav className="w-full m-5 flex flex-row justify-between items-start">
        <Link href="/">
          <Image
            src={clutchLogo}
            alt="Clutch Bowling"
            className="w-[75px] h-auto"
            priority
          />
        </Link>
        <Menu />
      </nav>
    </header>
  );
}
