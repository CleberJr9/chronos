import { Container } from "../../components/container";
import { Heading } from "../../components/heading";
import { Settings } from "../../components/Settings";
import { MainTemplate } from "../../templates/MainTemplate";

export function SettingsPage() {
  return (
    <>
      <MainTemplate>
        <Container>
          <Heading>Configurações</Heading>
        </Container>
        <Container>
          <Settings/>
        </Container>
      </MainTemplate>
    </>
  );
}
