import { BtnNoFrame1, BtnPrimary, BtnPrimary1 } from './AboutButtons';

export default function AboutContentFrame() {
  return (
    <div
      className="absolute bg-[#ffffff] box-border content-stretch flex flex-col gap-10 h-[237px] items-start justify-start p-[16px] rounded-[5px] top-[428px]"
      style={{ left: "calc(37.5% + 7.75px)", right: "calc(6.25% + 1.625px)" }}
    >
      <BtnNoFrame1 />
      <div className="absolute font-['Verdana:Regular',_sans-serif] leading-[0] left-8 not-italic right-[29px] text-[#352c27] text-[16px] text-left top-[88px] tracking-[-0.13px]">
        <p className="adjustLetterSpacing block leading-[22px]">
          Design happens at the intersection of human empathy and technological possibility. In our increasingly
          automated world, I create digital experiences that feel genuinely human.
        </p>
      </div>
      <div className="absolute font-['Libre_Franklin:SemiBold',_sans-serif] font-semibold leading-[0] left-8 right-7 text-[#352c27] text-[0px] text-left top-8 tracking-[0.64px] uppercase">
        <p className="leading-[24px]">
          <span className="font-['Libre_Franklin:Medium',_sans-serif] font-medium text-[16px]">Andrew Finch</span>
          <br />
          <span className="adjustLetterSpacing text-[#352c27] text-[24px]">Product designer</span>
        </p>
      </div>
      <BtnPrimary />
      <BtnPrimary1 />
    </div>
  );
}