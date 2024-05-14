import type { NextPage } from "next";

const FrameComponent4: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3.5px] box-border max-w-full text-left text-17xl text-shades-white font-mokoto-h3-desktop">
      <div className="flex-1 overflow-hidden flex flex-col items-center justify-start py-12 px-5 box-border gap-[30px] max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq800:gap-[15px] mq800:pl-[70px] mq800:pr-[70px] mq800:box-border">
        <h2 className="m-0 relative text-inherit font-normal font-inherit inline-block max-w-full mq450:text-3xl mq825:text-10xl mq800:text-10xl">
          Protocol Status
        </h2>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[35px] max-w-full text-center text-lgi font-paragraph-regular-bold mq825:gap-[17px] mq800:gap-[17px] mq1350:flex-wrap">
          <div className="flex-[0.8436] flex flex-col items-center justify-start py-0 px-[24.2px] box-border gap-[12px] min-w-[200px] max-w-[204px] mq450:flex-1">
            <div className="relative">ALPA Market Cap</div>
            <b className="relative text-17xl leading-[42px] inline-block text-primary-1-50-main min-w-[129px] whitespace-nowrap mq450:text-3xl mq450:leading-[25px] mq825:text-10xl mq825:leading-[34px] mq800:text-10xl mq800:leading-[34px]">
              $21,822
            </b>
          </div>
          <div className="flex-1 flex flex-col items-center justify-start py-0 px-[10.2px] box-border gap-[12px] min-w-[200px] max-w-[204px]">
            <div className="relative">Investment Treasury</div>
            <b className="relative text-17xl leading-[42px] inline-block text-primary-1-50-main min-w-[121px] whitespace-nowrap mq450:text-3xl mq450:leading-[25px] mq825:text-10xl mq825:leading-[34px] mq800:text-10xl mq800:leading-[34px]">
              $6,385
            </b>
          </div>
          <div className="flex-[0.8324] flex flex-col items-center justify-start py-0 px-[25.2px] box-border gap-[12px] min-w-[200px] max-w-[204px] mq450:flex-1">
            <div className="relative">Backing Treasury</div>
            <b className="relative text-17xl leading-[42px] inline-block text-primary-1-50-main min-w-[121px] whitespace-nowrap mq450:text-3xl mq450:leading-[25px] mq825:text-10xl mq825:leading-[34px] mq800:text-10xl mq800:leading-[34px]">
              $11,765
            </b>
          </div>
          <div className="flex-[0.4916] flex flex-col items-center justify-start py-0 pr-14 pl-[55.7px] box-border gap-[12px] min-w-[200px] max-w-[204px] mq450:flex-1">
            <div className="relative inline-block min-w-[45px]">Price</div>
            <b className="relative text-17xl leading-[42px] inline-block text-primary-1-50-main min-w-[88px] whitespace-nowrap mq450:text-3xl mq450:leading-[25px] mq825:text-10xl mq825:leading-[34px] mq800:text-10xl mq800:leading-[34px]">
              $0.12
            </b>
          </div>
          <div className="flex-[0.676] flex flex-col items-center justify-start py-0 pr-[39px] pl-[39.2px] box-border gap-[12px] min-w-[200px] max-w-[204px] mq450:flex-1">
            <div className="relative inline-block min-w-[94px]">
              Floor Price
            </div>
            <b className="relative text-17xl leading-[42px] inline-block text-primary-1-50-main min-w-[121px] whitespace-nowrap mq450:text-3xl mq450:leading-[25px] mq825:text-10xl mq825:leading-[34px] mq800:text-10xl mq800:leading-[34px]">
              $0.067
            </b>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
