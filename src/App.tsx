import "./styles/theme.css";
import "./styles/global.css";
import { Container } from "./components/container";
import { Logo } from "./components/logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { CirclePlayIcon} from "lucide-react";
import { DefaultInput } from "./components/DefaultInput";

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
    <Container>
      <form className='form'action="">
        <div className="formCollun">
          <DefaultInput label="Task" id = "meuinput" type="text" placeHolder="Deescreva a tarefa"></DefaultInput>
          
        </div>
      </form>
      <form action="" className="form">
      <div className="formRow">
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      </form>
      <form action="" className="form">
      <div className="formRow">
        <p>Ciclos</p>
        <p>0 0 0 0</p>
      </div>
      </form>
      <form action="" className="form">
      <div className="formRow">
        <button> <CirclePlayIcon className="icon"/> </button>
      </div>
      </form>
    </Container>
 
   
    </>
  );
};
