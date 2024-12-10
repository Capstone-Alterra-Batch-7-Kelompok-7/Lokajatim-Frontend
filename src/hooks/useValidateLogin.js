import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loading } from "./components/Loading";
import { jwtDecode } from "jwt-decode";
// import { useUserStore } from "./store/userStore";

export const useValidateLogin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null sebagai nilai awal
  // const {setId} = useUserStore();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token || token.length === 0) {
      setIsAuthenticated(false);
      return;
    }

    const validateToken = async () => {
      try {
        const tokenDecode = jwtDecode(token);
        const currentTime = Math.floor(Date.now() / 1000); // waktu sekarang dalam detik
        if (
          !tokenDecode ||
          !tokenDecode.role ||
          tokenDecode.exp < currentTime
        ) {
          localStorage.clear();
          setIsAuthenticated(false);
          return;
        }
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Token decoding failed", error);
        setIsAuthenticated(false);
      }
    };

    validateToken();
  }, []);

  if (isAuthenticated === null) {
    return (
      <div>
        <Loading />
      </div>
    ); // Indikator loading
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
