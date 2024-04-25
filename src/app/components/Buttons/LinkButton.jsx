import Link from "next/link";

export default function LinkButton({ linkTo, buttonText, variation }) {
  if (variation === "primary") {
    return (
      <Link
        href={linkTo}
        className="bg-clutchBlue-900 border-2 border-transparent hover:bg-clutchBlue-700 transition duration-300 rounded-full w-fit px-6 py-3 font-bold"
      >
        {buttonText}
      </Link>
    );
  } else if (variation === "secondary") {
    return (
      <Link
        href={linkTo}
        className="bg-none hover:bg-clutchBlue-700 border-2 border-clutchBlue-100 hover:border-clutchBlue-700 transition duration-300 rounded-full w-fit px-6 py-3 font-bold"
      >
        {buttonText}
      </Link>
    );
  }
}
