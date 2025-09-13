import {
  HomeIcon,
  Settings,
  HistoryIcon,
  MoonIcon,
  SunIcon,
} from "lucide-react";
import StylesIcons from "./style.module.css";
import { useState, useEffect } from "react";
import { RouterLink } from "../RouterLink";



type AvaliablesThemes = "dark" | "light"; // tipagem de opções do tema

export const Menu = () => {
  const [theme, settheme] = useState<AvaliablesThemes>(() => {
    const storageTheme =
      (localStorage.getItem("theme") as AvaliablesThemes) || "dark";
    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  }; // declarando a chave com o nome do valor do tema, o valor sera um icone referente ao tema

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault(); // nao vai seguir o RouterLink
    settheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark"; // usando o set state usei para definir o tema

      return nextTheme;
    });
  }
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme); // executa apenas quando o valor do theme muda
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <>
      <nav className={StylesIcons.iconsContainer}>
        <RouterLink
          className={StylesIcons.buttonIconPage}
          to="/"
          aria-label="início"
          title="Ir para o início"
        >
          <HomeIcon />
        </RouterLink>
        <RouterLink
          className={StylesIcons.buttonIconPage}
          to="/history"
          aria-label="histórico"
          title="Ir para o histórico"
        >
          <HistoryIcon />
        </RouterLink>
        <RouterLink
          className={StylesIcons.buttonIconPage}
          to="/settings"
          aria-label="Configurações"
          title="Ir para configurações"
        >
          <Settings />
        </RouterLink>
        <a
          onClick={(event) => handleThemeChange(event)}
          className={StylesIcons.buttonIconPage}
          href= ""
          aria-label="Tema"
          title="Mudar tema"
        >
          
          {nextThemeIcon[theme]}
        </a>
      </nav>
    </>
  );
};
