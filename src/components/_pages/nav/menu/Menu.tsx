"use client";

import { ButtonMenu } from "@/components/commons/button-menu/ButtonMenu";
import { Box } from "@mui/material";
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

export const Menu = () => {
  const router = useRouter();
  const pathname = usePathname(); // Dùng để check selected

  const handleClick = (url: string) => {
    if (url !== pathname) {
      router.push(url);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "var(--lpv-core-black-0)",
        width: "100%",
        height: "100%",
      }}
    >
      {MenuItems.map((item, index) => (
        <ButtonMenu
          key={index}
          icon={item.icon}
          label={item.label}
          isSelected={pathname === item.url}
          onClick={() => handleClick(item.url)}
        />
      ))}
    </Box>
  );
};
