"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Typewriter } from "react-simple-typewriter";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import { BoxItem } from "@/components/commons/box-item/BoxItem";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
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

const InfoItem = [
  {
    title: "Experience",
    value: 6,
    icon: <WorkOutlineOutlinedIcon />,
    color: "#9999",
    text: "months",
    isDecimal: false,
  },
  {
    title: "Projects",
    value: 3,
    icon: <CreateNewFolderOutlinedIcon />,
    color: "#e4f567",
    text: "",
    isDecimal: false,
  },
  {
    title: "Technologies",
    value: 20,
    icon: <CodeOutlinedIcon />,
    color: "#58b4f1ff",
    text: "",
    isDecimal: false,
  },
  {
    title: "Toeic",
    value: 640,
    icon: <TrendingUpOutlinedIcon />,
    color: "#36a6f1ff",
    isDecimal: false,
  },
];

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
        sx={{ flex: 6, position: "relative", boxShadow: 10, borderRadius: 10 }}
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
              pl: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1rem",
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
              fontSize: "2.5rem",
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

      <Box
        sx={{
          backgroundColor: "var(--lpv-core-black-0)",
          borderRadius: 2,
        }}
      >
        <Box sx={{ display: "flex", padding: 2 }}>
          <EqualizerOutlinedIcon
            sx={{
              color: "var(--lpv-core-white-0)",
            }}
          />
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "1.1rem",
              paddingLeft: 1,
              color: "var(--lpv-core-white-0)",
            }}
          >
            Career Stats
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pl: 2,
            pr: 2,
            pb: 2,
          }}
        >
          {InfoItem.map((item, index) => (
            <BoxItem
              key={index}
              title={item.title}
              value={item.value}
              icon={item.icon}
              color={item.color}
              text={item.text}
              isDecimal={item.isDecimal}
            />
          ))}
        </Box>
      </Box>
      <Box sx={{ flex: 4, backgroundColor: "yellow" }}>123</Box>
    </Box>
  );
};
