/* eslint-disable react/prop-types */
import Filtering from "./components/Filtering";
import CarsList from "./components/CarsList";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { CarsContext } from "./store/cars-context";

export default function Cars() {
  const [cars, setCars] = useState({
    cars: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState();

  function handleFormSubmit(form) {
    const formData = new FormData(form);

    const formObject = {
      driver: formData.get("driver"),
      date: formData.get("date"),
      time: formData.get("time"),
      capacity: formData.get("capacity"),
    };

    setForm(formObject);
  }

  useEffect(() => {
    async function getCars() {
      setIsLoading(true);

      const response = await fetch(
        "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
      );
      const data = await response.json();

      let filteredData;

      setTimeout(() => {
        if (form !== undefined) {
          if (form.driver === "all") {
            filteredData = data;
          } else if (form.driver === "true" || form.driver === "false") {
            filteredData = data.filter((car) => {
              return car.available === JSON.parse(form.driver);
            });
          }

          if (form.date) {
            const filteredDataDate = filteredData.filter((car) => {
              return car.availableAt.slice(0, 10) <= form.date;
            });
            if (filteredDataDate.length === 0) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `Mobil pada tanggal ${form.date} tidak tersedia.`,
              });
              filteredData = filteredDataDate;
            }
          }

          if (form.time && !form.date) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `Cek waktu hanya bisa digunakan jika tanggal terisi.`,
            });
          }

          if (form.capacity > 0) {
            const filteredDataCapacity = filteredData.filter((car) => {
              return car.capacity >= JSON.parse(form.capacity);
            });

            if (filteredDataCapacity.length === 0) {
              // Tampilkan SweetAlert di sini
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `Mobil dengan jumlah penumpang ${form.capacity} tidak tersedia.`,
                footer: "Semua kendaraan akan ditampilkan!",
              });
              filteredData = filteredDataCapacity;
            }
            filteredData = filteredDataCapacity;
          }

          setCars({ cars: filteredData.length > 0 ? filteredData : data });
        } else {
          setCars({ cars: data });
        }

        setIsLoading(false);
      }, 2000);
    }
    getCars();
  }, [form]);

  const ctxValue = {
    cars: cars.cars,
    loader: isLoading,
  };

  return (
    <CarsContext.Provider value={ctxValue}>
      <Filtering onFormSubmit={handleFormSubmit} />
      <CarsList loader={isLoading} />
    </CarsContext.Provider>
  );
}
