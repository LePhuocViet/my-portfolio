"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Box } from "@mui/material";

const iconList = [
  "/logo/java-scrip.png",
  "/logo/css.png",
  "/logo/html.png",
  "/logo/typescript.png",
  "/logo/nextjs.png",
  "/logo/nestjs.jpg",
  "/logo/gitlab.png",
  "/logo/docker.png",
];

export default function Technologies() {
  const duplicatedList = [...iconList, ...iconList, ...iconList, ...iconList]; // Giảm số lượng để dễ debug
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<(HTMLImageElement | null)[]>([]);
  const [centerX, setCenterX] = useState(0);
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);

  useEffect(() => {
    const updateCenter = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        setCenterX(container.offsetWidth / 2);
      }
    };

    updateCenter();
    window.addEventListener("resize", updateCenter);
    return () => window.removeEventListener("resize", updateCenter);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      let closestIndex: number | null = null;
      let closestDistance = Infinity;

      iconRefs.current.forEach((ref, idx) => {
        if (ref && containerRef.current) {
          const rect = ref.getBoundingClientRect();
          const containerRect = containerRef.current.getBoundingClientRect();
          const iconCenter = rect.left + rect.width / 2;
          const containerCenter = containerRect.left + containerRect.width / 2;
          const distance = Math.abs(iconCenter - containerCenter);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = idx;
          }
        }
      });

      setHighlightedIndex(closestIndex);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        overflow: "hidden",
        width: "100%",
        whiteSpace: "nowrap",
      }}
    >
      <motion.div
        style={{
          margin: "20px 0",
          display: "flex",
          width: "fit-content",
        }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 40,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <Box sx={{ display: "flex", gap: 4 }}>
          {duplicatedList.map((src, idx) => (
            <Image
              key={`icon-${idx}`}
              src={src}
              alt={`icon-${idx}`}
              width={40}
              height={40}
              ref={(el) => (iconRefs.current[idx] = el)}
              style={{
                transition: "all 0.3s ease",
                filter:
                  highlightedIndex === idx
                    ? "brightness(1.5)"
                    : "brightness(0.4)",
                transform: highlightedIndex === idx ? "scale(1.3)" : "scale(1)",
              }}
            />
          ))}
        </Box>
      </motion.div>
    </Box>
  );
}
