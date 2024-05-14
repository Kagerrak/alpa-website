import type { NextPage } from "next";
import { useCallback } from "react";

const FrameComponent1: NextPage = () => {
  const onButtonMainClick = useCallback(() => {
    window.open("https://docs.alteredparadigm.xyz");
  }, []);

  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-[3.5px] pr-[13px] pl-0 box-border max-w-full text-right text-29xl text-shades-white font-mokoto-h3-desktop">
      <div className="flex-1 overflow-hidden flex flex-row items-start justify-between [row-gap:20px] max-w-full gap-[0px] mq1400:flex-wrap mq800:pt-[31px] mq800:px-[25px] mq800:pb-[95px] mq800:box-border mq1350:flex-wrap mq1350:pl-[50px] mq1350:pr-[50px] mq1350:box-border">
        <img
          className="h-[] w-[610px] relative object-cover min-h-[793px] max-w-full mq1400:flex-1 mq1350:flex-1"
          loading="lazy"
          alt=""
          src="/hero-4-1@2x.png"
        />
        <div className="w-[807px] flex flex-col items-end justify-center py-[217.5px] pr-[140px] pl-0 box-border gap-[34px] min-w-[807px] max-w-full lg:min-w-full mq450:gap-[17px] mq450:pt-[92px] mq450:pb-[92px] mq450:box-border mq825:pt-[141px] mq825:pb-[141px] mq825:box-border mq1400:flex-1 mq1400:pr-0 mq1400:box-border">
          <h1 className="m-0 self-stretch relative text-inherit font-normal font-inherit mq450:text-10xl mq825:text-19xl mq800:text-19xl">
            Stability Through Strategic Redemption
          </h1>
          <div className="self-stretch relative text-lgi font-paragraph-regular-bold inline-block max-w-full">
            Altered Paradigm implements a strategic token redemption system
            within the Floor Price Mechanism, aimed at sustaining the value of
            the ALPA token. This approach assures token holders of stability and
            intrinsic value by enabling them to exchange tokens at a set floor
            price, regardless of market fluctuations.
          </div>
          <button
            className="cursor-pointer py-[9px] pr-3 pl-[15px] bg-[transparent] w-[157px] rounded-md box-border overflow-hidden flex flex-row items-center justify-center gap-[4px] border-[2px] border-solid border-primary-1-50-main"
            onClick={onButtonMainClick}
          >
            <img
              className="h-6 w-6 relative hidden"
              alt=""
              src="/-icon-regular--add1.svg"
            />
            <b className="relative text-base inline-block font-paragraph-regular-bold text-primary-1-50-main text-center min-w-[126px]">
              READ THE DOCS
            </b>
            <img
              className="h-6 w-6 relative hidden"
              alt=""
              src="/-icon-regular--add1.svg"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
