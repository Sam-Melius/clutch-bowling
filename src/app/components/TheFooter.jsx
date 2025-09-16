import Link from "next/link";
import { footerNavLinks } from "./data/NavItems";
import SocialIcon from "./Socials/SocialIcon";
import { socialsArray } from "./data/Socials";

export default function TheFooter() {
  return (
    <footer
      id="footer"
      className="px-10 py-20 pb-5 lg:py-16 lg:pb-5 w-full h-fit bg-primaryDark"
    >
      <div className="grid gap-x-10 gap-y-20 grid-cols-2 lg:grid-cols-4">
        {footerNavLinks.map((item, index) => (
          <Link
            key={index}
            href={item.linkTo}
            className="col-span-1 w-fit font-medium hover-underline"
          >
            {item.text}
          </Link>
        ))}

        <div className="flex flex-col gap-2">
          <p className="font-medium">Follow Us</p>
          <ul className="flex flex-row gap-4 text-xl">
            {socialsArray.map((item, index) => (
              <li key={index}>
                <SocialIcon url={item.url} icon={item.icon} />
              </li>
            ))}
          </ul>
        </div>

        {/* <div className="flex flex-col gap-1">
          <p className="font-medium">Physical Address</p>
          <a
            href="https://maps.app.goo.gl/zoq8vx7NMeZvhW6D7"
            target="_blank"
            className="hover-underline"
          >
            370 Belmont St NE <br />
            Salem, OR 97301
          </a>
        </div> */}

        <div className="flex flex-col gap-1">
          <p className="font-medium">Phone</p>
          <a
            href="tel:+15039675228"
            target="_blank"
            className="hover-underline"
          >
            888-556-4555
          </a>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-medium">Email</p>
          <a
            href="mailto:sales@clutchbowling.com"
            target="_blank"
            className="hover-underline flex-wrap"
          >
            sales@clutchbowling.com
          </a>
        </div>
        <div className="flex flex-col gap-y-4 lg:flex-row justify-between text-xs text-gray-400 col-span-full">
          <Link href="/terms" className="font-medium hover-underline">
            Terms & Conditions
          </Link>
          <p>© 2024 Clutch Bowling. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
