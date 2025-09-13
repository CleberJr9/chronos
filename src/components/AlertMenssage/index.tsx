
import { Bounce, ToastContainer } from "react-toastify";


type AlertMenssageProps = {
  children: React.ReactNode;
}

export  function AlertMenssage ({children}: AlertMenssageProps) {

  return(
    <>
    {children}
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={true}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={localStorage.getItem("theme")|| "dark"}
      transition={Bounce} 
      
    />
    </>
  )
}