

import { Link } from "react-router";

type  RouterLinkProps ={
  to: string,
  children: React.ReactNode
}& React.ComponentProps<'a'>


export function RouterLink({to,children,... rest}: RouterLinkProps) {
  return <>
  
  <Link to={to} {...rest}>{children}</Link>
  </>;
}
