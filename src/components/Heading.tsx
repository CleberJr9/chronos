import stylesHead from "./Heading.module.css";


type HeadingProps = {
  children: React.ReactNode; 

}

export const Heading = (props: HeadingProps) => {
  console.log({ stylesHead });

  return (
    <div className={stylesHead.heading}>
      <h1 > {props.children}</h1>
    </div>
  );
};
