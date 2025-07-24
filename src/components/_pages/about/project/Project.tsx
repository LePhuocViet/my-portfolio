import { ProjectItem } from "@/components/commons/project-item/ProjectItem";
import { Box } from "@mui/material";
import React from "react";

export const ProjectItemList = [
  {
    company: "HifivePlus Technology Solutions Company",
    name: "App Car Booking",
    startEnd: "05/2024 - Present",
    position: "FullStack Developer",
    teamMember: "10 Members",
    description:
      " A real-time car booking system that allows users to schedule rides in advance, supports driver assignment, deposit, and cancellation. It provides real-time notifications via WebSocket and Firebase, and manages various trip statuses.",
    frontEndTech: "TypeScript, NextJs, Material UI",
    backEndTech:
      "TypeScript, Node.js, NestJs, MongoDB, WebSocket, Firebase, Docker",
    responsibilities: [
      "Consumed APIs to display dynamic data on the frontend.",
      "Developed ride booking and driver assignment features.",
      "Integrated real-time trip updates via WebSocket.",
      "Implemented push notifications using Firebase.",
      "Built wallet system with balance tracking and transactions.",
      "Handled deposits, payments, and trip status flow.",
    ],
  },
];

export const Project = () => {
  return (
    <Box
      sx={{
        px: 2,
      }}
    >
      {ProjectItemList.map((item, index) => (
        <ProjectItem
          key={index}
          company={item.company}
          name={item.name}
          startEnd={item.startEnd}
          position={item.position}
          teamMember={item.teamMember}
          description={item.description}
          frontEndTech={item.frontEndTech}
          backEndTech={item.backEndTech}
          responsibilities={item.responsibilities}
        />
      ))}
    </Box>
  );
};
