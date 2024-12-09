const HomePage = () => {
    return (
      <div className="relative min-h-screen">
        {/* Background White */}
        <div className="absolute top-0 left-0 w-full h-full bg-white -z-10"></div>
        
        {/* Navbar */}
        <NavbarSearchBrown />
  
        {/* Main Content */}
        <main className="relative z-10">
          <div className="container mx-auto py-10">
            <h1 className="text-center text-3xl font-bold">Selamat Datang</h1>
            <p className="text-center mt-4">Ini adalah konten utama halaman</p>
          </div>
        </main>
  
        {/* Footer */}
        <Footer />
      </div>
    );
  };
  
  export default HomePage;
  