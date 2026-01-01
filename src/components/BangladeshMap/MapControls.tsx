import { Plus, Minus, Layers } from "lucide-react";


interface MapControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onToggleLayers?: () => void;
}

export const MapControls = ({ onZoomIn, onZoomOut, onToggleLayers }: MapControlsProps) => {
  return (
    <>
      {/* Zoom Controls */}
      <div className="absolute top-4 left-4 z-20 flex flex-col gap-0.5 bg-card rounded-md shadow-lg overflow-hidden border border-border">
        <button
          
          onClick={onZoomIn}
          className="rounded-none h-9 w-9 hover:bg-secondary"
        >
          <Plus className="h-4 w-4" />
        </button>
        <div className="h-px bg-border" />
        <button
          
          onClick={onZoomOut}
          className="rounded-none h-9 w-9 hover:bg-secondary"
        >
          <Minus className="h-4 w-4" />
        </button>
      </div>

      {/* Attribution */}
      <div className="absolute top-4 right-16 z-20 text-xs text-muted-foreground bg-card/80 backdrop-blur-sm px-2 py-1 rounded">
        MapLibre | Mapbox
      </div>

      {/* Layer Toggle */}
      <button
        onClick={onToggleLayers}
        className="absolute top-4 right-4 z-20 h-10 w-10 bg-card shadow-lg"
      >
        <Layers className="h-5 w-5" />
      </button>
    </>
  );
};
