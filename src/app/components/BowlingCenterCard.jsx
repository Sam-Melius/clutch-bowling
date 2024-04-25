import Image from "next/image";

export default function BowlingCenterCard({ name, logo, url }) {
  return (
    <a href={url} target="_blank">
      <Image src={logo} alt={name} className="object-fit h-auto w-auto " />
    </a>
  );
}
