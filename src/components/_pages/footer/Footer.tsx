import { Box, Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "var(--lpv-core-black-0)",
        width: "100%",
        height: "100%",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      }}
    >
      <Typography
        sx={{
          height: "100%",
          pl: 2,
          pr: 2,
          pb: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          //   alignItems: "center",
          fontSize: "0.7rem",
          color: "var(--lpv-core-white-0)",
        }}
      >
        Designed & Built By Le Phuoc Viet © 2025, All rights reserved.
      </Typography>
    </Box>
  );
};
