"use client";
import { Featured } from "@/components/commons/featured/Featured";
import { Box, IconButton } from "@mui/material";
import React, { useRef, useState } from "react";
import { AboutInfo } from "../about-info/AboutInfo";
import { Title } from "@/components/commons/title/Title";
import PersonIcon from "@mui/icons-material/Person";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { FeaturedItems } from "../../home/page/Home";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import { AboutTitle } from "../about-title/AboutTitle";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { Project } from "../project/Project";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import { ItemExperience } from "@/components/commons/item-experience/Education";
export const AboutPage = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [checkEnd, setCheckEnd] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true);

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
        width: {
          xs: "100%",
          md: "calc(100% + 31.3%)",
        },
        height: {
          xs: "auto",
          md: "195vh",
        },
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        boxSizing: "border-box",
        overflow: { xs: "visible", md: "hidden" },
        gap: { xs: 2, md: 0 },
      }}
    >
      <Box
        sx={{
          flex: 1,
          mr: { xs: 0, md: 1 },
          width: "100%",
          height: { xs: "auto", md: "100%" },
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box
          sx={{
            height: { xs: "30vh", md: "38vh" },
            backgroundColor: "var(--lpv-core-black-0)",
            borderRadius: 2,
          }}
        >
          <AboutInfo />
        </Box>
        <Box
          sx={{
            backgroundColor: "var(--lpv-core-black-0)",
            borderRadius: 2,
          }}
        >
          <Title text="About Me" icon={<PersonIcon />} />
          <AboutTitle />
        </Box>

        <Box
          sx={{
            flex: { xs: "none", md: 1 },
            backgroundColor: "var(--lpv-core-black-0)",
            borderRadius: 2,
            position: "relative",
            minHeight: { xs: "35vh", md: "auto" },
            mb: { xs: 2, md: 0 },
          }}
        >
          <Title text="Featured" icon={<PushPinOutlinedIcon />} />

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
              <ChevronLeftIcon
                sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}
              />
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
              <ChevronRightIcon
                sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}
              />
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
                    md: "62.79%",
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
        <Box
          sx={{
            flex: { xs: 2, md: 1 },
            backgroundColor: "var(--lpv-core-black-0)",
            borderRadius: 2,
            pb: 2,
          }}
        >
          <Title text="Projects Experience" icon={<FolderOpenIcon />} />
          <Project />
        </Box>
      </Box>

      <Box
        sx={{
          flex: { xs: "none", md: 1 },
          height: { xs: "auto", md: "55vh" },
          width: "100%",
          display: { xs: "block", md: "flex" },
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box
          sx={{
            flex: { xs: "none", md: 1 },
            backgroundColor: "var(--lpv-core-black-0)",
            borderRadius: 2,
            pb: 2,
            mb: { xs: 2, md: 0 },
            minHeight: { xs: "25vh", md: "auto" },
          }}
        >
          <Title text="Education" icon={<SchoolOutlinedIcon />} />
          <ItemExperience
            title="Duy Tan University"
            description="Information Technology"
            date="2021 - 2025"
            imageSrc="/dtu/dtu.png"
            moreInfo="GPA: 3.71"
          />
        </Box>
        <Box
          sx={{
            flex: { xs: "none", md: 1 },
            backgroundColor: "var(--lpv-core-black-0)",
            borderRadius: 2,
            minHeight: { xs: "30vh", md: "auto" },
          }}
        >
          <Title text="Experience" icon={<ApartmentOutlinedIcon />} />
          <ItemExperience
            title="HifivePlus Technology JSC"
            description="FullStack Developer"
            date="12/2024 - Present"
            imageSrc="/hifive/hifive.png"
          />
        </Box>
      </Box>
    </Box>
  );
};
