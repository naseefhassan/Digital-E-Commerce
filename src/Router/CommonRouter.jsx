import { Route, Routes } from "react-router"
import Login from "../Component/Account/Login"
import SIgnup from "../Component/Account/SIgnup"
import AuthRoute from "../AuthGuard/AuthRoute"

function CommonRouter() {
  return (
   <>
   <Routes>
    <Route path="/" element={<AuthRoute/>}>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signup" element={<SIgnup/>}></Route>
    </Route>
   </Routes>
   </>
  )
}

export default CommonRouter