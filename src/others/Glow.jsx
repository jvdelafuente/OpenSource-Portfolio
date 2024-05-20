import { useState, useEffect } from "react";

const Glow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseInViewport, setIsMouseInViewport] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
      setIsMouseInViewport(true);
    };

    const handleMouseEnter = () => {
      setIsMouseInViewport(true);
    };

    const handleMouseLeave = () => {
      setIsMouseInViewport(false);
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const glowStyle = {
    position: "fixed",
    top: mousePosition.y,
    left: mousePosition.x,
    width: "30px",
    height: "30px",
    boxShadow: "0px 0px 10px #fff",
    backgroundColor: "#ffffff73",
    borderRadius: "50%",
    transform: "translate(-70%, 50%)",
    display: isMouseInViewport ? "block" : "none",
    zIndex: "999",
  };
  return <div style={glowStyle}></div>;
};

export default Glow;
