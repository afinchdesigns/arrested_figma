import imgMeWithShadow21 from "figma:asset/ea5ad9246a7317a884b11e651236b7a31d6f7f41.png";
import AboutContentFrame from "../components/about/AboutContentFrame";
import { ABOUT_POSITIONING } from "../components/about/AboutImagePositioning";

export default function ArrestedMachineAbout1A() {
  return (
    <div className="relative w-full h-screen overflow-hidden" style={{
      background: 'radial-gradient(ellipse at 10% 75%, #DBDBDB 0%, #F6F6F6 100%)'
    }} data-name="ArrestedMachine_About-1a">
      {/* Background Image - positioned using optimized formula */}
      <div
        className="absolute inset-0 bg-no-repeat"
        data-name="me_withShadow2 1"
        style={{ 
          backgroundImage: `url('${imgMeWithShadow21}')`,
          filter: 'grayscale(100%) brightness(1.2) contrast(1.3)',
          backgroundSize: 'auto 100%',
          backgroundPosition: `${ABOUT_POSITIONING.OPTIMAL_IMAGE_POSITION} center`
        }}
      />
      
      {/* Content Container - keeps original size and centers content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[1369px] h-[769px] max-w-full max-h-full">
          <div
            className="absolute font-['Encode_Sans_Condensed:Black',_sans-serif] h-[297px] leading-[0] not-italic opacity-85 text-[#fcb426] text-[100px] text-left top-[82px] uppercase w-[673px] max-w-full"
            style={{ left: ABOUT_POSITIONING.TITLE_LEFT_POSITION }}
          >
            <p className="block leading-[89px]">Meet the man behind the machine.</p>
          </div>
          
          <div
            className="absolute flex flex-col font-['Libre_Barcode_39_Text:Regular',_sans-serif] h-[61px] justify-center leading-[0] not-italic text-[#352c27] text-[24px] text-left top-[375.5px] translate-y-[-50%] w-[383px] max-w-full"
            style={{ left: ABOUT_POSITIONING.TITLE_LEFT_POSITION }}
          >
            <p className="block leading-[38px] whitespace-pre-wrap">{`The  Gears  are  always  turning`}</p>
          </div>
          
          <AboutContentFrame />
        </div>
      </div>
    </div>
  );
}