import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { BsSun, BsFillMoonFill } from "react-icons/bs";
import { toggleBtn, sun, moon } from "./ToggleSwitch.module.css";

const ToggleSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={`${toggleBtn} ${theme === "dark" ? sun : moon} `}
      onClick={toggleTheme}>
      {theme === "dark" ? (
        <BsSun style={{ color: "#fcc238" }} />
      ) : (
        <BsFillMoonFill style={{ color: "#090d29" }} />
      )}
    </div>
  );
};

export default ToggleSwitch;
