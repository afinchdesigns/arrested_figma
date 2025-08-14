import React, { useState } from 'react';
import { Slider } from './ui/slider';

interface ImagePositionDebuggerProps {
  initialOffset?: number;
  onOffsetChange: (offset: number) => void;
}

const PRESET_POSITIONS = [
  { label: 'Far Left', value: -1500 },
  { label: 'Left Edge', value: -800 },
  { label: 'Tucked Behind', value: -10 },
  { label: 'Center Title', value: 0 },
  { label: 'Right of Title', value: 100 },
  { label: 'Right Edge', value: 800 },
  { label: 'Far Right', value: 1500 }
];

export default function ImagePositionDebugger({ initialOffset = -10, onOffsetChange }: ImagePositionDebuggerProps) {
  const [offset, setOffset] = useState(initialOffset);

  const handleSliderChange = (values: number[]) => {
    const newOffset = values[0];
    setOffset(newOffset);
    onOffsetChange(newOffset);
  };

  return (
    <div className="fixed top-4 left-4 z-50 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg min-w-[350px]">
      <div className="space-y-3">
        <h3 className="font-medium text-sm">Image Position Debugger</h3>
        
        <div className="space-y-2">
          <label className="text-xs text-gray-600">
            Horizontal Offset: {offset}px
          </label>
          <Slider
            value={[offset]}
            onValueChange={handleSliderChange}
            min={-2000}
            max={2000}
            step={10}
            className="w-full"
          />
        </div>
        
        {/* Quick preset buttons */}
        <div className="space-y-2">
          <div className="text-xs text-gray-600">Quick Presets:</div>
          <div className="flex flex-wrap gap-1">
            {PRESET_POSITIONS.map((preset) => (
              <button
                key={preset.label}
                onClick={() => handleSliderChange([preset.value])}
                className="px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded transition-colors"
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="text-xs text-gray-500">
          <div>Current position: calc(37.5% + {offset}px) center</div>
          <div className="mt-1">
            Range: -2000px to +2000px (covers full viewport)<br/>
            Negative values = moves image left<br/>
            Positive values = moves image right
          </div>
        </div>
      </div>
    </div>
  );
}