import { BrowserRouter } from "react-router-dom"
import PublicRoutes from "./public/publicRoutes"

const AppRouter = () => {
  return(
    <BrowserRouter>
    <PublicRoutes />
    </BrowserRouter>
  )
}

export default AppRouter