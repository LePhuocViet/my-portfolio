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

export const FeaturedItems = [
  {
    title:
      "Personal Portfolio Showcasing Projects and Skills with Next.js (Personal Project)",
    image: "/feature/portfolio.jpg",
    url: "https://github.com/LePhuocViet/my-portfolio",
    time: "Fri, July 18, 2025",
  },
  {
    title:
      "Invoice Management System for Hoang Long Port Logistics (Enterprise Project)",
    image: "/feature/hoanglong.jpg",
    url: "https://hoanglonglti.id.vn/login.html",
    time: "Tue, April 1, 2025",
  },
  {
    title:
      "Language Sharing Forum with AI Integration for Learning Support (Graduation Project)",
    image: "/feature/forum.jpg",
    url: "https://github.com/LePhuocViet/Forum-Api",
    time: "Sat, February 1, 2025",
  },
  {
    title:
      "Experimental Project with NestJS - Under Development (Personal Project)",
    image: "/feature/Nest.jpg",
    url: "",
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
        minHeight: "110vh",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box
        sx={{
          // flex: {
          //   xs: 1,
          //   md: 1,
          //   lg: 1,
          // },
          minHeight: "45vh",
          position: "relative",
          boxShadow: 10,
          borderRadius: 10,
        }}
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
            pt: { xs: 2, md: 3 },
            pl: { xs: 2, md: 3 },
            display: "flex",
          }}
        >
          <CalendarMonthIcon sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }} />
          <Box
            sx={{
              pl: { xs: 1, md: 2 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: { xs: "0.85rem", md: "1rem" },
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
            bottom: { xs: 16, md: 24 },
            left: { xs: 16, md: 24 },
            display: "flex",
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: {
                xs: "1.2rem",
                sm: "1.8rem",
                md: "2.5rem",
              },
              fontFamily: "monospace",
              textAlign: { xs: "left", md: "left" },
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
          flex: 1,
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
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            alignItems: "center",
            justifyContent: "center",
            pl: 2,
            pr: 2,
            pb: 2,
            gap: { xs: 1, sm: 0 },
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
          flex: 1,
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
              left: { xs: 4, md: 8 },
              zIndex: 2,
              transform: "translateY(-50%)",
              backgroundColor: "white",
              borderRadius: "50%",
              width: { xs: 32, md: 40 },
              height: { xs: 32, md: 40 },
              ":hover": {
                backgroundColor: "#333",
              },
            }}
          >
            <ChevronLeftIcon sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }} />
          </IconButton>
        )}

        {!checkEnd && (
          <IconButton
            onClick={() => scroll("right")}
            sx={{
              position: "absolute",
              top: "50%",
              right: { xs: 4, md: 8 },
              zIndex: 2,
              transform: "translateY(-50%)",
              backgroundColor: "white",
              borderRadius: "50%",
              width: { xs: 32, md: 40 },
              height: { xs: 32, md: 40 },
              ":hover": {
                backgroundColor: "#333",
              },
            }}
          >
            <ChevronRightIcon sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }} />
          </IconButton>
        )}
        <Box
          ref={scrollRef}
          onScroll={handleScroll}
          sx={{
            display: "flex",
            overflowX: "auto",
            ml: { xs: 1, md: 2 },
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
            scrollbarWidth: "none",
            px: 1,
            pb: 2,
            gap: { xs: 1, md: 2 },
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {FeaturedItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                minWidth: {
                  xs: "85%",
                  sm: "45%",
                  md: "40%",
                },
                flexShrink: 0,
                scrollSnapAlign: "start",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flex: { xs: "none", md: 1 },
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
