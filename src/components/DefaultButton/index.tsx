import style from "./style.module.css";

type DefaultbuttonProps = {
  icon: React.ReactNode;
  color?: "green" | "red";
 }& React.ComponentProps<'button'>;

export const Defaultbutton = ({
  icon,
  color = "green",
  ... rest
}: DefaultbuttonProps) => {
  return (
    <>
      <button className={`${style.defaultButton} ${style[color]}`} {...rest}>
        {icon}
      </button>
    </>
  );
};
