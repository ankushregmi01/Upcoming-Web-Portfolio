import React, { useEffect, useState } from "react";

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <div
      className="w-full h-[100vh] flex items-center justify-center"
      style={{
        position: "relative",
        zIndex: 1,
      }}
    >
          <img
      src="/devops_logo.png"
      alt="DevOps Logo"
      className="w-[500px] max-w-[90%] h-auto"
      style={{
        objectFit: "contain",
        marginTop: "40px",
        height: "550px"
      }}
      />
    </div>
  );
};

export default ComputersCanvas;
