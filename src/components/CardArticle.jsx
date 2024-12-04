import {
  faBookmark as bookmarkRegular,
  faComment,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import {
  faBookmark as bookmarkSolid,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const CardArticle = ({id}) => {
  return (
    <>
      <div className={`card card-compact bg-base-100 md:w-64 w-full shadow-md`}>
        <figure className="relative">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className={`h-48 w-full object-cover md:object-fill`}
          />
          <div className="flex items-center gap-1 absolute top-2 right-2 text-xs bg-[#49454F] rounded-lg text-white p-1">
            <FontAwesomeIcon icon={faLocationDot} className="" />
            <p>Jakarta</p>
          </div>
        </figure>
        <div className="card-body h-[30%]">
          <div className="flex justify-between items-center gap-2">
            <h2 className="text-sm card-title text-primary">Seni Pertujukan</h2>
            <FontAwesomeIcon icon={bookmarkRegular} />
          </div>
          <Link to={`/article/${id}`} className="text-xl">
            Eksplorasi Tari Reog Ponorogo: Dari Tradisi hingga Modernisasi
          </Link>
          <div className="border-t pt-1 border-gray-400">
            <div className="flex justify-between gap-2 items-center text-xs">
              <p>15 November 2024</p>
              <div className="flex gap-2">
                <div className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faThumbsUp} />
                  <p>1.5K</p>
                </div>
                <div className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faComment} />
                  <p>200</p>
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

export default CardArticle;
