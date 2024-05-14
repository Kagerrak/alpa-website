import type { NextPage } from "next";

const FrameComponent5: NextPage = () => {
  return (
    <div className="self-stretch h-[810px] relative shrink-0 [debug_commit:1de1738] max-w-full text-center text-41xl text-shades-white font-mokoto-h3-desktop">
      <img
        className="absolute top-[0px] left-[0px] w-full h-full object-cover"
        alt=""
        src="/bghero@2x.png"
      />
      <div className="absolute top-[3.5px] left-[0px] w-full flex flex-row flex-wrap items-center justify-center py-[278px] px-5 box-border max-w-full h-full z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border mq825:pl-[99px] mq825:pr-[99px] mq825:box-border">
        <div className="flex-1 flex flex-col items-center justify-center py-[4.5px] px-0 box-border gap-[34px] max-w-full mq825:gap-[17px]">
          <h1 className="m-0 w-[1021px] relative text-inherit font-normal font-inherit inline-block max-w-full mq450:text-17xl mq825:text-29xl mq800:text-29xl">
            A NEW WAY OF SEEING THINGS
          </h1>
          <div className="w-[1021px] relative text-lgi font-paragraph-regular-bold inline-block max-w-full">
            Altered Paradigm’s tokens are backed by its revolutionary dual
            treasury system, providing both a stable floor price and lucrative
            opportunities for growth.
          </div>
          <button className="cursor-pointer [border:none] py-3 px-[15px] bg-[transparent] [backdrop-filter:blur(4px)] rounded-md [background:linear-gradient(90deg,_#81fced,_#bcffeb)] flex flex-row items-center justify-center gap-[4px]">
            <img
              className="h-6 w-6 relative hidden"
              alt=""
              src="/-icon-regular--add.svg"
            />
            <b className="relative text-base inline-block font-paragraph-regular-bold text-primary-2-900 text-center min-w-[124px]">
              CHECK THE APP
            </b>
            <img
              className="h-6 w-6 relative hidden"
              alt=""
              src="/-icon-regular--add.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
