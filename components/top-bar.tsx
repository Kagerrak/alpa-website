import type { NextPage } from "next";
import { useCallback } from "react";

const TopBar: NextPage = () => {
  const onButtonMainClick = useCallback(() => {
    window.open("https://app.alteredparadigm.xyz");
  }, []);

  return (
    <header className="mt-[-77px] self-stretch overflow-hidden flex flex-row items-start justify-center py-[15.5px] px-5 gap-[844px] shrink-0 [debug_commit:1de1738] mq450:gap-[110px] mq825:gap-[211px] mq1400:gap-[422px] mq800:gap-[220px] mq1350:gap-[440px]">
      <div className="h-[46px] flex flex-row items-end justify-start pt-[9.9px] px-[0.1px] pb-[4.8px] box-border gap-[11.8px]">
        <img
          className="mb-[-6.5px] h-[49.4px] w-[39px] relative"
          loading="lazy"
          alt=""
          src="/vector.svg"
        />
        <img
          className="h-[31.3px] w-[85.4px] relative"
          loading="lazy"
          alt=""
          src="/alteredparadigm.svg"
        />
      </div>
      <button
        className="cursor-pointer [border:none] py-3 px-[15px] bg-[transparent] rounded-md [background:linear-gradient(90deg,_#81fced,_#bcffeb)] overflow-hidden flex flex-row items-start justify-start gap-[4px]"
        onClick={onButtonMainClick}
      >
        <img
          className="h-6 w-6 relative hidden"
          alt=""
          src="/-icon-regular--add.svg"
        />
        <b className="relative text-base inline-block font-paragraph-regular-bold text-primary-2-900 text-center min-w-[124px] whitespace-nowrap">
          CHECK THE APP
        </b>
        <img
          className="h-6 w-6 relative hidden"
          alt=""
          src="/-icon-regular--add.svg"
        />
      </button>
    </header>
  );
};

export default TopBar;
