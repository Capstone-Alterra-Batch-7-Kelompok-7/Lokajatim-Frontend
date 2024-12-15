import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { formatRupiah } from "../utils/rupiahFormater";

const CardProduct = ({ id, img, price, title }) => {
  return (
    <>
      <div className={`card card-compact bg-base-100 w-52 shadow-md`}>
        <figure className="relative">
          <img
            src={img}
            alt="Image"
            className={`h-36 max-h-36 w-full object-cover md:object-fill`}
          />
        </figure>
        <div className="card-body min-h-32 max-h-32">
          <div className="flex flex-col">
            <Link to={`/product/${id}`} className="text-base">
              {title}
            </Link>
            <p className="text-xl font-bold">{formatRupiah(price)}</p>
          </div>
          <div className=" pt-1 border-gray-400">
            <div className="flex justify-between gap-2 items-center text-xs">
              <div className="flex gap-2">
                <div className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                  <p>4.8</p>
                </div>
                <div className="flex items-center gap-1">| 80rb+terjual</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProduct;
