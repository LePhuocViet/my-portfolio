"use client";

import React, { useState } from "react";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import { Box } from "@mui/material";
import { BoxDropItem } from "@/components/commons/box-drop-item/BoxDropItem";

const ExperienceData = [
  {
    title: "FrontEnd Developer",
    description:
      "I am proficient in building responsive and user-friendly interfaces using HTML, CSS, Next.js, and Material UI. I focus on creating modern UI/UX experiences that are optimized across devices and platforms.",
    icon: <StoreOutlinedIcon />,
    color: "#f3c9fd",
  },
  {
    title: "BackEnd Developer",
    description:
      "I have strong experience with JavaScript/TypeScript, Node.js, and NestJS, developing RESTful APIs and integrating WebSocket for real-time communication. I'm also familiar with implementing secure authentication using JWT, and integrating services like Firebase.",
    icon: <ExitToAppOutlinedIcon />,
    color: "#422f61",
  },
  {
    title: "Database",
    description:
      "I have worked with both relational and non-relational databases, including MySQL, MongoDB, and Redis, with a focus on designing efficient data structures, optimizing queries, and ensuring data consistency.",
    icon: <CloudDownloadOutlinedIcon />,
    color: "#637385",
  },
  {
    title: "Have Knowledge",
    description:
      "I’m familiar with tools and technologies like Swagger, Postman, GitLab, Docker, and deploying applications on VPS servers.",
    icon: <ThumbUpOffAltOutlinedIcon />,
    color: "#a8ffb0ff",
  },
];

export const Experience = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      {ExperienceData.map((item, index) => (
        <BoxDropItem
          key={index}
          title={item.title}
          description={item.description}
          icon={item.icon}
          color={item.color}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </Box>
  );
};
