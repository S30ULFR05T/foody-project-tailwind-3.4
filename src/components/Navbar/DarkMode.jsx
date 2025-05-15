import React from "react";
import darkPng from "../../assets/dark-mode.png";
import lightPng from "../../assets/light-mode.png";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  React.useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="relative w-12 flex items-center justify-center">
      <img
        src={darkPng}
        alt="Switch to Dark Mode"
        onClick={toggleTheme}
        className={`absolute w-10 cursor-pointer transition-opacity duration-300 ${
          theme === "dark" ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      <img
        src={lightPng}
        alt="Switch to Light Mode"
        onClick={toggleTheme}
        className={`absolute w-10 cursor-pointer transition-opacity duration-300 ${
          theme === "light" ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
    </div>
  );
};

export default DarkMode;
