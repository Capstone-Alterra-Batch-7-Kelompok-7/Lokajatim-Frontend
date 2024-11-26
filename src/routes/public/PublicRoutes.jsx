import { Route, Routes } from "react-router-dom"
import Register from "../../pages/Auth/Register";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
export default PublicRoutes