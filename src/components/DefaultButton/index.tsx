import style from "./style.module.css";

type DefaultbuttonProps = {
  icon: React.ReactNode;
  color?: "green" | "red";
  className: string,
 }& React.ComponentProps<'button'>;

export const Defaultbutton = ({
  icon,
  className,
  color = "green",
  ... rest
}: DefaultbuttonProps) => {
  return (
    <>
      <button className={`${style[className]} ${style[color]}`} {...rest}>
        {icon}
      </button>
    </>
  );
};
