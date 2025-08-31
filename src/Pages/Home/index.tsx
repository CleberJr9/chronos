import { Container } from "../../components/container"
import { CountDown } from "../../components/CountDown"
import { MainForm } from "../../components/MainForm"
import { MainTemplate } from "../../templates/MainTemplate"

 


 export const Home = ()=>{
  return(
    <>
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <MainForm/>
      </Container>
    </MainTemplate>
    </>
  )
 }