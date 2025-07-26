import { Box, Typography } from "@mui/material";
import { object } from "framer-motion/client";
import Image from "next/image";
import React from "react";

interface ItemExperienceProps {
  title: string;
  description: string;
  date: string;
  imageSrc: string;
  moreInfo?: string;
}

export const ItemExperience = (props: ItemExperienceProps) => {
  return (
    <Box
      sx={{
        px: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box>
          <Image
            alt="DTU Logo"
            width={80}
            height={80}
            src={props.imageSrc}
            style={{
              border: "1px solid #fff",
            }}
          />
        </Box>
        <Box sx={{ px: 2, width: "100%" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{
                fontSize: "1.1rem",
                fontWeight: "bold",
                color: "var(--lpv-core-white-0)",
              }}
            >
              {props.title}
            </Typography>
            <Typography
              sx={{
                right: 0,
                fontSize: "0.9rem",
                fontWeight: "400",
                color: "var(--lpv-core-white-0)",
                fontStyle: "italic",
              }}
            >
              {props.date}
            </Typography>
          </Box>
          <Box
            sx={{
              pt: 1,
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          ></Box>
          <Typography
            sx={{
              fontSize: "0.9rem",
              fontWeight: "400",
              color: "var(--lpv-core-white-0)",
            }}
          >
            {props.description}
          </Typography>

          <Box
            sx={{
              pt: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: "0.9rem",
                fontWeight: "400",
                fontStyle: "italic",
                color: "var(--lpv-core-white-0)",
              }}
            >
              {props.moreInfo}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
