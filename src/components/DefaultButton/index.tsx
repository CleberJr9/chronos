import style from "./style.module.css";

type DefaultbuttonProps = {
  icon: React.ReactNode;
  color?: "green" | "red";
};

export const Defaultbutton = ({
  icon,
  color = "green",
}: DefaultbuttonProps) => {
  return (
    <>
      <button className={`${style.defaultButton} ${style[color]}`}>
        {icon}
      </button>
    </>
  );
};
