import { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa";

const Light = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    setDarkMode(saved === "dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(prev => !prev)}
      className="p-2 rounded-xl bg-gray-200 dark:bg-gray-800 cursor-pointer text-black dark:text-white transition"
    >
      {darkMode ? <FiSun /> : <FaRegMoon />}
    </button>
  );
};

export default Light;