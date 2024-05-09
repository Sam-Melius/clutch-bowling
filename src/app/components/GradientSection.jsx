export default function GradientSection({ variant, size, isRotated }) {
  if (variant === "light" && size === "small" && !isRotated) {
    return <div className="light-gradient-container-small"></div>;
  } else if (variant === "light" && size === "small" && isRotated) {
    return <div className="light-gradient-container-small-rotated"></div>;
  } else if (variant === "light" && size === "small" && !isRotated) {
    return <div className="light-gradient-container-large"></div>;
  } else if (variant === "light" && size === "large" && isRotated) {
    return <div className="light-gradient-container-large-rotated"></div>;
  } else if (variant === "dark" && size === "small" && !isRotated) {
    return <div className="dark-gradient-container-small"></div>;
  } else if (variant === "dark" && size === "small" && isRotated) {
    return <div className="dark-gradient-container-small-rotated"></div>;
  } else if (variant === "dark" && size === "large" && !isRotated) {
    return <div className="dark-gradient-container-large"></div>;
  } else if (variant === "dark" && size === "large" && isRotated) {
    return <div className="dark-gradient-container-large-rotated"></div>;
  }
}
