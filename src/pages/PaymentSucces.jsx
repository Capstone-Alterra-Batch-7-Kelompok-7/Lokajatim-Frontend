import NavbarSearchBrown from "../components/NavbarSearchBrown";
import paySuccess from "../assets/pay-success.png";
import { Link } from "react-router-dom";
const PaymentSucces = () => {
  return (
    <NavbarSearchBrown>
      <div className="min-h-[80vh] flex items-center justify-center flex-col gap-4">
        <img src={paySuccess} alt="image" width={281} />
        <div className="">
        <h1 className="font-bold text-2xl">Pembayaran Berhasil</h1>
        <p>Terimakasih telah berbelanja</p>
        </div>
        <Link to={'/products'} className="btn btn-secondary w-[243px] text-white">Belanja Lagi</Link>
      </div>
    </NavbarSearchBrown>
  );
};

export default PaymentSucces