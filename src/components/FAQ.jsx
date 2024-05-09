export default function FAQ() {
  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 title-faq">
            <h2 className="fw-bold">Pertanyaan yang Sering Diajukan</h2>
            <p>
              Berikut adalah beberapa pertanyaan yang sering diajukan tentang
              layanan kami:
            </p>
          </div>
          <div className="col-lg-7">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Apa saja syarat yang dibutuhkan?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>
                      Syarat yang dibutuhkan untuk menyewa mobil adalah:
                    </strong>{" "}
                    KTP asli, SIM asli, dan deposit sesuai dengan jenis mobil
                    yang disewa.
                  </div>
                </div>
              </div>
              <div className="accordion-item mt-3">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Berapa hari minimal sewa mobil lepas kunci?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>
                      Hari minimal untuk menyewa mobil lepas kunci adalah 1
                      hari.
                    </strong>
                  </div>
                </div>
              </div>
              <div className="accordion-item mt-3">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Berapa hari sebelumnya sebaiknya booking sewa mobil?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>
                      Kami menyarankan untuk melakukan booking minimal 3 hari
                      sebelum hari pengambilan mobil.
                    </strong>
                  </div>
                </div>
              </div>
              <div className="accordion-item mt-3">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Apakah Ada biaya antar-jemput?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>
                      Kami menyediakan layanan antar-jemput dengan biaya
                      tambahan sesuai jarak dan jenis layanan yang dipilih.
                    </strong>
                  </div>
                </div>
              </div>
              <div className="accordion-item mt-3">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Bagaimana jika terjadi kecelakaan
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>
                      Jika terjadi kecelakaan, segera hubungi layanan darurat
                      kami dan ikuti instruksi yang diberikan oleh petugas kami.
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
