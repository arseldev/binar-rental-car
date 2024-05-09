import Button from "./globals/Button";

export default function CallToAction() {
  return (
    <section className="sewa">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-lg-center text-center py-5">
            <h1 className="text-white fw-bold">
              Sewa Mobil di Samarinda Sekarang
            </h1>
            <p className="text-white pt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            {/* <button className="btn btn-utama mt-4">Mulai Sewa Mobil</button> */}
            <Button tag={"a"} href={"#"} description={"Mulai Sewa Mobil"} />
          </div>
        </div>
      </div>
    </section>
  );
}
