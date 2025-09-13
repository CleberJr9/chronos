import stylesHead from "./style.module.css";

type HeadingProps = {
  children: React.ReactNode;
};

export const Heading = (props: HeadingProps) => {
  const nome : string = "Cleber";
  console.log({nome})

  return (
    <div className={stylesHead.heading}>
      <h1 className={stylesHead.heading}> {props.children}</h1>
    </div>
  );
};
