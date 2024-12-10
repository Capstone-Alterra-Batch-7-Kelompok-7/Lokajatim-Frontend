import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import NavbarSearchBrown from "../../components/NavbarSearchBrown";
import { useFetch } from "../../hooks/useFetch";
import { Loading } from "../../components/Loading";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const ArticleDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useFetch(`/articles/${id}`);
  return (
    <>
      {isLoading && <Loading />}
      <NavbarSearchBrown>
        <div className="md:px-[2rem] p-4 bg-[#FAFBFE] relative">
          {/* BreadCrumbs */}
          <div className=" bg-white">
            <div className="breadcrumbs text-sm">
              <ul>
                <li>
                  <Link to={"/homepage"}>Beranda</Link>
                </li>
                <li>
                  <Link to={"/article"}>Artikel</Link>
                </li>
                <li className="font-medium">Detail Artikel</li>
              </ul>
            </div>
          </div>

          <h1 className="text-2xl font-medium">{data?.title}</h1>
          <div className="flex justify-center flex-col gap-4 mt-4 md:px-[2rem] p-4">
            <img
              src={data?.photo}
              alt="article photo"
              className="max-h-[400px] w-full object-cover"
            />
            {/* <div className="max-w-[1096px] text-center mx-auto">
              <p>{data?.content}</p>
            </div> */}
            <div
              className="max-w-[1096px] text-left mx-auto"
              dangerouslySetInnerHTML={{ __html: data?.content }}
            />
          </div>
          <div className="flex max-w-[1096px] mx-auto rounded-2xl justify-between items-center p-4 bg-[#D9D9D94D]">
            <p className="text-xl font-bold">Halaman:</p>
            <div className="join flex gap-2">
              <button className="join-item btn btn-secondary text-white btn-activ rounded-md  ">
                1
              </button>
              <button className="join-item btn btn-secondary bg-white ">
                2
              </button>
              <button className="join-item btn btn-secondary bg-white ">
                <FontAwesomeIcon icon={faAngleRight} />
              </button>
            </div>
          </div>

          <div className="flex max-w-[1096px] mx-auto rounded-2xl flex-col p-4 bg-[#D9D9D94D] mt-7">
            <p className="text-xl font-bold">Komentar</p>
            <textarea
              placeholder="Tulis komentar"
              className="textarea textarea-bordered w-full min-h-[114px]"
            ></textarea>
            <button className="btn bg-[#ED7D311A] border border-orange-500 text-secondary my-5 self-end ">
              Kirim
            </button>
          </div>
        </div>
        <Footer />
      </NavbarSearchBrown>
    </>
  );
};

export default ArticleDetail;
