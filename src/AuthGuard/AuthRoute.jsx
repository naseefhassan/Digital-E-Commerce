import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

function AuthRoute() {
  const naviagte = useNavigate();
  const LocalJwt = localStorage.getItem("Jwt");
  useEffect(() => {
    if (LocalJwt) {
      naviagte("/");
    }
  }, [naviagte,LocalJwt]);
  return <>
  {!LocalJwt && <Outlet/>}
  </>;
}

export default AuthRoute;
