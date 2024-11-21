import Link from "next/link";
import ContactButton from "../ContactButton";
import PreInstallContactButton from "../PreInstallContactButton";

export default function LinkButton({
  linkTo,
  linkText,
  icon,
  variant,
  isContact,
  isPreInstallForm,
}) {
  if (variant === "primary" && !isContact && !isPreInstallForm) {
    return (
      <Link
        href={linkTo}
        className="flex flex-row items-center gap-2 w-fit lg:text-xl leading-none pb-0.5 border-b lg:border-b-2 border-transparent text-white hover:text-clutchBlue-500 hover:border-clutchBlue-500 transition duration-300 font-medium"
      >
        {linkText}
        <div className="text-sm md:text-base">{icon}</div>
      </Link>
    );
  } else if (variant === "secondary" && !isContact && !isPreInstallForm) {
    return (
      <Link
        href={linkTo}
        className="flex flex-row items-center gap-2 w-fit lg:text-xl leading-none pb-0.5 border-b lg:border-b-2 border-transparent text-clutchBlue-500 hover:text-white hover:border-white transition duration-300 font-medium"
      >
        {linkText}
        <div className="text-sm md:text-base">{icon}</div>
      </Link>
    );
  } else if (variant === "black" && !isContact && !isPreInstallForm) {
    return (
      <Link
        href={linkTo}
        className="flex flex-row items-center gap-2 w-fit lg:text-xl leading-none pb-0.5 border-b lg:border-b-2 border-transparent hover:text-clutchBlue-500 text-black hover:border-clutchBlue-500 transition duration-300 font-medium"
      >
        {linkText}
        <div className="text-sm md:text-base">{icon}</div>
      </Link>
    );
  } else if (variant === "primary" && isContact) {
    return (
      <div className="flex flex-row items-center gap-2 w-fit lg:text-xl leading-none pb-0.5 border-b lg:border-b-2 border-transparent text-white hover:text-clutchBlue-500 hover:border-clutchBlue-500 transition duration-300 font-medium">
        <ContactButton buttonText={linkText} />
        <div className="text-sm md:text-base">{icon}</div>
      </div>
    );
  } else if (variant === "secondary" && isContact) {
    return (
      <div className="flex flex-row items-center gap-2 w-fit lg:text-xl leading-none pb-0.5 border-b lg:border-b-2 border-transparent text-clutchBlue-500 hover:text-white hover:border-white transition duration-300 font-medium">
        <ContactButton buttonText={linkText} />
        <div className="text-sm md:text-base">{icon}</div>
      </div>
    );
  } else if (variant === "black" && isContact) {
    return (
      <div className="flex flex-row items-center gap-2 w-fit lg:text-xl leading-none pb-0.5 border-b lg:border-b-2 border-transparent hover:text-clutchBlue-500 text-black hover:border-clutchBlue-500 transition duration-300 font-medium">
        <ContactButton buttonText={linkText} />
        <div className="text-sm md:text-base">{icon}</div>
      </div>
    );
  } else if (variant === "primary" && isPreInstallForm) {
    return (
      <div className="flex flex-row items-center gap-2 w-fit lg:text-xl leading-none pb-0.5 border-b lg:border-b-2 border-transparent text-white hover:text-clutchBlue-500 hover:border-clutchBlue-500 transition duration-300 font-medium">
        <PreInstallContactButton buttonText={linkText} />
        <div className="text-sm md:text-base">{icon}</div>
      </div>
    );
  } else if (variant === "secondary" && isPreInstallForm) {
    return (
      <div className="flex flex-row items-center gap-2 w-fit lg:text-xl leading-none pb-0.5 border-b lg:border-b-2 border-transparent text-clutchBlue-500 hover:text-white hover:border-white transition duration-300 font-medium">
        <PreInstallContactButton buttonText={linkText} />
        <div className="text-sm md:text-base">{icon}</div>
      </div>
    );
  } else if (variant === "black" && isPreInstallForm) {
    return (
      <div className="flex flex-row items-center gap-2 w-fit lg:text-xl leading-none pb-0.5 border-b lg:border-b-2 border-transparent text-clutchBlue-500 hover:text-white hover:border-white transition duration-300 font-medium">
        <PreInstallContactButton buttonText={linkText} />
        <div className="text-sm md:text-base">{icon}</div>
      </div>
    );
  } else {
    return <div>Invalid variant type</div>;
  }
}
