import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { dateConvertion } from "../utils/dateConvertion";

const CardEvent = ({ id, img, price, title, time = '20/10/2023' }) => {
  return (
    <>
      <div className={`card card-compact bg-base-100 w-52 shadow-md`}>
        <figure className="relative">
          <img
            src={img}
            // src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Image"
            className={`h-36 max-h-36 w-full object-cover md:object-fill`}
          />
        </figure>
        <div className="card-body min-h-32 max-h-32">
          <div className="flex flex-col">
            <Link to={`/event/${id}`} className="text-base">
              {title}
            </Link>
            <p className="text-xl font-bold">Rp.{price}</p>
          </div>
          <div className=" pt-1 border-gray-400">
            <div className="flex justify-between gap-2 items-center text-xs">
              <div className="flex gap-2">
                <div className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faCalendar} className="" />
                  <p>{dateConvertion(time)}</p>
                </div>
                {/* <p className="">Fashion</p>
                <p className="badge badge-outline">Products</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardEvent;
