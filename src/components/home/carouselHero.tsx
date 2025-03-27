import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../../assets/images/Screenshot_24-3-2025_224941_.jpeg";
import slide2 from "../../assets/images/Screenshot_24-3-2025_225118_.jpeg";
// import slide3 from "../../assets/images/album/linhtinh.jpeg";

export interface ICarouselHeroProps {}

export default function CarouselHero() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000, // Tốc độ chuyển động (ms)
    fade: true, // Hiệu ứng làm mờ
    autoplaySpeed: 3000, // Thời gian giữa các slide (ms)
    autoplay: true,
    arrows: false,
  };

  return (
    <div className="section-hero relative">
      <div className="carousel-hero w-full">
        <Slider {...settings}>
          <div>
            <img
              className="h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] w-full object-cover object-center"
              src={slide1}
              alt="Slide 1"
            />
          </div>
          <div>
            <img
              className="h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] w-full object-cover object-center"
              src={slide2}
              alt="Slide 2"
            />
          </div>
          {/* <div>
            <img
              className="h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] w-full object-cover object-center"
              src={slide3}
              alt="Slide 3"
            />
          </div> */}
        </Slider>
      </div>
      
    </div>
  );
}
