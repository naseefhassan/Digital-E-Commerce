import { Route, Routes } from "react-router"
import Login from "../Component/Account/Login"
import SIgnup from "../Component/Account/SIgnup"

function CommonRouter() {
  return (
   <>
   <Routes>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signup" element={<SIgnup/>}></Route>
   </Routes>
   </>
  )
}

export default CommonRouter