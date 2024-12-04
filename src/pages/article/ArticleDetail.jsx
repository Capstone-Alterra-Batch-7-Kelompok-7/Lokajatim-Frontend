import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BreadCrumbs from "../../components/BreadCrumbs";
import NavbarSearchBlack from "../../components/NavbarSearchBlack";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import CardArticle from "../../components/CardArticle";
import { useParams } from "react-router-dom";

const ArticleDetail = () => {
  const {id} = useParams()
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
    {
      id: 2,
      title: "Detail Article",
      href: `/article/${id}`,
    },
  ];
  return (
    <>
      <NavbarSearchBlack>
        <div className="w-full md:px-[2rem] px-4 pt-2 pb-7 article-gradient-bg ">
          <BreadCrumbs itemNav={itemNav} />
          {/* Article Start */}
          <div className="md:max-h-[80vh] w-full flex md:flex-row flex-col md:gap-[4rem] md:p-4 py-4">
            <img
              src="https://placehold.co/800"
              alt=""
              width={450}
              className=" rounded-xl md:w-[50%] w-full object-cover "
            />
            <div className="md:w-[45%] w-full">
              <div className="flex justify-between text-lg md:pt-0 py-4">
                <p className="md:text-base text-sm">Budaya</p>
                <FontAwesomeIcon
                  icon={faBookmark}
                  className="md:text-2xl text-lg"
                />
              </div>
              <h1 className="md:text-5xl text-3xl md:leading-[60px]">
                Eksplorasi Tari Reog Ponorogo: Dari Tradisi hingga Modernisasi
              </h1>
              <p className="mt-1">Kamis, 22 September 2023</p>
              <p className="md:text-sm text-xs md:mb-4 mb-1">
                Penulis : Khoiru Rizki Bani Adam
              </p>
              <p className="">
                Artikel ini mengupas perjalanan seni tradisional Tari Reog
                Ponorogo, mulai dari akar sejarah dan filosofinya hingga
                tantangan yang dihadapi di era modern. Reog Ponorogo dikenal
                sebagai simbol budaya Jawa Timur yang kaya akan makna,
                melibatkan cerita rakyat, ritual spiritual, dan sosok-sosok
                ikonis seperti Warok dan Singa Barong. Namun, modernisasi
                memunculkan tantangan bagi seni ini untuk tetap relevan di
                tengah perubahan selera masyarakat.
              </p>
              <div className="flex gap-2 pt-2">
                <div className="w-8 h-8 block rounded-full bg-gray-200"></div>
                <div className="w-8 h-8 block rounded-full bg-gray-200"></div>
                <div className="w-8 h-8 block rounded-full bg-gray-200"></div>
                <div className="w-8 h-8 block rounded-full bg-gray-200"></div>
              </div>
            </div>
          </div>
          <div className="w-full md:mt-20 mt-4">
            <p>
              Tari Reog Ponorogo telah lama menjadi simbol kebanggaan budaya
              Indonesia, khususnya di Jawa Timur. Dengan tarian megah, topeng
              besar khas "Singa Barong," dan alunan musik gamelan yang menggugah
              semangat, Reog Ponorogo menampilkan perpaduan seni tari, teater,
              dan musik yang kaya akan makna. Tradisi ini berakar kuat pada
              cerita-cerita rakyat, kekuatan spiritual, dan ritual keagamaan
              yang diwariskan dari generasi ke generasi.
            </p>
            <h2 className="md:text-2xl font-medium py-3">Sejarah & Filosofi</h2>
            <p>
              Sejarah Reog Ponorogo terkait erat dengan cerita rakyat tentang
              Raja Kelana Sewandana yang berjuang untuk meminang Dewi
              Songgolangit. Diiringi pasukan dengan karakter unik seperti Bujang
              Ganong dan Warok, cerita ini sarat akan pesan keberanian,
              kesetiaan, dan perjuangan. Filosofi Warok, tokoh yang sering
              terlihat dalam pertunjukan Reog, melambangkan sosok pelindung
              dengan kekuatan magis yang dihormati masyarakat. Reog Ponorogo
              juga mengandung nilai-nilai spiritual yang mendalam. Ritual
              sebelum pertunjukan, seperti pemberian sesaji dan doa, menegaskan
              bahwa seni ini bukan sekadar hiburan, melainkan bentuk komunikasi
              dengan leluhur dan entitas gaib.
            </p>
            <h2 className="md:text-2xl font-medium py-3">Sejarah & Filosofi</h2>
            <p>
              Sejarah Reog Ponorogo terkait erat dengan cerita rakyat tentang
              Raja Kelana Sewandana yang berjuang untuk meminang Dewi
              Songgolangit. Diiringi pasukan dengan karakter unik seperti Bujang
              Ganong dan Warok, cerita ini sarat akan pesan keberanian,
              kesetiaan, dan perjuangan. Filosofi Warok, tokoh yang sering
              terlihat dalam pertunjukan Reog, melambangkan sosok pelindung
              dengan kekuatan magis yang dihormati masyarakat. Reog Ponorogo
              juga mengandung nilai-nilai spiritual yang mendalam. Ritual
              sebelum pertunjukan, seperti pemberian sesaji dan doa, menegaskan
              bahwa seni ini bukan sekadar hiburan, melainkan bentuk komunikasi
              dengan leluhur dan entitas gaib.
            </p>
            <h2 className="md:text-2xl font-medium py-3">Sejarah & Filosofi</h2>
            <p>
              Sejarah Reog Ponorogo terkait erat dengan cerita rakyat tentang
              Raja Kelana Sewandana yang berjuang untuk meminang Dewi
              Songgolangit. Diiringi pasukan dengan karakter unik seperti Bujang
              Ganong dan Warok, cerita ini sarat akan pesan keberanian,
              kesetiaan, dan perjuangan. Filosofi Warok, tokoh yang sering
              terlihat dalam pertunjukan Reog, melambangkan sosok pelindung
              dengan kekuatan magis yang dihormati masyarakat. Reog Ponorogo
              juga mengandung nilai-nilai spiritual yang mendalam. Ritual
              sebelum pertunjukan, seperti pemberian sesaji dan doa, menegaskan
              bahwa seni ini bukan sekadar hiburan, melainkan bentuk komunikasi
              dengan leluhur dan entitas gaib.
            </p>
            <h2 className="md:text-2xl font-medium py-3">Sejarah & Filosofi</h2>
            <p>
              Sejarah Reog Ponorogo terkait erat dengan cerita rakyat tentang
              Raja Kelana Sewandana yang berjuang untuk meminang Dewi
              Songgolangit. Diiringi pasukan dengan karakter unik seperti Bujang
              Ganong dan Warok, cerita ini sarat akan pesan keberanian,
              kesetiaan, dan perjuangan. Filosofi Warok, tokoh yang sering
              terlihat dalam pertunjukan Reog, melambangkan sosok pelindung
              dengan kekuatan magis yang dihormati masyarakat. Reog Ponorogo
              juga mengandung nilai-nilai spiritual yang mendalam. Ritual
              sebelum pertunjukan, seperti pemberian sesaji dan doa, menegaskan
              bahwa seni ini bukan sekadar hiburan, melainkan bentuk komunikasi
              dengan leluhur dan entitas gaib.
            </p>
          </div>
          {/* Article End */}

          {/* Komentar Start */}
          <div className="w-full border border-black py-6">
            <h3 className="md:text-3xl font-light border-b px-4 border-black py-4">
              Komentar
            </h3>
            <div className=" px-4 ">
              <div className="flex justify-between border-b pt-4 pb-1 border-black">
                <p className="font-medium">0 Komentar</p>
                <p className="">Urut Berdasarkan</p>
              </div>
            </div>
            <div className=" px-4 py-5">
              <div className="border-b pb-4 border-black flex gap-4">
                <img
                  src="https://placehold.co/400"
                  alt=""
                  width={50}
                  className="rounded-full"
                />
                <input
                  type="text"
                  className="input input-bordered w-full rounded-none focus:outline-none text-black placeholder:text-black"
                  placeholder="Tambahkan Komentar..."
                />
              </div>
            </div>
          </div>
          {/* Komentar End */}
          <h2 className="text-2xl font-medium py-4">Artikel Terkait</h2>
          <div className="flex flex-wrap justify-between gap-4 md:gap-0">
            <CardArticle />
            <CardArticle />
            <CardArticle />
            <CardArticle />
          </div>
        </div>
      </NavbarSearchBlack>
    </>
  );
};

export default ArticleDetail;
