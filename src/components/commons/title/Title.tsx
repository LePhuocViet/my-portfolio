import { Box, Typography } from "@mui/material";
import React from "react";

interface TitleProps {
  text: string;
  icon?: React.ReactNode;
}

export const Title = ({ text, icon }: TitleProps) => {
  return (
    <Box sx={{ display: "flex", padding: 2, width: "100%" }}>
      {icon && <Box sx={{ color: "var(--lpv-core-white-0)" }}>{icon}</Box>}
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "1.1rem",
          paddingLeft: 1,
          color: "var(--lpv-core-white-0)",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};
