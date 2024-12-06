import { Link } from "react-router-dom";
import CardArticle from "../../components/CardArticle";
import NavbarBlack from "../../components/NavbarBlack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import FooterArticle from "../../components/FooterArticle";
import { useFetch } from "../../hooks/useFetch";

const ArticleHome = () => {
  const { data } = useFetch("/articles");

  return (
    <>
      <NavbarBlack>
        <div className="w-full px-[2rem] py-5 bg-gradient-to-b from-white to-[#FDE6D4]">
          <h1 className="text-3xl logo-font text-center">
            Rekomendasi Artikel
          </h1>
          <p className="text-[#404040] text-center text-2xl pt-1 pb-4 font-medium ">
            Yuk Lihat Berbagai Artikel Menarik Tentang Budaya Di Jawa Timur
          </p>
          <div className="w-full flex items-center justify-center gap-2 flex-wrap">
            {data &&
              data.slice(0, 3).map((item) => (
                <CardArticle
                  id={item.id}
                  key={item.id}
                  img={item.photo}
                  title={item.title}
                  update={item.updated_at}
                />
              ))}
          </div>
          <div className="flex justify-center my-6">
            <Link
              to="/article/list"
              className="btn bg-[#404040] text-white text-center px-7 text-lg hover:bg-white hover:text-[#404040] border-none"
            >
              Lihat Semua arikel
              <FontAwesomeIcon icon={faAngleRight} />
            </Link>
          </div>
          <FooterArticle />
        </div>
      </NavbarBlack>
    </>
  );
};
export default ArticleHome;
