/* eslint-disable react/prop-types */
import { useContext } from "react";

import { CarsContext } from "../store/cars-context";
import Button from "./globals/Button";
import Swal from "sweetalert2";

const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
};

function timer() {
  let timerInterval;
  Swal.fire({
    title: "Binar Rental Card",
    html: "Mencari kendaraan...",
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const timer = Swal.getPopup().querySelector("b");
      if (timer) {
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      }
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
}

export default function CarsList() {
  const { cars, loader } = useContext(CarsContext);

  return (
    <section className="cars">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11 ">
            {loader && timer()}
            <div className="row" id="cars-container">
              <br />
              {cars?.map((car) => (
                <div key={car.id} className="col-lg-4 my-2">
                  <div className="card px-2 py-4">
                    <img src={car.image} className="card-img-top mt-4" />
                    <div className="card-body">
                      <h5 className="card-title fs-6">
                        {car.manufacture}/{car.model}
                      </h5>
                      <h5 className="card-title fs-5 fw-bold">
                        {rupiah(car.rentPerDay)} / hari
                      </h5>
                      <p className="cars__p">{car.description}</p>
                      <div className="row">
                        <div className="col-1">
                          <img
                            src="images/fi_users1.png"
                            width="20px"
                            alt=""
                            srcSet=""
                          />
                        </div>
                        <div className="col-10 ms-lg-2">
                          {car.capacity} orang
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-1">
                          <img
                            src="images/fi_settings.png"
                            width="20px"
                            alt=""
                            srcSet=""
                          />
                        </div>
                        <div className="col-10 ms-lg-2">{car.transmission}</div>
                      </div>
                      <div className="row mt-2 mb-4">
                        <div className="col-1">
                          <img
                            src="images/fi_calendar.png"
                            width="20px"
                            alt=""
                            srcSet=""
                          />
                        </div>
                        <div className="col-10 ms-lg-2">Tahun {car.year}</div>
                      </div>

                      <Button
                        tag={"a"}
                        href={"#"}
                        description={"Go somewhere"}
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
