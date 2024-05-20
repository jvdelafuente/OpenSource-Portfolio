import "./ScrollInfiniteHorizontal.css";
import { useEffect } from "react";

export default function ScrollInfiniteHorizontal() {
  useEffect(() => {
    const handleWindowResize = () => {
      const scrollSectionWidth =
        document.querySelector(".scroll-section").clientWidth;
      document.documentElement.style.setProperty(
        "--scroll-section-width",
        `${scrollSectionWidth}px`
      );
    };

    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return (
    <div className="horizontal-scroll">
      <div className="scroll-section">
        <a
          className="scroll-infinite-text"
          href="https://www.linkedin.com/in/javiergarciadelafuente/"
          target="_blank"
        >
          <h1>https://www.linkedin.com/in/javiergarciadelafuente/</h1>
        </a>
      </div>
      <div className="scroll-section" aria-hidden="true">
        <a
          className="scroll-infinite-text"
          href="https://www.linkedin.com/in/javiergarciadelafuente/"
          target="_blank"
        >
          <h1>https://www.linkedin.com/in/javiergarciadelafuente/</h1>
        </a>
      </div>
    </div>
  );
}
