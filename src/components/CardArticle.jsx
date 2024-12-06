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

const CardArticle = ({ id, img, title, update }) => {
  return (
    <>
      <div className={`card card-compact bg-base-100 md:w-64 w-full shadow-md`}>
        <figure className="relative">
          <img
            src={img}
            alt="Image"
            className={`h-48 max-h-48 w-full object-cover md:object-fill`}
          />
        </figure>
        <div className="card-body min-h-32 max-h-32">
          <Link to={`/article/${id}`} className="text-xl">
            {title}
          </Link>
          <div className="border-t pt-1 border-gray-400">
            <div className="flex justify-between gap-2 items-center text-xs">
              <p>{update}</p>
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
