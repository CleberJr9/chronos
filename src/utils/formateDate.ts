import { format } from "date-fns";


export function formateDate (timesTemp: number){

  const date = new Date(timesTemp);
  
  return format(date,'dd/MM/yyyy HH:mm')
  
}