import { Box, Typography } from "@mui/material";
import { object } from "framer-motion/client";
import Image from "next/image";
import React from "react";

export const Education = () => {
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
            src="/dtu/dtu.png"
            style={{
              border: "1px solid #fff",
            }}
          />
        </Box>
        <Box sx={{ px: 2, width: "100%" }}>
          <Typography
            sx={{
              fontSize: "1.1rem",
              fontWeight: "bold",
              color: "var(--lpv-core-white-0)",
            }}
          >
            Duy Tan University
          </Typography>
          <Box
            sx={{
              pt: 1,
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontSize: "0.9rem",
                fontWeight: "400",
                color: "var(--lpv-core-white-0)",
              }}
            >
              Information Technology
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
              2021 - 2025
            </Typography>
          </Box>
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
              GPA: 3.71
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
