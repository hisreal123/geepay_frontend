import { useState, useEffect } from "react";
import { BiSun, BiMoon } from "react-icons/bi";

function UserDarkMode() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || null);

  const handleThemeSwitch = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div>
      <button onClick={handleThemeSwitch}>
        {theme === "dark" ? (
          <div className="w-[40px] h-[40px] grid place-items-center justify-center items-center rounded-full drop-shadow-lg bg-white  text-darkgrey">
            <BiSun className="text-black" />
          </div>
        ) : (
          <div className="w-[40px] h-[40px] grid place-items-center justify-center items-center rounded-full  bg-white text-darkgrey">
            <BiMoon />
          </div>
        )}
      </button>
    </div>
  );
}

export default UserDarkMode;
