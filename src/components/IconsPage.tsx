import { HomeIcon, Settings, History, Sun } from "lucide-react";
import StylesIcons from './IconsPage.module.css'

export const IconsPage = ()=>{

  return(
    <>
    <div className= {StylesIcons.IconsPage}>
    <div className={StylesIcons.buttonIconPage}> 
      <HomeIcon/>
     </div> 
    
     <div className={StylesIcons.buttonIconPage}>
      <History />
      </div>
      <div className={StylesIcons.buttonIconPage}>
        <Settings className={StylesIcons.icon}/>
      </div>
      <div className={StylesIcons.buttonIconPage}>
        <Sun />
      </div>
    </div>
    </>

  )
};