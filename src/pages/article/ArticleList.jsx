import BreadCrumbs from "../../components/BreadCrumbs";
import CardArticle from "../../components/CardArticle";
import NavbarSearchBlack from "../../components/NavbarSearchBlack";

const ArticleList = () => {
  const itemNav = [
    {
      id: 1,
      title: "Beranda",
      href: "/",
    },
    {
      id: 2,
      title: "Artikel",
      href: "/article/list",
    },
  ];
  return (
    <>
      <NavbarSearchBlack>
        <div className="w-full md:p-[2rem] px-4 article-gradient-bg">
          <BreadCrumbs itemNav={itemNav} />
          <div className="flex justify-center gap-4 md:flex-row flex-col mt-4">
            <div className="md:w-[30%] w-full">
              <div className="md:w-60 w-full flex-col">
                <h2 className="bg-[#404040] text-white text-center py-2 rounded-t-2xl">
                  Filter
                </h2>
                <div className="bg-[#D9D9D9] text-black px-5 pt-2 pb-5 rounded-b-2xl">
                  <h2 className="text-2xl font-medium my-4">Waktu</h2>
                  <div className="flex md:flex-col flex-wrap gap-2">
                    <CheckBox label={"Hari Ini"} />
                    <CheckBox label={"Akhir Pekan ini"} />
                    <CheckBox label={"Minggu ini"} />
                    <CheckBox label={"Bulan ini"} />
                  </div>
                  <h2 className="text-2xl font-medium my-4">Waktu</h2>
                  <div className="flex md:flex-col flex-wrap gap-2">
                    <CheckBox label={"Hari Ini"} />
                    <CheckBox label={"Pameran"} />
                    <CheckBox label={"Workshop"} />
                    <CheckBox label={"Konser Musik"} />
                    <CheckBox label={"Teater"} />
                    <CheckBox label={"Festifal"} />
                    <CheckBox label={"Budaya"} />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-[70%] w-full">
              <h2 className="text-3xl font-medium ">Trending Artikel</h2>
              <div className="flex justify-between gap-2 flex-wrap my-4">
                <CardArticle id={1} />
                <CardArticle id={2} />
                <CardArticle id={2} />
              </div>
              <h2 className="text-3xl font-medium mb-2">Semua Artikel</h2>
              <div className="flex justify-between gap-2 flex-wrap my-4">
                <CardArticle id={2} />
                <CardArticle id={2} />
                <CardArticle id={2} />
              </div>
            </div>
          </div>
        </div>
      </NavbarSearchBlack>
    </>
  );
};

export default ArticleList;

const CheckBox = ({label}) => {
  return (
    <div className="form-control">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          className="checkbox checkbox-primary checkbox-xs bg-white rounded-none"
        />
        <span className="label-text">{label}</span>
      </label>
    </div>
  );
};
