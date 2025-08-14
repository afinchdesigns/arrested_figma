import { IconSpeech1, IconDownload1 } from './AboutIcons';

export function BtnNoFrame() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-2 h-[42px] items-baseline justify-end pb-4 pt-2.5 px-2 top-4 right-4"
      data-name="btn--noFrame"
    >
      <IconSpeech1 />
    </div>
  );
}

export function BtnNoFrame1() {
  return (
    <div
      className="absolute bottom-[30px] box-border content-stretch flex flex-row gap-2 h-[42px] items-end justify-end pb-4 pt-2.5 px-2 right-8"
      data-name="btn--noFrame"
    >
      <div className="css-u2kawj flex flex-col font-['Libre_Franklin:SemiBold',_sans-serif] font-[574] justify-center leading-[0] relative shrink-0 text-[#352c27] text-[14px] text-center text-nowrap tracking-[1.12px] uppercase">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">resumé</p>
      </div>
      <IconDownload1 />
    </div>
  );
}

export function BtnPrimary() {
  return (
    <div
      className="absolute bg-[#352c27] bottom-[30px] box-border content-stretch flex flex-row gap-2 h-[42px] items-center justify-center left-8 px-6 py-4 rounded-[5px]"
      data-name="btn--primary"
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-[#352c27] border-solid inset-0 pointer-events-none rounded-[5px]"
      />
      <div className="css-1dl95k flex flex-col font-['Libre_Franklin:Medium',_sans-serif] font-medium justify-center leading-[0] min-w-20 relative shrink-0 text-[#fcb426] text-[14px] text-center text-nowrap tracking-[1.12px] uppercase">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">The Process</p>
      </div>
    </div>
  );
}

export function BtnPrimary1() {
  return (
    <div
      className="absolute bottom-[30px] box-border content-stretch flex flex-row gap-2 h-[42px] items-center justify-center left-[207px] px-6 py-4 rounded-[5px]"
      data-name="btn--primary"
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-[#fcb426] border-solid inset-0 pointer-events-none rounded-[5px]"
      />
      <div className="css-1dl95k flex flex-col font-['Libre_Franklin:Medium',_sans-serif] font-medium justify-center leading-[0] min-w-20 relative shrink-0 text-[#fcb426] text-[14px] text-center text-nowrap tracking-[1.12px] uppercase">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">Bio.Andrew</p>
      </div>
    </div>
  );
}