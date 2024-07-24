import React from "react";
import emi from "../assets/emi.png";
import { useEffect,useState } from "react";
const Header = ({children}) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme")||"light");

  useEffect(()=>{
    localStorage.setItem("theme",theme)
    document.documentElement.removeAttribute("class")
    document.documentElement.classList.add(theme)

  },[theme])
  
  return (
    <header className="">
      <div className="logo">
        <img src={emi} alt="emi" />
        <h1 >{children}</h1>
      </div>
      <div className="themeSelector">
        <span onClick={()=>setTheme("light")} className={theme==="light" ? "light activeTheme":"light"}></span>
        <span onClick={()=>setTheme("medium")} className={theme==="medium" ? "medium activeTheme":"medium"}></span>
        <span onClick={()=>setTheme("dark")} className={theme==="dark" ? "dark activeTheme":"dark"}></span>
        <span onClick={()=>setTheme("gOne")} className={theme==="gOne" ? "gOne activeTheme":"gOne"}></span>
      </div>
      
    </header>
  );
};

export default Header;
