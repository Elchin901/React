import Slider from "react-slick";
import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BsFacebook} from "react-icons/bs";

export default function HeroSection() {

  const [selected, setSelected] = useState("TR");

  const phones = {
    US: '+1',
    DE: '+55',
    TR: '+90',
    IT: '+7',
    IN: '+15'
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: "linear"
  };


  return (
    <div className="relative h-auto md:h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      <Slider {...settings}>
        <div>
          <img className="w-full h-[500px] object-cover " src="https://i0.wp.com/www.middleeastmonitor.com/wp-content/uploads/2021/08/20210814_2_49606971_67906843.jpg?quality=85&strip=all&zoom=1&ssl=1" />
        </div>
        <div>
          <img className="w-full h-[500px] object-cover " src="https://www.igpdecaux.it/sites/default/files/styles/gallery_formatter_slide_2/public/case_history/getir_17-01-2022_full-wrap_darsena_milano_q2_08.jpg?itok=oyawb44j" />
        </div>
        <div>
          <img className="w-full h-[500px] object-cover " src="https://www.tomnorwell.com/wp-content/uploads/2022/01/Getir-header-fallback.jpg" />
        </div>
      </Slider>
      <div className="container flex justify-between items-center relative md:absolute top-0 left-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 h-full z-20">
        <div className="hidden md:block">
          <img src="https://getir.com/_next/image?url=https%3A%2F%2Flanding-strapi-images-development.s3.eu-west-1.amazonaws.com%2Fgetir_groceries_342882c582.svg&w=1920&q=75" />
          <h3 className="mt-10 text-4xl text-white font-semibold">
            Dakikalar icinde <br /> kapinizda <br />
          </h3>
        </div>
        <div className="w-[400px] rounded-lg bg-gray-50 p-6">
          <h4 className="text-primary-brand-color font-semibold text-center mb-4">
            Giris yap ve kayit ol
          </h4>
          <div className="grid gap-y-3">
            <div className="flex gap-x-2">
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                onSelect={code => setSelected(code)}
                selected={selected}
                className="flag-select"
              />

              <label className="flex-1 relative block">
                <input required className="h-14 px-4 border-2 border-gray-200 rounded w-full hover:border-primary-brand-color outline-none peer text-sm pt-2" />
                <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs ">Telefon Numarasi</span>
              </label>
            </div>
            <button className="bg-brand-yellow  text-primary-brand-color transition-colors hover:bg-primary-brand-color hover:text-brand-yellow h-12 flex items-center justify-center w-full rounded-md text-sm font-semibold ">
              Telefon Numarasi ile devam et
            </button>
            <hr className="h-[1px] bg-gray-300 my-2"/>
            <button className="bg-blue-100 px-4  text-primary-brand-color transition-colors hover:bg-primary-brand-color hover:text-blue-100 h-12 flex items-center w-full rounded-md text-sm font-semibold ">
             <BsFacebook size={20} /> 
             <span className="mx-auto">Facebook ile devam et</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
