import style from "./styles.module.css";

type DefaultInputProsps = {
  id: string;
  label?: string;
  placeHolder?: string;
} & React.ComponentProps<"input">;

export const DefaultInput = ({
  id,
  label,
  type,
  placeHolder,
}: DefaultInputProsps) => {
  return (
    <>
      {label && <label htmlFor={id}>{label}:</label>}
      <input
        className={style.input}
        type={type}
        id={id}
        placeholder={placeHolder}
      />
    </>
  );
};
