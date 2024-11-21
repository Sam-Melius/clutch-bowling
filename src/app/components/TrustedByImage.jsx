import Image from "next/image";

export default function TrustedByImage({ center }) {
  return (
    <a href={center.url} target="_blank">
      <Image
        src={center.imageUrl}
        alt={center.name}
        className="object-fit h-auto w-auto p-5 lg:p-10"
        height={center.height}
        width={center.width}
      />
    </a>
  );
}
