import type { NextPage } from "next";
import { useCallback } from "react";

const FrameComponent2: NextPage = () => {
  const onButtonMainClick = useCallback(() => {
    window.open("https://docs.alteredparadigm.xyz");
  }, []);

  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3.5px] box-border max-w-full">
      <section className="h-[686px] flex-1 overflow-hidden flex flex-row items-start justify-start py-0 pr-[66px] pl-0 box-border max-w-full [row-gap:20px] text-left text-29xl text-shades-white font-mokoto-h3-desktop lg:flex-wrap mq1150:pt-[79px] mq1150:pb-[169px] mq1150:box-border mq800:gap-[25px] mq800:pl-[35px] mq800:pt-[51px] mq800:pb-[110px] mq800:box-border mq1350:gap-[50px] mq1350:pl-[70px] mq1350:pr-[33px] mq1350:box-border">
        <div className="flex-[0.7742] flex flex-col items-start justify-start pt-[92px] pb-[178px] pr-5 pl-[140px] box-border gap-[34px] min-w-[460px] max-w-full lg:flex-1 mq450:pl-5 mq450:box-border mq825:gap-[17px] mq825:pl-[70px] mq825:pt-[60px] mq825:pb-[116px] mq825:box-border mq825:min-w-full">
          <h1 className="m-0 relative text-inherit font-normal font-inherit inline-block max-w-full mq450:text-10xl mq825:text-19xl mq800:text-19xl">
            Secured Foundations
          </h1>
          <div className="self-stretch relative text-lgi font-paragraph-regular-bold inline-block max-w-full">
            In the vast and volatile domain of cryptocurrency, Altered Paradigm
            introduces a stabilizing anchor in the form of the Floor Price
            mechanism. Ingeniously engineered, this mechanism instills an
            intrinsic value to the ALPA token, providing a foundational safety
            net amidst market oscillations and ensuring a sustained stability
            for investors and token holders.
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
        <img
          className="h-[686px] w-[] relative object-cover min-w-[460px] max-w-[calc(100%_-_720px)] lg:flex-1 mq825:min-w-full mq1150:hidden mq1150:max-w-full"
          loading="lazy"
          alt=""
          src="/hero-2-2@2x.png"
        />
      </section>
    </section>
  );
};

export default FrameComponent2;
