"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Typewriter } from "react-simple-typewriter"; // ✅ import thư viện

function getFormattedDate(): string {
  const now: Date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  return now.toLocaleDateString("en-US", options);
}

const Title = ["Welcome to my portfolio.", "Deploy ideas into reality."];

export const HomePage = () => {
  const [date, setDate] = useState(getFormattedDate());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(getFormattedDate());
    }, 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        minHeight: "110vh",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box
        sx={{ flex: 5, position: "relative", boxShadow: 10, borderRadius: 10 }}
      >
        <Box>
          <Image
            src="/home/home.jpg"
            alt="Description"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: 10,
            }}
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            color: "var(--lpv-core-white-0)",
            alignItems: "center",
            justifyContent: "center",
            pt: 3,
            pl: 3,
            display: "flex",
          }}
        >
          <CalendarMonthIcon sx={{ fontSize: "1.2rem" }} />
          <Box
            sx={{
              pl: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.9rem",
              fontWeight: 500,
            }}
          >
            {date}
          </Box>
        </Box>

        <Box
          sx={{
            position: "absolute",
            color: "var(--lpv-core-white-0)",
            alignItems: "center",
            justifyContent: "center",
            bottom: 24,
            left: 24,
            display: "flex",
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "2.2rem",
              fontFamily: "monospace",
            }}
          >
            <Typewriter
              words={Title}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </Typography>
        </Box>
      </Box>

      <Box sx={{ flex: 3, backgroundColor: "blue" }}>123</Box>
      <Box sx={{ flex: 4, backgroundColor: "yellow" }}>123</Box>
    </Box>
  );
};
