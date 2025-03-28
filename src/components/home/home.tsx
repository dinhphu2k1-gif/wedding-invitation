import CountdownTimer from "../countdownTimer";
// import MessengerButton from "../redirectMessenger";
import CarouselHero from "./carouselHero";
import Info from "./info";
import imgGroom from "../../assets/images/album/Screenshot_27-3-2025_221327_.jpeg";
import imgBride from "../../assets/images/album/MRT_7980.jpg";
import BestRegards from "./bestRegards";
import MusicPlayer from "../music";
// import MessengerButton from "../redirectMessenger";
import Event from "./event";
import WeddingBox from "./wedingBox";
import Footer from "./footer";
import Album from "./album";

export interface IHomeProps {}

export default function Home() {
  return (
    <div>
      <CarouselHero />
      <BestRegards />
      <div>
        <Info urlImg={imgGroom} groom={true} />
        <Info urlImg={imgBride} groom={false} />
      </div>
      <CountdownTimer />
      <Event />
      <Album />
      <WeddingBox />
      {/* <MessengerButton /> */}
      <Footer />
      <MusicPlayer />
    </div>
  );
}
