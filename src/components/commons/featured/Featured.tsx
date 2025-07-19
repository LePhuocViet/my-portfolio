import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

interface FeaturedProps {
  image: string;
  url?: string;
  title?: string;
  time?: string;
}

export const Featured = ({ image, url, title, time }: FeaturedProps) => {
  return (
    <Box
      sx={{
        // display: "flex",
        ":hover": {
          cursor: "pointer",
        },
      }}
    >
      <Box sx={{}}>
        <Image
          src={image}
          alt="Description"
          width={300}
          height={200}
          style={{
            borderRadius: 10,
            // objectFit: "cover",
            // objectPosition: "center",
            // borderRadius: 10,
          }}
        />
      </Box>
      <Box
        sx={{
          pt: 1,
        }}
      >
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "0.9rem",
            color: "var(--lpv-core-white-0)",
          }}
        >
          {title}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          gap: 1,
          pt: 1,
        }}
      >
        <AccessTimeIcon
          sx={{
            color: "var(--lpv-core-white-0)",
            opacity: 0.7,
            fontSize: "1.3rem",
          }}
        />
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "0.8rem",
            color: "var(--lpv-core-white-0)",
            opacity: 0.7,
          }}
        >
          {time}
        </Typography>
      </Box>
    </Box>
  );
};
