import { BrowserRouter } from "react-router-dom"
feat/forgotpass
import PublicRoutes from "./public/PublicRoutes"
=======
import PublicRoutes from "./public/publicRoutes"
main
const AppRouter = () => {
  return(
    <BrowserRouter>
    <PublicRoutes />
    </BrowserRouter>
  )
}

export default AppRouter