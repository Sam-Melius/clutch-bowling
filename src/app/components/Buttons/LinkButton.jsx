import Link from "next/link";

export default function LinkButton({ linkTo, linkText, icon }) {
  return (
    <Link
      href={linkTo}
      className="flex flex-row items-center gap-2 w-fit lg:text-xl leading-none pb-0.5 border-b lg:border-b-2 border-transparent hover:text-clutchBlue-500 hover:border-clutchBlue-500 transition duration-300"
    >
      {linkText}
      <div className="text-xs lg:text-base">{icon}</div>
    </Link>
  );
}
