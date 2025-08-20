import stylesHead from "./Heading.module.css";


type HeadingProps = {
  children: string; 
}

export const Heading = (props: HeadingProps) => {
  console.log({ stylesHead });

  return (
    <div>
      <h1 className={stylesHead.titulo}> {props.children}</h1>
    </div>
  );
};
