import type { NextPage } from "next";
import { useCallback } from "react";

const FrameComponent: NextPage = () => {
  const onButtonMainClick = useCallback(() => {
    window.open("https://app.alteredparadigm.xyz");
  }, []);

  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-[3.5px] pr-[13px] pl-0 box-border max-w-full text-center text-29xl text-shades-white font-mokoto-h3-desktop mq450:pb-9 mq450:box-border mq800:pb-14 mq800:box-border">
      <div className="flex-1 overflow-hidden flex flex-row items-start justify-center pt-[85px] px-5 pb-[86.9px] box-border max-w-full lg:pt-[55px] lg:pb-14 lg:box-border mq825:pt-9 mq825:pb-9 mq825:box-border">
        <div className="w-[719.7px] flex flex-col items-center justify-center gap-[40px] max-w-full shrink-0 mq825:gap-[20px]">
          <h1 className="m-0 relative text-inherit font-normal font-inherit mq450:text-10xl mq825:text-19xl mq800:text-19xl">
            How to buy ALPA
          </h1>
          <img
            className="self-stretch h-[350.1px] relative rounded-7xl max-w-full overflow-hidden shrink-0"
            alt=""
            src="/ytobject.svg"
          />
          <div className="self-stretch relative text-lgi font-paragraph-regular-bold text-left">
            <ol className="m-0 font-inherit text-inherit pl-[25px]">
              <li className="mb-0">
                Navigate to the Token Sale Page: Start by visiting the token
                sale section on our platform.
              </li>
              <li className="mb-0">
                Enter Your Amount: Input the amount of USDC you wish to deposit,
                then click on the 'Approve' button.
              </li>
              <li className="mb-0">
                Metamask Approval: A Metamask prompt will appear. Please approve
                the transaction to proceed.
              </li>
              <li className="mb-0">
                Deposit Funds: After approval, click on the 'Deposit' button to
                continue.
              </li>
              <li className="mb-0">
                Confirm in Metamask: Confirm the transaction in your Metamask
                wallet.
              </li>
              <li>
                Completion: Once the transaction is confirmed, your
                participation in the token sale is complete.
              </li>
            </ol>
          </div>
          <button
            className="cursor-pointer [border:none] py-3 px-[15px] bg-[transparent] rounded-md [background:linear-gradient(90deg,_#81fced,_#bcffeb)] overflow-hidden flex flex-row items-center justify-center gap-[4px]"
            onClick={onButtonMainClick}
          >
            <img
              className="h-6 w-6 relative hidden"
              alt=""
              src="/-icon-regular--add.svg"
            />
            <b className="relative text-base inline-block font-paragraph-regular-bold text-primary-2-900 text-center min-w-[120px]">
              GO TO THE APP
            </b>
            <img
              className="h-6 w-6 relative hidden"
              alt=""
              src="/-icon-regular--add.svg"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
