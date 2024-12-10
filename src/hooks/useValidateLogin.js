import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const useValidateLogin = () => {
const [id, setId] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token || token.length === 0) {
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
          return;
        }
        const id = tokenDecode.userID;
        setId(id);
      } catch (error) {
        console.error("Token decoding failed", error);
      }
    };

    validateToken();
  }, [setId]);

  return id
};
