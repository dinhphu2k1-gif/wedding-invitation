import EventItem from "./eventItem";
import nhagai1 from "../../assets/images/nha-gai.png";
import nhagai2 from "../../assets/images/nha-gai-2.png";
import nhatrai1 from "../../assets/images/nha-trai.png";
import nhatrai2 from "../../assets/images/nha-trai-2.png";

export interface IEventProps {}

export default function Event() {
  return (
    <div className="event-wrapper pt-8 md:pt-10 lg:pt-12">
      <div className="event-title text-center">
        <h3 className="capitalize text-great-vibes text-[24px] md:text-[30px] lg:text-[40px] inline-block bg-[#feebec] text-[#848383] px-3 border-t-[2px] border-b-[2px] border-[#f23b431a]">
          sự kiện cưới
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:w-[80%] xl:mx-auto lg:grid-cols-4 gap-5 p-4">
        <EventItem
          imgItem={nhagai2}
          title={`Tiệc cưới nhà gái`}
          address={`68 Văn Tiến Dũng, Thành Khang, P.Tào Xuyên, TP.Thanh Hóa`}
          time={`16:30PM 04/04/2025`}
        />
        <EventItem
          imgItem={nhagai1}
          title={`Lễ cưới nhà gái`}
          address={`68 Văn Tiến Dũng, Thành Khang, P.Tào Xuyên, TP.Thanh Hóa`}
          time={`9:00AM 05/04/2025`}
        />
        <EventItem
          imgItem={nhatrai2}
          title={`Tiệc cưới nhà trai`}
          address={`Thôn Thịnh Hòa, Hoằng Thịnh, Hoằng Hóa, Thanh Hóa`}
          time={`17:00PM 04/04/2025`}
        />
        <EventItem
          imgItem={nhatrai1}
          title={`Lễ cưới nhà trai`}
          address={`Thôn Thịnh Hòa, Hoằng Thịnh, Hoằng Hóa, Thanh Hóa`}
          time={`10:00AM 05/04/2025`}
        />
      </div>
    </div>
  );
}
