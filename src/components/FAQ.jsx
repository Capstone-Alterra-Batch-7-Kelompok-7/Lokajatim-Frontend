import React from "react";

const FAQ = () => {
  return (
    <div className="bg-white w-full max-w-[1440px] mx-auto mt-16 px-10 py-8">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold mb-2">
          Ada Pertanyaan? Semua Jawaban Ada di Sini!
        </h2>
        <p className="text-gray-600">
          Dapatkan jawaban instan untuk semua hal yang perlu kamu ketahui tentang Lokajatim.
        </p>
      </div>
      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* FAQ Section */}
        <div className="space-y-4">
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-lg font-medium">
              Apa itu Lokajatim?
            </div>
            <div className="collapse-content">
              <p>Lokajatim adalah platform untuk...</p>
            </div>
          </div>

          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-lg font-medium">
              Apa saja yang bisa saya temukan di Lokajatim?
            </div>
            <div className="collapse-content">
              <p>
              Di Lokajatim, Anda bisa menemukan berbagai hal yang merepresentasikan keunikan dan kekayaan budaya Jawa Timur. Mulai dari produk UMKM seperti kerajinan tangan, batik, makanan khas, hingga fashion lokal yang berkualitas. Anda juga dapat menjelajahi event-event lokal, seperti festival budaya, pameran seni, dan acara tradisional yang menarik. Tak hanya itu, Lokajatim menyajikan artikel inspiratif yang membahas kisah sukses pelaku lokal, panduan wisata, hingga cerita mendalam tentang tradisi dan sejarah Jawa Timur. 
              </p>
            </div>
          </div>

          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-lg font-medium">
              Apakah Lokajatim hanya untuk warga Jawa Timur?
            </div>
            <div className="collapse-content">
              <p>Lokajatim tidak terbatas hanya untuk...</p>
            </div>
          </div>

          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-lg font-medium">
              Apakah produk di Lokajatim terjamin keasliannya?
            </div>
            <div className="collapse-content">
              <p>Produk di Lokajatim telah melalui proses...</p>
            </div>
          </div>

          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-lg font-medium">
              Bagaimana cara mendapatkan update event lokal terbaru?
            </div>
            <div className="collapse-content">
              <p>Anda dapat mengikuti update event lokal dengan...</p>
            </div>
          </div>
        </div>
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img
            src="fq1.png" 
            alt="FAQ Illustration"
            className="w-[602px] h-[588px] rounded-tl-[32px]"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
