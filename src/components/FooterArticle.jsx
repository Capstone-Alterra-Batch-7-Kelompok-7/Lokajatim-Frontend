import { Link } from "react-router-dom";
import lgo from "../assets/logo-crop.png";
const FooterArticle = () => {
  return (
    <>
      <footer className="footer bg-transparent text-base-content py-4" >
        <aside className="flex items-center">
          <img src={lgo} alt="logo" width={70} />
          <p className="logo-font text-4xl">LOKAJATIM</p>
        </aside>
        <nav className="text-base font-medium">
          <Link to={"/kebijakan"} target="_blank" className="">
            Kebijakan Provasi
          </Link>
          <Link to={"/faq"} target="_blank" className="">
            FAQ
          </Link>
          <p target="_blank" className="">
            2024 PT Lokajatim Persada, All right Reserved
          </p>
        </nav>
        <nav className="text-base font-medium">
          <Link to={"/kebijakan"} target="_blank" className="">
            Kontak & Alamat
          </Link>
          <Link to={"/faq"} target="_blank" className="">
            lokajatim@gmail.com
          </Link>
          <p target="_blank" className="">
            Jalan Raya Mastrip
          </p>
        </nav>
      </footer>
    </>
  );
};

export default FooterArticle;
