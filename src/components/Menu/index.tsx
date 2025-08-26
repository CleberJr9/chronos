import { HomeIcon, Settings, Sun,  HistoryIcon } from "lucide-react";
import StylesIcons from "./style.module.css";

export const Menu = () => {
  return (
   <>
   <nav className= {StylesIcons.iconsContainer}>

    <a className={StylesIcons.buttonIconPage} href="#">
      <HomeIcon/>
    </a>
    <a className={StylesIcons.buttonIconPage} href="#">
      <HistoryIcon/>
    </a>
    <a className={StylesIcons.buttonIconPage} href="#">
      <Settings/>
    </a>
    <a className={StylesIcons.buttonIconPage} href="#">
      <Sun/>
    </a>

      </nav>
   
   </>
  );
};
