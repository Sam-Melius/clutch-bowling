"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  return (
    <nav className={`capitalize text-sm md:text-base flex w-full`}>
      <ul className="flex flex-wrap">
        <li>
          <Link
            href="/"
            className="hover:text-clutchBlue-400 transition duration-200"
          >
            Home{" "}
          </Link>
        </li>
        {pathSegments.map((segment, index) => (
          <li key={index}>
            <span> / </span>
            <Link
              href={`/${pathSegments.slice(0, index + 1).join("/")}`}
              className="hover:text-clutchBlue-400 transition duration-200"
            >
              {segment.replace(/-/g, " ")}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
