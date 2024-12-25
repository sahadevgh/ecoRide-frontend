import { GradientGrid } from "./GradientGrid";
import { Beams } from "../utils/Beams";
import Content from "./Content";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-bg-color h-screen flex justify-center items-center"
    style={{
      minHeight: "calc(100vh - 64px)", 
      backgroundImage: "url(/images/green.webp)",
      backgroundSize: "cover",
      }}>
         {/* Overlay */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background: "rgba(0, 0, 0, .8)", // Semi-transparent black overlay
          zIndex: 1,
        }}
      ></div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
      <Content />
      <Beams />
      {/* <GradientGrid /> */}
      </div>
    </section>
  );
};
