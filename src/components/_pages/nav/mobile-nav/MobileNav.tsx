"use client";

import { Box, Typography } from "@mui/material";
import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import { useRouter, usePathname } from "next/navigation";

const MenuItems = [
  {
    label: "Home",
    icon: <HomeOutlinedIcon />,
    url: "/home",
  },
  {
    label: "About",
    icon: <PersonOutlineOutlinedIcon />,
    url: "/about",
  },
  {
    label: "Experience",
    icon: <WorkOutlineOutlinedIcon />,
    url: "/experience",
  },
  {
    label: "Projects",
    icon: <CreateNewFolderOutlinedIcon />,
    url: "/projects",
  },
];

export const MobileNav = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (url: string) => {
    if (url !== pathname) {
      router.push(url);
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: "var(--lpv-core-black-0)",
        borderBottom: "1px solid #333",
        display: { xs: "flex", md: "none" },
        alignItems: "center",
        justifyContent: "space-around",
        padding: "8px 0",
        boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
      }}
    >
      {MenuItems.map((item, index) => (
        <Box
          key={index}
          onClick={() => handleClick(item.url)}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
            padding: "8px 12px",
            borderRadius: 2,
            transition: "all 0.2s ease",
            backgroundColor:
              pathname === item.url
                ? "rgba(255, 255, 255, 0.1)"
                : "transparent",
            ":hover": {
              backgroundColor: "rgba(255, 255, 255, 0.05)",
            },
          }}
        >
          <Box
            sx={{
              color:
                pathname === item.url ? "#58b4f1ff" : "var(--lpv-core-white-0)",
              opacity: pathname === item.url ? 1 : 0.7,
              fontSize: "1.2rem",
              mb: 0.5,
            }}
          >
            {item.icon}
          </Box>
          <Typography
            sx={{
              fontSize: "0.65rem",
              fontWeight: pathname === item.url ? 600 : 400,
              color:
                pathname === item.url ? "#58b4f1ff" : "var(--lpv-core-white-0)",
              opacity: pathname === item.url ? 1 : 0.7,
              textAlign: "center",
            }}
          >
            {item.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
