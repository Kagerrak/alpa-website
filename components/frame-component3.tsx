import type { NextPage } from "next";
import { useCallback } from "react";

const FrameComponent3: NextPage = () => {
  const onButtonMainClick = useCallback(() => {
    window.open("https://docs.alteredparadigm.xyz");
  }, []);

  return (
    <section className="flex flex-row items-start justify-start pt-0 px-0 pb-[3.5px] box-border max-w-full text-left text-29xl text-shades-white font-mokoto-h3-desktop">
      <div className="w-[1417px] flex flex-row flex-wrap items-start justify-between pt-[70px] px-0 pb-[81px] box-border min-h-[1198px] gap-[-1417px] max-w-full lg:pt-[45px] lg:pb-[53px] lg:box-border mq825:pt-[29px] mq825:pb-[34px] mq825:box-border">
        <div className="w-[1417px] flex flex-col items-start justify-start pt-0 pb-2.5 pr-5 pl-[140px] box-border gap-[34px] max-w-full mq825:gap-[17px] mq825:pl-[35px] mq825:box-border mq1400:pl-[70px] mq1400:box-border">
          <h1 className="m-0 relative text-inherit font-normal font-inherit inline-block max-w-full mq450:text-10xl mq825:text-19xl mq800:text-19xl">
            The Dual Treasury System
          </h1>
          <div className="self-stretch relative text-lgi font-paragraph-regular-bold inline-block max-w-full">
            Our innovative approach strategically establishes two pivotal
            treasuries: the Backing Treasury and the Investment Treasury.
            Investors are assured that the token has a stable intrinsic value
            that continuously grows.
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
        <div className="w-[1417px] flex flex-col items-center justify-center min-w-[1346px] max-w-full text-4xl font-paragraph-regular-bold">
          <div className="self-stretch flex flex-row items-center justify-center py-0 pr-5 pl-[598px] [row-gap:20px] lg:flex-wrap mq450:pl-5 mq450:box-border mq825:pl-[149px] mq825:box-border mq1400:pl-[299px] mq1400:box-border">
            <div className="h-[290px] w-[269px] flex flex-col items-center justify-end pt-[136px] px-0 pb-[93px] box-border min-w-[269px] lg:flex-1">
              <img
                className="w-[] h-[] relative object-contain lg:self-stretch lg:w-auto"
                loading="lazy"
                alt=""
                src="/vector-2.svg"
              />
            </div>
            <div className="w-[290px] rounded-2xl bg-darkslategray box-border flex flex-col items-center justify-center py-[23px] px-[50px] gap-[4px] min-w-[290px] border-[2px] border-solid border-powderblue lg:flex-1 mq450:pl-5 mq450:pr-5 mq450:box-border">
              <b className="self-stretch relative mq450:text-lg">
                Investment Treasury
              </b>
              <div className="self-stretch relative text-lgi text-justify">{`The Investment Treasury aims to maximize returns and boost token value through strategic investments. `}</div>
            </div>
          </div>
          <div className="self-stretch h-[290px] flex flex-col items-center justify-between py-0 px-5 box-border max-w-full">
            <img
              className="w-[578px] h-[509px] relative object-cover max-w-full"
              alt=""
              src="/hero-2-1@2x.png"
            />
          </div>
          <div className="self-stretch h-[234px] flex flex-row items-center justify-center py-0 px-0 box-border max-w-full lg:h-auto">
            <div className="flex-1 flex flex-row items-start justify-center py-0 pr-[570px] pl-5 box-border max-w-full [row-gap:20px] shrink-0 lg:flex-wrap lg:pr-[285px] lg:box-border mq450:pr-5 mq450:box-border mq825:pr-[142px] mq825:box-border">
              <div className="w-[290px] rounded-2xl bg-darkslategray box-border flex flex-col items-center justify-center py-[35px] px-[50px] gap-[4px] min-w-[290px] border-[2px] border-solid border-powderblue lg:flex-1 mq450:pl-5 mq450:pr-5 mq450:box-border">
                <b className="relative mq450:text-lg">Backing Treasury</b>
                <div className="self-stretch relative text-lgi text-justify">
                  The Backing Treasury serves to uphold the stability and
                  intrinsic value of the project's token.
                </div>
              </div>
              <div className="h-[243px] w-[279px] flex flex-col items-start justify-start pt-[106px] px-0 pb-[68px] box-border min-w-[279px] lg:flex-1">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full lg:self-stretch lg:w-auto"
                  loading="lazy"
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
