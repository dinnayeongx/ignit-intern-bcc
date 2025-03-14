import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { verified } from "./auth.service";

const VerifyPage = ({onVerify}) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const token = urlParams.get("token");

    if (!token) {
      console.log("Token tidak ditemukan.");
      return;
    }

    verified((status, res) => {
      if (status) {
        onVerify();
        console.log("Verifikasi berhasil:", res);
        setTimeout(() => navigate("/login"), 3000); 
      } else {
        console.log("Verifikasi gagal:", res);
      }
    });
  }, [navigate, location]);

  return null;

};

export default VerifyPage;
