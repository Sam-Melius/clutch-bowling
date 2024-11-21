export default function SocialIcon({ url, icon }) {
  return (
    <a href={url} target="_blank" className="hover-underline">
      {icon}
    </a>
  );
}
