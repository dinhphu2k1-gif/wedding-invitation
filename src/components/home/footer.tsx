export interface IFooterProps {}

export default function Footer() {
  return (
    <div className="footer-wrapper bg-pink-400 flex justify-center items-center h-[150px]">
      <div className="footer-content relative md:before:h-[80px] md:before:w-[90px] md:after:h-[80px] md:after:w-[90px]">
        <p className="text-married font-semibold text-[#fff] text-center text-[20px] md:text-[24px]">
        Đình Phú
        </p>
        <p className="text-married font-semibold text-[#fff] text-center text-[16px] md:text-[20px]">
          &
        </p>
        <p className="text-married font-semibold text-[#fff] text-center text-[20px] md:text-[24px]">
        Hồng Trang
        </p>
      </div>
    </div>
  );
}
