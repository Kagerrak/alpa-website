import type { NextPage } from "next";
import { useCallback } from "react";

const FooterSection: NextPage = () => {
  const onIcbaselineDiscordContainerClick = useCallback(() => {
    window.open("https://app.alteredparadigm.xyz");
  }, []);

  const onMingcutetelegramFillContainerClick = useCallback(() => {
    window.open("https://app.alteredparadigm.xyz");
  }, []);

  const onMagexContainerClick = useCallback(() => {
    window.open("https://app.alteredparadigm.xyz");
  }, []);

  const onButtonMainClick = useCallback(() => {
    window.open("https://app.alteredparadigm.xyz");
  }, []);

  return (
    <footer className="w-[1417px] bg-secondary-900-main overflow-hidden flex flex-row flex-wrap items-start justify-between py-[90px] pr-[140px] pl-[174px] box-border max-w-full gap-[20px] text-left text-lgi text-shades-white font-paragraph-regular-bold mq450:pl-5 mq450:pr-5 mq450:box-border mq825:pl-[87px] mq825:pr-[70px] mq825:box-border mq1150:flex-wrap mq1150:justify-center mq800:pl-[35px] mq800:pr-[35px] mq800:box-border mq1350:pl-[70px] mq1350:pr-[70px] mq1350:box-border">
      <div className="flex flex-col items-start justify-start pt-[1.5px] pb-0 pr-[34px] pl-0">
        <div className="h-[76px] flex flex-row items-end justify-start pt-[16.3px] px-[0.2px] pb-[7.9px] box-border gap-[18.3px]">
          <img
            className="mb-[-10.699999999999363px] h-[81.6px] w-[61.2px] relative"
            alt=""
            src="/vector-11.svg"
          />
          <img
            className="h-[51.8px] w-[133.9px] relative"
            alt=""
            src="/alteredparadigm-1.svg"
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
        <div className="flex flex-col items-start justify-start gap-[11px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0.5 pl-[20.5px]">
            <b className="relative inline-block min-w-[55px]">Pages</b>
          </div>
          <div className="relative inline-block min-w-[96px]">Homepage</div>
          <div className="flex flex-row items-start justify-start py-0 pr-[29px] pl-[29.5px]">
            <div className="relative inline-block min-w-[37px]">App</div>
          </div>
        </div>
      </div>
      <div className="w-[568.5px] flex flex-row items-center justify-start py-0 px-0 box-border [row-gap:20px] max-w-full mq825:flex-wrap">
        <div className="flex-[0.8839] flex flex-col items-center justify-center py-0 pr-[73.7px] pl-[73.6px] box-border gap-[11px] min-w-[185px] mq450:pl-5 mq450:pr-5 mq450:box-border mq450:flex-1">
          <b className="relative inline-block min-w-[58px]">About</b>
          <div className="relative">Documentation</div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-start py-0 pr-[64.7px] pl-[64.6px] box-border gap-[24px] min-w-[185px] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="self-stretch flex flex-row items-start justify-between py-0 pr-[3px] pl-0.5 gap-[20px]">
            <div
              className="h-[30px] w-[30px] rounded-981xl bg-shades-white overflow-hidden shrink-0 flex flex-col items-center justify-center py-[7px] px-[4.5px] box-border cursor-pointer"
              onClick={onIcbaselineDiscordContainerClick}
            >
              <img
                className="w-[21px] h-4 relative"
                alt=""
                src="/vector-21.svg"
              />
            </div>
            <div
              className="h-[30px] w-[30px] rounded-981xl bg-shades-white overflow-hidden shrink-0 flex flex-row items-center justify-center p-[3px] box-border cursor-pointer"
              onClick={onMingcutetelegramFillContainerClick}
            >
              <img
                className="h-6 w-6 relative"
                loading="lazy"
                alt=""
                src="/group.svg"
              />
            </div>
            <div
              className="h-[30px] w-[30px] rounded-981xl bg-shades-white overflow-hidden shrink-0 flex flex-col items-center justify-center py-1.5 px-[5px] box-border cursor-pointer"
              onClick={onMagexContainerClick}
            >
              <img
                className="w-5 h-[18px] relative"
                alt=""
                src="/vector-3.svg"
              />
            </div>
          </div>
          <button
            className="cursor-pointer py-[9px] pr-3 pl-[15px] bg-[transparent] self-stretch rounded-md overflow-hidden flex flex-row items-center justify-center gap-[4px] border-[2px] border-solid border-primary-1-50-main"
            onClick={onButtonMainClick}
          >
            <img
              className="h-6 w-6 relative hidden"
              alt=""
              src="/-icon-regular--add1.svg"
            />
            <b className="relative text-base inline-block font-paragraph-regular-bold text-primary-1-50-main text-center min-w-[124px]">
              CHECK THE APP
            </b>
            <img
              className="h-6 w-6 relative hidden"
              alt=""
              src="/-icon-regular--add1.svg"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
