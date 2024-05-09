import "../public/css/404.css";

export default function PageNotFound() {
  return (
    <>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>
              4<span></span>4
            </h1>
          </div>
          <h2>Oops! Halaman Tidak Ditemukan</h2>
          <p>
            Mohon maaf, tetapi halaman yang Anda cari tidak ada, telah dihapus,
            nama berubah, atau sedang tidak tersedia sementara.
          </p>
          <a href="/">Kembali ke beranda</a>
        </div>
      </div>
    </>
  );
}
