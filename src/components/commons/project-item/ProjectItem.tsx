import { Box, Typography } from "@mui/material";
import React from "react";

interface ProjectItemProps {
  company: string;
  name: string;
  startEnd: string;
  position: string;
  teamMember: string;
  description: string;
  frontEndTech: string;
  backEndTech: string;
  responsibilities: string[];
}
export const ProjectItem = ({
  company,
  name,
  startEnd,
  position,
  teamMember,
  description,
  frontEndTech,
  backEndTech,
  responsibilities,
}: ProjectItemProps) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            color: "var(--lpv-core-white-0)",
            fontSize: "0.9rem",
            fontWeight: 500,
          }}
        >
          {company}
        </Typography>
        <Typography
          sx={{
            color: "var(--lpv-core-white-0)",
            fontSize: "0.9rem",
            fontWeight: 500,
            fontStyle: "italic",
          }}
        >
          {startEnd}
        </Typography>
      </Box>
      <Box
        sx={{
          pt: 1,
        }}
      >
        <Typography
          sx={{
            color: "var(--lpv-core-white-0)",
            fontSize: "0.8rem",
            fontWeight: 400,
          }}
        >
          Project Name: {name}
        </Typography>
      </Box>
      <Box
        sx={{
          pt: 0.5,
        }}
      >
        <Typography
          sx={{
            color: "var(--lpv-core-white-0)",
            fontSize: "0.8rem",
            fontWeight: 400,
          }}
        >
          Position: {position}
        </Typography>
      </Box>
      <Box
        sx={{
          pt: 0.5,
        }}
      >
        <Typography
          sx={{
            color: "var(--lpv-core-white-0)",
            fontSize: "0.8rem",
            fontWeight: 400,
          }}
        >
          Team Member: {teamMember}
        </Typography>
      </Box>
      <Box
        sx={{
          pt: 0.5,
        }}
      >
        <Typography
          sx={{
            color: "var(--lpv-core-white-0)",
            fontSize: "0.8rem",
            fontWeight: 400,
          }}
        >
          Description: {description}
        </Typography>
      </Box>
      <Box
        sx={{
          pt: 0.5,
        }}
      >
        <Typography
          sx={{
            color: "var(--lpv-core-white-0)",
            fontSize: "0.8rem",
            fontWeight: 400,
          }}
        >
          Technology:
        </Typography>
      </Box>
      <Box
        sx={{
          pt: 0.5,
          pl: 2,
        }}
      >
        <Typography
          sx={{
            color: "var(--lpv-core-white-0)",
            fontSize: "0.8rem",
            fontWeight: 400,
          }}
        >
          FrontEnd: {frontEndTech}
        </Typography>
        <Typography
          sx={{
            color: "var(--lpv-core-white-0)",
            fontSize: "0.8rem",
            fontWeight: 400,
          }}
        >
          BackEnd: {backEndTech}
        </Typography>
      </Box>
      <Box
        sx={{
          pt: 0.5,
        }}
      >
        <Typography
          sx={{
            color: "var(--lpv-core-white-0)",
            fontSize: "0.8rem",
            fontWeight: 400,
          }}
        >
          Responsibilities:
        </Typography>
      </Box>
      <Box
        sx={{
          pt: 0.5,
          pl: 2,
        }}
      >
        {responsibilities.map((item, index) => (
          <Typography
            key={index}
            sx={{
              color: "var(--lpv-core-white-0)",
              fontSize: "0.8rem",
              fontWeight: 400,
            }}
          >
            - {item}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};
