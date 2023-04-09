import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroSection() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  return (
    <div className="relative before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before::w-full before:h-full before:z-10">
      <Slider {...settings}>
        <div>
          <img className="w-full h-[500px] object-cover" src="https://i0.wp.com/www.middleeastmonitor.com/wp-content/uploads/2021/08/20210814_2_49606971_67906843.jpg?quality=85&strip=all&zoom=1&ssl=1" />
        </div>
        <div>
          <img className="w-full h-[500px] object-cover" src="https://www.igpdecaux.it/sites/default/files/styles/gallery_formatter_slide_2/public/case_history/getir_17-01-2022_full-wrap_darsena_milano_q2_08.jpg?itok=oyawb44j" />
        </div>
        <div>
          <img className="w-full h-[500px] object-cover" src="https://www.tomnorwell.com/wp-content/uploads/2022/01/Getir-header-fallback.jpg"/>
        </div>
      </Slider>
    </div>
  )
}
