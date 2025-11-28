"use client";

import { useOutsideClick } from "@/hooks/use-outside-click";
import { cn } from "@/lib/utils";
import { IconX } from "@tabler/icons-react";
import { MoveUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React, {
  createContext,
  ImgHTMLAttributes,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

/* ============================================================
   TYPES
============================================================ */

interface CarouselProps {
  items: React.ReactNode[];
}

type CardType = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
  size?: "sm" | "md" | "lg";
  tags?: string[]; // ⭐ Added tags
};

/* ============================================================
   CONTEXT
============================================================ */

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

/* ============================================================
   CAROUSEL (BENTO GRID)
============================================================ */

export const Carousel = ({ items }: CarouselProps) => {
  return (
    <CarouselContext.Provider
      value={{
        onCardClose: () => {},
        currentIndex: 0,
      }}>
      <div className="relative w-full p-6 md:p-8">
        <div
          className={cn(
            "grid w-full max-w-7xl mx-auto gap-4 px-6",
            "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
            "auto-rows-[14rem] my-12"
          )}>
          {items.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.15 * index },
              }}
              key={"card" + index}
              className="rounded-3xl overflow-hidden">
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

/* ============================================================
   CARD
============================================================ */

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: CardType;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  /* Escape key handler */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.body.style.overflow = open ? "hidden" : "auto";
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  const sizeClass = {
    sm: "col-span-1 row-span-1",
    md: "col-span-2 row-span-1",
    lg: "col-span-2 row-span-2",
  }[card.size || "sm"];

  return (
    <>
      {/* ============================================================
         MODAL
      ============================================================ */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              ref={containerRef}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              className="relative z-[60] mx-auto my-10 max-w-5xl rounded-3xl bg-white dark:bg-neutral-900 p-6 md:p-10">
              <button
                className="sticky top-4 right-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-black dark:bg-white"
                onClick={handleClose}>
                <IconX className="h-6 w-6 text-white dark:text-black" />
              </button>

              <p className="text-base font-medium text-neutral-500">
                {card.category}
              </p>

              <p className="mt-4 text-3xl font-bold md:text-5xl">
                {card.title}
              </p>
              {card.tags && (
                <div className="flex flex-wrap gap-2 mt-8">
                  {card.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-1 rounded-full bg-black/10 backdrop-blur-md text-neutral-900 text-xs md:text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <div className="py-10">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ============================================================
         CARD ITEM
      ============================================================ */}
      <div
        className={cn(
          "relative flex h-full w-full overflow-hidden rounded-3xl",
          "bg-gray-200 dark:bg-neutral-900",
          sizeClass
        )}>
        {/* Background Image */}
        <BlurImage
          alt={card.title}
          src={card.src}
          className="absolute inset-0 object-cover z-10"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/50 via-transparent to-black/70" />

        {/* TEXT + TAGS */}
        <div className="relative z-30 p-4 md:p-6 text-white">
          <p className="text-sm opacity-80">{card.category}</p>

          <p className="mt-1 text-xl md:text-3xl font-semibold">{card.title}</p>

          {/* ⭐ TAG PILLS */}
          {card.tags && (
            <div className="flex flex-wrap gap-2 mt-14">
              {card.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-neutral-200 text-xs md:text-sm">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* OPEN BUTTON */}
        <button
          onClick={handleOpen}
          className="absolute right-3 bottom-3 z-40
            h-12 w-12 rounded-full 
            bg-black/90 dark:bg-white/90
            flex items-center justify-center
            shadow-xl
            hover:scale-110 transition-all duration-200">
          <MoveUpRight className="h-6 w-6 text-white dark:text-black" />
        </button>
      </div>
    </>
  );
};

/* ============================================================
   BLUR IMAGE
============================================================ */

interface BlurImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  src: string;
}

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt = "image",
  ...rest
}: BlurImageProps) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <img
      className={cn(
        "h-full w-full object-cover transition duration-500",
        isLoading ? "blur-sm scale-105" : "blur-sm scale-100",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      alt={alt}
      {...rest}
    />
  );
};
