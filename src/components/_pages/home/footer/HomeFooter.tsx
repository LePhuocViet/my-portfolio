"use client";

import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box } from "@mui/material";

const HomeFooterList = [
  {
    title: "Facebook",
    url: "https://www.facebook.com/yourprofile",
    icon: <FacebookOutlinedIcon />,
  },
  {
    title: "Email",
    url: "mailto:youremail@example.com",
    icon: <EmailIcon />,
  },
  {
    title: "GitHub",
    url: "https://github.com/yourprofile",
    icon: <GitHubIcon />,
  },
];

export const HomeFooter = () => {
  return (
    <Box
      sx={{
        display: "flex",
        pl: 2,
      }}
    >
      {HomeFooterList.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: 1,
          }}
        >
          <Box
            sx={{
              marginRight: 1,
              color: "var(--lpv-core-white-0)",
              "&:hover": { cursor: "pointer" },
            }}
          >
            {item.icon}
          </Box>
        </Box>
      ))}
    </Box>
  );
};
