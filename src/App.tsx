import "./styles/theme.css";
import "./styles/global.css";
import { Container } from "./components/container";
import { Logo } from "./components/logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput";
import { Cycles } from "./components/Cycles";
import { Defaultbutton } from "./components/DefaultButton";
import { PlayCircleIcon } from "lucide-react";
import { Footer } from "./components/Footer";


export const App = () => {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form className="form" action="">
          <div className="formCollun">
            <DefaultInput
              label="Task"
              id="meuinput"
              type="text"
              placeHolder="Deescreva a tarefa"
            ></DefaultInput>
          </div>
        </form>
        <form action="" className="form">
          <div className="formRow">
            <p>Tarefa iniciada</p>
          </div>
        </form>
        <form action="" className="form">
          <div className="formRow">
           <Cycles/>
          </div>
        </form>
        <form action="" className="form">
          <div className="formRow">
           <Defaultbutton color= 'green' icon = {<PlayCircleIcon/>} />
          </div>
        </form>
      </Container>
      <Container> <Footer/> </Container>
    </>
  );
};
