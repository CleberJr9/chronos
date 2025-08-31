import { Container } from "../../components/container";
import { Footer } from "../../components/Footer";
import { Logo } from "../../components/logo";
import { Menu } from "../../components/Menu";
type MainTemplateProps = {
  children: React.ReactNode;
};

export const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>
      <Container>{children}</Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
};
