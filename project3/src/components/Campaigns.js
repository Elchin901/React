import { useEffect, useState } from "react";
import Slider from "react-slick";
import Banners from 'api/banners.json';
import Title from 'components/ui/Title';

function NextBtn({className,style,onclick}){
  return(
    <button className={"text-brand-color absolute top-1/2 -right-6 -translate-1/2"} onClick={onClick}> 
      <IoIosArrowForward size={22}/>
    </button>
  )
}

function PrewBtn({className,style,onclick}){
  return(
    <button className={"text-brand-color absolute top-1/2 -right-6 -translate-1/2"} onClick={onClick}> 
      <IoIosArrowBack size={22}/>
    </button>
  )
}

export default function Campaigns() {

  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(Banners);
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };



  return (
    <div className="container mx-auto py-8">
      <Title>Kategoriler</Title>
      <Slider {...settings}>
        {banners.length && banners.map((banner, index) => (
          <div key={banner.id}>
            <picture className="block px-2">
              <img src={banner.image} className="rounded-lg"/>
            </picture>

          </div>
        ))}
      </Slider>
    </div>
  )
}