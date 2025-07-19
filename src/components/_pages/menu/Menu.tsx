"use client";

import { ButtonMenu } from "@/components/commons/button-menu/ButtonMenu";
import { Box, Button } from "@mui/material";
import { url } from "inspector";
import React, { use, useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";

const MenuItems = [
  {
    label: "Home",
    icon: <HomeOutlinedIcon />,
    url: "/home",
    isSelected: true,
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
  const [selectedUrl, setSelectedUrl] = useState("/home");

  const handlerClickButton = (url: string) => {
    if (url === selectedUrl) return;
    setSelectedUrl(url);
    console.log(`${url} clicked`);
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
          isSelected={selectedUrl === item.url}
          onClick={() => handlerClickButton(item.url)}
        />
      ))}
    </Box>
  );
};
