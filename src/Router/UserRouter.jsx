import { Route, Routes } from "react-router";
import PrivateRoute from "../AuthGuard/PrivateRoute";
import Home from "../Component/User/Home";

function UserRouter() {
  return (
    <Routes>
      <Route path="/*" element={<PrivateRoute />}>
        <Route path="/*" element={<Home/>}></Route>
      </Route>
    </Routes>
  );
}

export default UserRouter;
