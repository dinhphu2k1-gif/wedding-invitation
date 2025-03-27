import anh1 from "../../assets/images/album/MRT_8464.jpg";
import anh2 from "../../assets/images/album/MRT_8219.jpg";
import anh3 from "../../assets/images/album/MRT_8220.jpg";
import anh4 from "../../assets/images/album/MRT_8604.jpg";
import anh5 from "../../assets/images/album/MRT_8817.jpg";
import anh6 from "../../assets/images/album/MRT_8873.jpg";

export interface IAlbumProps {}

export default function Album() {
  return (
    <div className="py-10 text-center px-4">
      <h3 className="capitalize text-great-vibes text-[24px] md:text-[30px] lg:text-[40px] inline-block bg-[#feebec] text-[#848383] px-3 border-t-[2px] border-b-[2px] border-[#f23b431a] mb-8 lg:mb-10">
        album hình cưới
      </h3>
      <div className="grid gap-3 grid-cols-1 md:grid-cols-3 xl:w-[60%] xl:mx-auto">
        <div className="">
          <img className="w-full" src={anh1} alt="anh-1" />
        </div>
        <div className="">
          <img className="w-full" src={anh2} alt="anh-2" />
        </div>
        <div className="">
          <img className="w-full" src={anh3} alt="anh-3" />
        </div>
        <div className="">
          <img className="w-full" src={anh4} alt="anh-4" />
        </div>
        <div className="">
          <img className="w-full" src={anh5} alt="anh-5" />
        </div>
        <div className="">
          <img className="w-full" src={anh6} alt="anh-6" />
        </div>
      </div>
    </div>
  );
}
