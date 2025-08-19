import * as React from 'react';
import { useState } from 'react';
import svgPaths from "./svg-b3d20xiacy";

interface DebugPanelProps {
  cardWidth: number;
  onWidthChange: (width: number) => void;
}

function DebugPanel({ cardWidth, onWidthChange }: DebugPanelProps) {
  // Convert pixel values to percentages (416px is our baseline 100%)
  const baselineWidth = 416;
  const currentPercentage = Math.round((cardWidth / baselineWidth) * 100);
  
  const handlePercentageChange = (percentage: number) => {
    const newWidth = Math.round((percentage / 100) * baselineWidth);
    onWidthChange(newWidth);
  };

  return (
    <div className="fixed top-4 right-4 bg-white p-4 rounded-lg shadow-lg z-50">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">
          Card Width: {currentPercentage}%
        </label>
        <input
          type="range"
          min="50"
          max="150"
          value={currentPercentage}
          onChange={(e) => handlePercentageChange(Number(e.target.value))}
          className="w-48"
        />
      </div>
    </div>
  );
}

interface Project {
  company: string;
  title: string;
  description: string;
}

interface ProjectCardProps {
  project: Project;
  cardWidth: number;
}

function ChipSmall({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded size-full" data-name="chip--small">
      <div
        aria-hidden="true"
        className="absolute border border-[#fec44a] border-solid inset-0 pointer-events-none rounded"
      />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center px-1 py-1 relative size-full">
          <div className="css-gsq8tl flex flex-col font-['Verdana:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#352c27] text-[8px] text-left text-nowrap tracking-[0.4px]">
            <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">{children}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Layer2() {
  return (
    <div className="relative size-full" data-name="Layer_1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16">
        <g clipPath="url(#clip0_1_1183)" id="Layer_1">
          <path d={svgPaths.p2f784700} fill="var(--fill-0, #231F20)" id="Vector" />
          <path d={svgPaths.p3df59280} fill="var(--fill-0, #231F20)" id="Vector_2" />
          <path d={svgPaths.p277d6d00} fill="var(--fill-0, #231F20)" id="Vector_3" />
          <path d={svgPaths.p2ba75e00} fill="var(--fill-0, #231F20)" id="Vector_4" />
          <path d={svgPaths.p2734b580} fill="var(--fill-0, #231F20)" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1183">
            <rect fill="white" height="16.0025" width="14.0483" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconArrowRight1() {
  return (
    <div className="relative shrink-0 size-4" data-name="icon--arrow--right">
      <div className="absolute flex inset-[6.11%_-0.18%_6.09%_0.17%] items-center justify-center">
        <div className="flex-none h-[16.003px] rotate-[270deg] w-[14.048px]">
          <Layer2 />
        </div>
      </div>
    </div>
  );
}

function Layer3() {
  return (
    <div className="absolute bottom-0 left-[6.27%] right-[5.96%] top-0" data-name="Layer_1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16">
        <g clipPath="url(#clip0_1_661)" id="Layer_1">
          <path d={svgPaths.p1cf2f500} fill="var(--fill-0, #231F20)" id="Vector" />
          <path d={svgPaths.p2c52eb80} fill="var(--fill-0, #231F20)" id="Vector_2" />
          <path d="M2.00627 8H0V10H2.00627V8Z" fill="var(--fill-0, #231F20)" id="Vector_3" />
          <path d={svgPaths.p363b8b00} fill="var(--fill-0, #231F20)" id="Vector_4" />
          <path d={svgPaths.p2ef8d180} fill="var(--fill-0, #231F20)" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_1_661">
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
      <Layer3 />
    </div>
  );
}

function ProjectCard({ project, cardWidth }: ProjectCardProps) {
  return (
    <div 
      className="bg-[#ffffff] rounded-[5px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.15)] p-6 flex flex-col h-fit"
      style={{ width: `${cardWidth}px` }}>
      {/* Company and Title */}
      <div className="font-franklin font-semibold leading-[0] text-left tracking-[0.64px] uppercase text-[#352c27] mb-6">
        <p className="leading-[20px]">
          <span className="font-franklin font-medium text-[14px] block mb-1">{project.company}</span>
          <span className="adjustLetterSpacing text-[20px] block">{project.title}</span>
        </p>
      </div>

      {/* Description */}
      <div className="font-['Verdana:Regular',_'Noto_Sans:Regular',_sans-serif] leading-[24px] text-[#352c27] text-[14px] text-left tracking-[-0.13px] mb-6">
        <p className="adjustLetterSpacing">
          {project.description}
        </p>
      </div>
      
      {/* Skills Chips */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-1.5 mb-1.5">
          <div className="h-[22px] w-[65px]">
            <ChipSmall>Visual Design</ChipSmall>
          </div>
          <div className="h-[22px] w-[60px]">
            <ChipSmall>UX Research</ChipSmall>
          </div>
          <div className="h-[22px] w-[55px]">
            <ChipSmall>Prototyping</ChipSmall>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5">
          <div className="h-[22px] w-[60px]">
            <ChipSmall>User Testing</ChipSmall>
          </div>
          <div className="h-[22px] w-[85px]">
            <ChipSmall>Interaction Design</ChipSmall>
          </div>
          <div className="h-[22px] w-[85px]">
            <ChipSmall>Info Architecture</ChipSmall>
          </div>
        </div>
      </div>
      
      {/* Case Details Button */}
      <div className="flex justify-end mt-auto pt-4">
        <div className="box-border content-stretch flex flex-row gap-2 h-[32px] items-center justify-end px-2 py-2 w-[120px]" data-name="btn--noFrame">
          <div className="css-u2kawj flex flex-col font-franklin font-[574] justify-center leading-[0] relative shrink-0 text-[#352c27] text-[12px] text-center text-nowrap tracking-[1.12px] uppercase">
            <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">Case details</p>
          </div>
          <IconArrowRight1 />
        </div>
      </div>
    </div>
  );
}

export default function ArrestedMachineCasesVerticalCarousel1A() {
  const [cardWidth, setCardWidth] = useState(416);
  const projects = [
    {
      company: "DocuWare",
      title: "Workflow Designer",
      description: "A comprehensive workflow automation platform that enables organizations to design, implement, and optimize their business processes with intuitive drag-and-drop functionality."
    },
    {
      company: "HYPE Innovation", 
      title: "AI Integration",
      description: "A unified, AI‑powered dashboard that seamlessly connects HYPE's enterprise innovation tools, making cross‑product discovery intuitive and efficient."
    },
    {
      company: "Intel & Seagate",
      title: "E-learning Platform", 
      description: "An advanced educational platform designed to deliver interactive learning experiences for technology professionals, featuring multimedia content and progress tracking."
    }
  ];

  return (
    <div className="relative w-full h-screen bg-[#352c27] overflow-hidden py-16" data-name="ArrestedMachine_Cases_verticalCarousel-1a">
      <div className="relative h-full w-full mx-auto max-w-[1369px] flex">
        {/* Left Content Column - width adjusts based on card width */}
        <div className="relative" style={{ width: `calc(100% - ${cardWidth + 64}px)` }}>
          {/* Main Headline */}
          <div className="absolute left-[6.25%] top-32" style={{ width: `min(586px, 90%)` }}>
            <div className="font-encode leading-[0] not-italic opacity-95 text-[#ffffff] text-[100px] text-left uppercase">
              <p className="block leading-[89px]">dig into the nuts and bolts.</p>
            </div>
          </div>
          
          {/* Barcode Text */}
          <div className="absolute left-[6.25%] top-[428.5px] -translate-y-1/2" style={{ width: `min(738px, 90%)` }}>
            <div className="flex flex-col font-barcode h-[61px] justify-center leading-[0] not-italic text-[#fcb426] text-[24px] text-left">
              <p className="block leading-[38px] whitespace-pre-wrap">get into the gears of it all</p>
            </div>
          </div>
            
            {/* Description */}
            <div className="absolute left-[6.25%] top-[463px]" style={{ width: `min(586px, 90%)` }}>
              <div className="font-['Verdana:Regular',_sans-serif] leading-[27px] not-italic text-[#ffffff] text-[16px] text-left">
                <p className="block mb-[11px]">Each project represents a careful balance of user research, strategic thinking, and thoughtful craft. I believe exceptional digital experiences emerge when we deeply understand the people we're designing for.</p>
              </div>
            </div>

          {/* Bottom Buttons */}
          <div className="absolute left-[6.25%] top-[594px] flex gap-4">
            <div className="relative bg-[#ffffff] box-border content-stretch flex flex-row gap-2 h-[42px] items-center justify-center px-6 py-4 rounded-[5px]" data-name="btn--primary">
              <div aria-hidden="true" className="absolute border-2 border-[#ffffff] border-solid inset-0 pointer-events-none rounded-[5px]" />
              <IconArrowDown />
              <div className="css-u2kawj flex flex-col font-franklin font-medium justify-center leading-[0] min-w-20 relative shrink-0 text-[#352c27] text-[14px] text-center text-nowrap tracking-[1.12px] uppercase">
                <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">The operator</p>
              </div>
            </div>
            
            <div className="relative box-border content-stretch flex flex-row gap-2 h-[42px] items-center justify-center px-6 py-4 rounded-[5px]" data-name="btn--primary">
              <div aria-hidden="true" className="absolute border-2 border-[#fcb426] border-solid inset-0 pointer-events-none rounded-[5px]" />
              <div className="css-1dl95k flex flex-col font-franklin font-medium justify-center leading-[0] min-w-20 relative shrink-0 text-[#fcb426] text-[14px] text-center text-nowrap tracking-[1.12px] uppercase">
                <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">More Work</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Project Cards */}
        <div style={{ width: `${cardWidth + 64}px` }} className="h-full flex items-center">
          <div className="flex flex-col gap-8 overflow-y-auto max-h-full py-16 pr-4">
            {projects.map((project, index) => (
              <div key={index} className="flex-shrink-0">
                <ProjectCard project={project} cardWidth={cardWidth} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <DebugPanel cardWidth={cardWidth} onWidthChange={setCardWidth} />
    </div>
  );
}
