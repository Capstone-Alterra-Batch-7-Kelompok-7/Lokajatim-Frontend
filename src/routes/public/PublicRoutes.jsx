import { Route, Routes } from "react-router-dom"
import ForgotPass from "../../pages/Auth/forgotPass";
import VerifyCode from "../../pages/Auth/verifyCode";
import ResetPassword from "../../pages/Auth/resetPassword";


const PublicRoutes = () => {
  return (
    <Routes>
      
      {/* <Route path="/" element={<Register />} /> */}

      <Route path="/reset" element={<ResetPassword />} />
      <Route path="/aturulang" element={<ForgotPass />} />
      <Route path="/verify" element={<VerifyCode />} />
    </Routes>
  );
}
export default PublicRoutes