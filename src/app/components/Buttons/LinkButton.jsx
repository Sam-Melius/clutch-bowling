import Link from "next/link";

export default function LinkButton({ linkTo, linkText, icon, variant }) {
  if (variant === "primary") {
    return (
      <Link
        href={linkTo}
        className="flex flex-row items-center gap-2 w-fit lg:text-xl leading-none pb-0.5 border-b lg:border-b-2 border-transparent hover:text-clutchBlue-500 hover:border-clutchBlue-500 transition duration-300 font-medium"
      >
        {linkText}
        <div className="text-sm md:text-base">{icon}</div>
      </Link>
    );
  } else if (variant === "secondary") {
    return (
      <Link
        href={linkTo}
        className="flex flex-row items-center gap-2 w-fit lg:text-xl leading-none pb-0.5 border-b lg:border-b-2 border-transparent text-clutchBlue-500 hover:text-white hover:border-white transition duration-300 font-medium"
      >
        {linkText}
        <div className="text-sm md:text-base">{icon}</div>
      </Link>
    );
  } else {
    return <div>Invalid variant type</div>;
  }
}
