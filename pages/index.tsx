import type { NextPage } from "next";
import TopBar from "../components/top-bar";
import FrameComponent5 from "../components/frame-component5";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import FooterSection from "../components/footer-section";

const HomepageDesktop: NextPage = () => {
  return (
    <div className="w-full relative bg-primary-1-1000 overflow-hidden flex flex-col items-start justify-start gap-[32.5px] leading-[normal] tracking-[normal] mq825:gap-[16px]">
      <section className="self-stretch h-[883.5px] flex flex-col items-start justify-start pt-[73.5px] px-0 pb-0 box-border max-w-full lg:pt-12 lg:box-border mq825:pt-[31px] mq825:box-border">
        <TopBar />
        <FrameComponent5 />
      </section>
      <FrameComponent4 />
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
      <FooterSection />
    </div>
  );
};

export default HomepageDesktop;
