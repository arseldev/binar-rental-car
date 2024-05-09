// eslint-disable-next-line react/prop-types
export default function Searching({ onFormSubmit }) {
  return (
    <section className="search">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <form
              encType="multipart/form-data"
              type=""
              action=""
              onSubmit={(e) => {
                e.preventDefault();
                onFormSubmit(e.target);
              }}
            >
              <div className="row search__card mx-lg-5 py-3 px-4">
                <div className="col-lg-auto col-xl-2 col-xxl-3 col-md-auto">
                  <label>Tipe Driver</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="tipeDriver"
                    name="driver"
                  >
                    <option value="all">
                      Pilih Tipe Driver &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    </option>
                    <option value="true">Dengan Supir</option>
                    <option value="false">Tanpa Supir (Lepas Kunci)</option>
                  </select>
                </div>
                <div className="col-lg-auto col-xl-auto col-md-auto">
                  <label>Tanggal</label>
                  <div className="input-container">
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Pilih Tanggal"
                      id="tanggal"
                      name="date"
                    />
                    <span className="input-label">
                      <img src="/images/calendar.png" alt="date" />
                    </span>
                  </div>
                </div>
                <div className="col-lg-auto col-xl-auto col-md-auto search__time">
                  <label>Pilih Waktu</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="waktuJemput"
                    name="time"
                  >
                    <option value="">
                      Pilih Waktu &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    </option>
                    <option value="08:00">08.00 WIB</option>
                    <option value="09:00">09.00 WIB</option>
                    <option value="10:00">10.00 WIB</option>
                    <option value="11:00">11.00 WIB</option>
                    <option value="12:00">12.00 WIB</option>
                  </select>
                </div>
                <div className="col-lg-auto col-xl-auto col-md-auto">
                  <label className="fw-light">
                    Jumlah Penumpang (optional)
                  </label>
                  <div className="input-group">
                    <input
                      type="number"
                      className="form-control border-end-0"
                      placeholder="Jumlah Penumpang"
                      id="jumlahPenumpang"
                      defaultValue="0"
                      min={0}
                      name="capacity"
                    />
                    <span className="input-group-text bg-white">
                      <img src="images/fi_users.png" width="20px" alt="" />
                    </span>
                  </div>
                </div>
                <div className="col-lg-2 col-xl-auto col-md-2  pt-4">
                  <button id="load-btn" type="submit" className="btn btn-utama">
                    Cari Mobil
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
