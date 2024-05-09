export default function ShadowBars({ rotated }) {
  if (!rotated) {
    return (
      <div>
        <div className="h-[25px] bg-clutchBlue-400 shadow-top"></div>
        <div className="h-[25px]  bg-clutchBlue-300"></div>
        <div className="h-[25px] bg-clutchBlue-200 shadow-bottom"></div>
      </div>
    );
  } else if (rotated) {
    return (
      <div className="rotate-180">
        <div className="h-[25px] bg-clutchBlue-400 shadow-top"></div>
        <div className="h-[25px]  bg-clutchBlue-300"></div>
        <div className="h-[25px] bg-clutchBlue-200 shadow-bottom"></div>
      </div>
    );
  }
}
