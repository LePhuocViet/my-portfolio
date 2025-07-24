import { Box, Typography } from "@mui/material";
import React from "react";

export const AboutTitle = () => {
  return (
    <Box
      sx={{
        px: 2,
        pb: 2,
      }}
    >
      <Typography
        sx={{
          color: "var(--lpv-core-white-0)",
          fontSize: "0.8rem",
        }}
      >
        Aspiring to become a professional full-stack developer with a strong
        focus on Node.js, NestJS, and Next.js. Eager to contribute to scalable
        backend systems and modern frontend applications in a dynamic and
        growth-oriented environment.
      </Typography>
    </Box>
  );
};
