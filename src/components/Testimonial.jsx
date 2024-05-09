export default function Testimonial() {
  return (
    <section className="bagiancarousel" id="testimonial">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center my-5">
            <h1 className="fw-bold">Testimonial</h1>
            <p className="mt-3">
              Berbagai review positif dari para pelanggan kami
            </p>
          </div>
        </div>
        <div className="owl-carousel owl-theme">
          <div className="item">
            <div className="card mb-3">
              <div className=" row py-5 px-2 mx-2 ">
                <div className="col-lg-3 text-lg-center px-3 ">
                  <br />
                  <img
                    src="images/img_photo.png "
                    className="img-fluid rounded-circle "
                    width="80px "
                    alt="... "
                    style={{ marginLeft: "auto", marginRight: "auto" }}
                  />
                </div>
                <div className="col-lg-9 text-center text-md-center">
                  <div className="card-body ">
                    <img
                      src="images/Rate.png "
                      alt=" "
                      className="w-25 mb-3 mb-lg-2"
                    />
                    <p className="card-text ">
                      Pelayanan sangat baik dan mobilnya nyaman. Sangat
                      direkomendasikan!
                    </p>
                    <p className="fw-bold ">John Doe, Jakarta</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card mb-3">
              <div className=" row py-5 px-2 mx-2 ">
                <div className="col-lg-3 text-lg-center px-3 ">
                  <br />
                  <img
                    src="images/img_photo1.png "
                    className="img-fluid rounded-circle "
                    width="80px "
                    alt="... "
                    style={{ marginLeft: "auto", marginRight: "auto" }}
                  />
                </div>
                <div className="col-lg-9 text-md-center text-md-center">
                  <div className="card-body ">
                    <img
                      src="images/Rate.png "
                      alt=" "
                      className="w-25 mb-3 mb-lg-2 "
                    />
                    <p className="card-text ">
                      Saya sangat puas dengan layanan mereka. Harganya juga
                      sangat terjangkau!
                    </p>
                    <p className="fw-bold ">Jane Smith, Surabaya</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card mb-3">
              <div className=" row py-5 px-2 mx-2 ">
                <div className="col-lg-3 text-lg-center px-3 ">
                  <br />
                  <img
                    src="images/img_photo.png "
                    className="img-fluid rounded-circle "
                    width="80px "
                    alt="... "
                    style={{ marginLeft: "auto", marginRight: "auto" }}
                  />
                </div>
                <div className="col-lg-9 text-md-center text-md-center">
                  <div className="card-body ">
                    <img
                      src="images/Rate.png "
                      alt=" "
                      className="w-25 mb-3 mb-lg-2 "
                    />
                    <p className="card-text ">
                      Mobilnya bersih dan kenyamanan selama perjalanan sangat
                      baik.
                    </p>
                    <p className="fw-bold ">Michael Johnson, Bandung</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card mb-3">
              <div className=" row py-5 px-2 mx-2 ">
                <div className="col-lg-3 text-lg-center px-3 ">
                  <br />
                  <img
                    src="images/img_photo1.png "
                    className="img-fluid rounded-circle "
                    width="80px "
                    alt="... "
                    style={{ marginLeft: "auto", marginRight: "auto" }}
                  />
                </div>
                <div className="col-lg-9 text-md-center text-md-center">
                  <div className="card-body ">
                    <img
                      src="images/Rate.png "
                      alt=" "
                      className="w-25 mb-3 mb-lg-2 "
                    />
                    <p className="card-text ">
                      Saya sangat senang dengan pelayanan mereka. Akan
                      menggunakan lagi di masa mendatang!
                    </p>
                    <p className="fw-bold ">Michelle Lee, Yogyakarta</p>
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
