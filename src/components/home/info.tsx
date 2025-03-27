import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export interface IInfoProps {
  urlImg: string;
  groom: boolean;
}

export default function Info(props: IInfoProps) {
  const { urlImg, groom } = props;

  useEffect(() => {
    AOS.init();

    // Cài đặt các hiệu ứng AOS tại đây (ví dụ: fade-up)
    AOS.refresh(); // Cập nhật AOS khi component được render lại
  }, []);

  return (
    <div className="info-groom md:flex lg:w-[60%] lg:mx-auto p-4 bg-[#f7faf9]">
      <div
        className={`img-groom md:w-[50%] ${groom ? "order-1" : "order-2"}`}
        data-aos={groom ? "flip-right" : "flip-left"}
        data-aos-duration="3000"
      >
        <img
          className="w-full object-cover rounded-lg border-[2px] border-solid"
          src={urlImg}
          alt={groom ? "groom" : "bride"}
        />
      </div>
      <div
        className={`story md:w-[50%] md:flex-col md:my-auto md:px-3 py-2 ${
          groom ? "order-2" : "order-1"
        }`}
        data-aos={groom ? "flip-left" : "flip-right"}
        data-aos-duration="3000"
      >
        <h2 className="text-[12px] md:text-[16px] font-medium">
          {groom ? "Chú rể: Đình Phú" : "Cô dâu: Hồng Trang"}
        </h2>
        <p className="text-[12px] md:text-[16px] text-gray-500 italic py-2">
          {groom
            ? 'Viết gì giờ?'
            : "Viết gì giờ?"}
        </p>
        <p className="text-great-vibes text-[16px] md:text-[20px] lg:text-[26px]">
          {groom ? "Đình Phú" : "Hồng Trang"}
        </p>
      </div>
    </div>
  );
}
