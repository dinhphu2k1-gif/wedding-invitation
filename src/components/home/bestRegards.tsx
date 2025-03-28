import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export interface IBestRegardsProps {}

export default function BestRegards() {
  useEffect(() => {
    AOS.init();

    // Cài đặt các hiệu ứng AOS tại đây (ví dụ: fade-up)
    AOS.refresh(); // Cập nhật AOS khi component được render lại
  }, []);

  return (
    <div className="lg:w-[60%] mx-auto p-4 lg:py-8">
      <div className="text-center">
        <i className="far fa-heart text-[60px] relative z-[5] text-[#F82548]">
          <i className="fas fa-heart text-[36px] absolute bottom-0 z-[10] right-0 text-[#F82548]"></i>
        </i>
      </div>
      <h2 className="text-married text-[#F82548] font-bold md:text-[30px] lg:text-[40px] text-center">
        We are Getting Married
      </h2>
      <p
        className="text-center text-[#73777b] text-[12px] md:text-[16px] lg:text-[18px] mt-8"
        data-aos="zoom-in"
        data-aos-duration="3000"
      >
        Thật vui vì được gặp và đón tiếp các bạn trong một dịp đặc biệt như đám
        cưới của chúng tôi. Chúng tôi muốn gửi đến bạn những lời cảm ơn sâu sắc
        nhất và để bạn biết chúng tôi rất hạnh phúc khi thấy bạn ở đó. Cảm ơn
        các bạn rất nhiều vì sự hiện diện cùng những lời chúc tốt đẹp mà bạn đã
        dành cho chúng tôi!
      </p>
      <p className="text-married-signature py-3 text-center text-[16px] md:text-[20px] lg:text-[30px]">
        Đình Phú & Hồng Trang
      </p>
      {/* <div className="flex justify-between">
        <div>
          <p className="text-[12px] md:text-[16px] lg:text-[18px]">
            Con Ông: <span className="font-medium">Vũ Hồng Quang</span>
          </p>
          <p className="text-[12px] md:text-[16px] lg:text-[18px]">
            Con Bà: <span className="font-medium">Nguyễn Thị Hướng</span>
          </p>
        </div>
        <div>
          <p className="text-[12px] md:text-[16px] lg:text-[18px]">
            Con Bà: <span className="font-medium">Nguyễn Thị Nga</span>
          </p>
        </div>
      </div> */}
    </div>
  );
}
