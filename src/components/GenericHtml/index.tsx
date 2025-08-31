import { MainTemplate } from "../../templates/MainTemplate";
import style from './style.module.css'


type GenericHtmProps = {
  children: React.ReactNode;
};

export const GenericHtml = ({ children }: GenericHtmProps) => {
  return (
    <>
      <MainTemplate>
       <div className={style.genericHtml}>{children}</div> 
      </MainTemplate>
    </>
  );
};
