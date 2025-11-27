import { Marquee } from "./ui/marquee";
const images = [
  "/images/scroll-image/cover1.png",
  "/images/scroll-image/cover2.png",
  "/images/scroll-image/cover3.png",
  "/images/scroll-image/cover4.png",
  "/images/scroll-image/cover5.jpg",
];

const ImageCard = ({ src, alt }: { src: string; alt?: string }) => {
  return (
    <div className="flex items-center justify-center p-4">
      <div
        className={
          "relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden bg-neutral-900/20 shadow-lg"
        }
        aria-hidden={false}>
        <img
          src={src}
          alt={alt ?? "image"}
          className="w-full h-full object-cover"
          decoding="async"
        />
      </div>
    </div>
  );
};

export default function MarqueeSection() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {images.map((src, i) => (
          <ImageCard key={i} src={src} alt={`project ${i + 1}`} />
        ))}
      </Marquee>

      <div className="from-background pointer-events-none absolute  " />
      <div className="from-background pointer-events-none absolute " />
    </div>
  );
}
