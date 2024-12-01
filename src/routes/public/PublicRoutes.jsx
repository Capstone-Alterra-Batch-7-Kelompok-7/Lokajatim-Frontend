import { Route, Routes } from "react-router-dom"
feat/forgotpass
import ForgotPass from "../../pages/Auth/forgotPass";
import VerifyCode from "../../pages/Auth/verifyCode";
import ResetPassword from "../../pages/Auth/resetPassword";


import Register from "../../pages/Auth/Register";
 main

const PublicRoutes = () => {
  return (
    <Routes>
feat/forgotpass
      <Route path="/reset" element={<ResetPassword />} />
      <Route path="/aturulang" element={<ForgotPass />} />
      <Route path="/verify" element={<VerifyCode />} />

      <Route path="/register" element={<Register />} />
main
    </Routes>
  );
}
export default PublicRoutes