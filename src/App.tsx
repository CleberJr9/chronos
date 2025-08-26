import "./styles/theme.css";
import "./styles/global.css";
import { Container } from "./components/container";
import { Logo } from "./components/logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";

export const App = () => {
  return (
    <>
    <Container>
      <Logo/>
    </Container>
    
    <Container>
    <Menu/>
    </Container>
    <Container>
      <CountDown/>
    </Container>
 
   
    </>
  );
};
