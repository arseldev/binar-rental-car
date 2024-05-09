/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState, useHistory, useEffect } from "react";

import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/globals/Header";
import Footer from "./components/globals/Footer";
import LandingPage from "./LandingPage";
import Cars from "./Cars";
import PageNotFound from "./PageNotFound";

export default function App() {
  useEffect(() => {
    $(" .owl-carousel ").owlCarousel({
      loop: true,
      margin: 20,
      autoWidth: true,
      autoHeight: true,
      nav: true,
      center: true,
      dots: false,
      navText: [
        "<img width='32px' src='/images/Leftbutton.png'>",
        "<img  width='32px' src='/images/Rightbutton.png'>",
      ],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true,
          loop: true,
          autoWidth: true,
          autoHeight: true,
        },
        600: {
          items: 1,
          nav: true,
          loop: true,
          autoWidth: true,
          autoHeight: true,
        },
      },
    });
    $(".owl-carousel1").owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        600: {
          items: 3,
          nav: false,
        },
        1000: {
          items: 5,
          nav: true,
          loop: false,
        },
      },
    });
  }, []);

  const isHomePage = location.pathname === "/";
  const isCarsPage = location.pathname === "/cars";

  return (
    <BrowserRouter>
      {isHomePage || isCarsPage ? <Header /> : null}{" "}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {isHomePage || isCarsPage ? <Footer /> : null}{" "}
    </BrowserRouter>
  );
}
