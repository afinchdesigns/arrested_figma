import svgPaths from "./svg-7grg70023c";
import img00011 from "figma:asset/ade088b84dbc14da8dc0af1ac929ba5a9f8cedfd.png";

function Layer1() {
  return (
    <div className="absolute bottom-0 left-[6.27%] right-[5.96%] top-0" data-name="Layer_1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16">
        <g clipPath="url(#clip0_1_638)" id="Layer_1">
          <path d={svgPaths.p1cf2f500} fill="var(--fill-0, #FCB426)" id="Vector" />
          <path d={svgPaths.p2c52eb80} fill="var(--fill-0, #FCB426)" id="Vector_2" />
          <path d="M2.00627 8H0V10H2.00627V8Z" fill="var(--fill-0, #FCB426)" id="Vector_3" />
          <path d={svgPaths.p363b8b00} fill="var(--fill-0, #FCB426)" id="Vector_4" />
          <path d={svgPaths.p2ef8d180} fill="var(--fill-0, #FCB426)" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_1_638">
            <rect fill="white" height="16" width="14.0439" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconArrowDown() {
  return (
    <div className="overflow-clip relative shrink-0 size-4" data-name="icon--arrow--down">
      <Layer1 />
    </div>
  );
}









export default function ArrestedMachineHero1A() {
  return (
    <div className="bg-[#fcb426] relative w-full h-screen overflow-hidden" data-name="ArrestedMachine_Hero_1a">
      {/* Background Image - scales from center */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        data-name="0001 1"
        style={{ 
          backgroundImage: `url('${img00011}')`,
          filter: 'grayscale(100%) brightness(1.3) contrast(1.4)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        }}
      />
      
      {/* Content Container - keeps original size and centers content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[1369px] h-[769px] max-w-full max-h-full">
          {/* Main Headline */}
          <div
            className="absolute font-['Encode_Sans_Condensed:Black',_sans-serif] h-[584px] leading-[0] not-italic opacity-85 text-[#fcb426] text-[145px] text-left top-12 w-[1192px] max-w-full"
            style={{ left: "calc(6.25% + 1.625px)" }}
          >
            <p className="block leading-[149px]">IN A WORLD FULL OF MACHINES, DESIGN IS STILL HUMAN.</p>
          </div>
          
        </div>
      </div>
      
      {/* Bottom Elements - Positioned relative to viewport */}
      <div className="absolute bottom-[15vh] w-full z-30">
        {/* Centered container matching the content container above */}
        <div className="flex items-center justify-center w-full">
          <div className="relative w-[1369px] max-w-full">
            {/* Subtitle and Barcode Text Container */}
            <div className="absolute" style={{ left: "calc(6.25% + 1.625px)" }}>
              {/* Subtitle */}
              <div
                className="font-['Libre_Franklin:SemiBold',_sans-serif] font-semibold h-[37px] leading-[0] text-[#352c27] text-[0px] text-left tracking-[0.64px] uppercase w-[604px] max-w-full"
              >
                <p className="leading-[38px] text-[16px]">
                  <span>{`let Andrew add the `}</span>
                  <span className="font-['Libre_Franklin:SemiBold_Italic',_sans-serif] font-semibold italic text-[#8d3b1e]">
                    emotion
                  </span>
                  <span className="adjustLetterSpacing">{` to your Product journeys.`}</span>
                </p>
              </div>
              
              {/* Barcode Text */}
              <div
                className="absolute flex flex-col font-['Libre_Barcode_39_Text:Regular',_sans-serif] h-[61px] justify-center leading-[0] not-italic text-[#fcb426] text-[24px] text-right top-[48.5px] translate-x-[-100%] translate-y-[-50%] w-[362px]"
                style={{ left: "calc(0% + 356px)" }}
              >
                <p className="block leading-[38px] whitespace-pre-wrap">{`Empathy  courage  and narrative`}</p>
              </div>
            </div>
            
            {/* Engage Below Button */}
            <div
              className="absolute bg-[#352c27] box-border content-stretch flex flex-row gap-2 h-[42px] items-center justify-center px-6 py-4 rounded-[5px] top-[10px]"
              data-name="btn--primary"
              style={{ left: "calc(75% + 45.5px)" }}
            >
              <div
                aria-hidden="true"
                className="absolute border-2 border-[#352c27] border-solid inset-0 pointer-events-none rounded-[5px]"
              />
              <IconArrowDown />
              <div className="css-1dl95k flex flex-col font-['Libre_Franklin:Medium',_sans-serif] font-medium justify-center leading-[0] min-w-20 relative shrink-0 text-[#fcb426] text-[14px] text-center text-nowrap tracking-[1.12px] uppercase">
                <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">engage below</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}