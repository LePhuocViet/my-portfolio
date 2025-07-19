"use client";

import { Box, Typography, IconButton } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Typewriter } from "react-simple-typewriter";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { BoxItem } from "@/components/commons/box-item/BoxItem";
import { Featured } from "@/components/commons/featured/Featured";

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

const FeaturedItems = [
  {
    title:
      "Personal Portfolio Showcasing Projects and Skills with Next.js (Personal Project)",
    image: "/feature/portfolio.jpg",
    url: "https://myblog.com",
    time: "Fri, July 18, 2025",
  },
  {
    title:
      "Invoice Management System for Hoang Long Port Logistics (Enterprise Project)",
    image: "/feature/hoanglong.jpg",
    url: "https://myblog.com",
    time: "Tue, April 1, 2025",
  },
  {
    title:
      "Language Sharing Forum with AI Integration for Learning Support (Graduation Project)",
    image: "/feature/forum.jpg",
    url: "https://myblog.com",
    time: "Sat, February 1, 2025",
  },
  {
    title:
      "Experimental Project with NestJS - Under Development (Personal Project)",
    image: "/feature/Nest.jpg",
    url: "https://myblog.com",
    time: "Fri, August 1, 2025",
  },
];

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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [checkEnd, setCheckEnd] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(getFormattedDate());
    }, 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, []);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.5;
      scrollRef.current.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setIsAtStart(scrollLeft <= 40);

    setCheckEnd(scrollLeft + clientWidth >= scrollWidth - 1);
  };
  return (
    <Box
      sx={{
        minHeight: "130vh",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box
        sx={{ flex: 6, position: "relative", boxShadow: 10, borderRadius: 10 }}
      >
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
          <EqualizerOutlinedIcon sx={{ color: "var(--lpv-core-white-0)" }} />
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

      <Box
        sx={{
          borderRadius: 2,
          backgroundColor: "var(--lpv-core-black-0)",
          position: "relative",
        }}
      >
        <Box sx={{ display: "flex", padding: 2 }}>
          <PushPinOutlinedIcon sx={{ color: "var(--lpv-core-white-0)" }} />
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "1.1rem",
              paddingLeft: 1,
              color: "var(--lpv-core-white-0)",
            }}
          >
            Featured
          </Typography>
        </Box>

        {!isAtStart && (
          <IconButton
            onClick={() => scroll("left")}
            sx={{
              position: "absolute",
              top: "50%",
              left: 8,
              zIndex: 2,
              transform: "translateY(-50%)",
              backgroundColor: "white",
              borderRadius: "50%",
              ":hover": {
                backgroundColor: "#333",
              },
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
        )}

        {!checkEnd && (
          <IconButton
            onClick={() => scroll("right")}
            sx={{
              position: "absolute",
              top: "50%",
              right: 8,
              zIndex: 2,
              transform: "translateY(-50%)",
              backgroundColor: "white",
              borderRadius: "50%",
              ":hover": {
                backgroundColor: "#333",
              },
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        )}
        <Box
          ref={scrollRef}
          onScroll={handleScroll}
          sx={{
            display: "flex",
            overflowX: "auto",
            ml: 2,
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
            scrollbarWidth: "none",
            px: 1,
            pb: 2,
            gap: 2,
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {FeaturedItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                // minWidth: "40%",
                flexShrink: 0,
                scrollSnapAlign: "start",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flex: 1,
                // m: 2,
                // pl: index === 0 ? 2 : 0,
                // pr: index === FeaturedItems.length - 1 ? 2 : 0,
              }}
            >
              <Featured {...item} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
