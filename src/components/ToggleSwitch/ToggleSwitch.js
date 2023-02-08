import { useTheme } from "next-themes";
import { BsSun, BsFillMoonFill } from "react-icons/bs";
import { toggleBtn, sun, moon } from "./ToggleSwitch.module.css";

const ToggleSwitch = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

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
