
type DefaultInputProsps = {
  id: string; 
  label?: string;
  placeHolder?: string;

} & React.ComponentProps <'input'>;

export const DefaultInput = ({id,label,type, placeHolder}: DefaultInputProsps)=>{
  return(
    <>
   {label && <label htmlFor={id}>{label}:</label>}
      <input type={type} id= {id} placeholder= {placeHolder} />   
    </>

  )
};