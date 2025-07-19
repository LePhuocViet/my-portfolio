"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Box } from "@mui/material";

const iconList1 = [
  "/logo/java-scrip.png",
  "/logo/css.png",
  "/logo/html.png",
  "/logo/typescript.png",
  "/logo/nestjs.png",
  "/logo/nextjs.png",
  "/logo/vs.png",
  "/logo/github.png",
  "/logo/gitlab.png",
  "/logo/docker.png",
];

export default function Technologies() {
  const duplicatedList = [...iconList1, ...iconList1];
  const containerRef = useRef<HTMLDivElement>(null);
  const [centerX, setCenterX] = useState(0);
  const [highlightedIdx, setHighlightedIdx] = useState<number | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      setCenterX(container.offsetWidth / 2);
    }
  }, []);

  return (
    <Box sx={{ overflow: "hidden", width: "100%", whiteSpace: "nowrap" }}>
      <motion.div
        style={{ display: "inline-flex", gap: "1rem" }}
        animate={{ x: ["0%", "-52%"] }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedList.map((src, idx) => (
          <Box key={`icon-${idx}`}>
            <Image src={src} alt={`icon-${idx}`} width={40} height={40} />
          </Box>
        ))}
      </motion.div>
    </Box>
  );
}
