import "./styles/theme.css";
import "./styles/global.css";
import { Heading } from "./components/Heading";
import { TimerIcon } from "lucide-react";
import { IconsPage } from "./components/IconsPage";


export const App = () => {
  return (
    <>
    <IconsPage/>
      <Heading> history <button><TimerIcon/></button> 
      </Heading>
      
    </>
  );
};
