import { Box, Button, Typography } from "@mui/material";
import React from "react";

export interface ButtonMenuProps {
  icon?: React.ReactNode;
  label?: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export const ButtonMenu = ({
  icon,
  label,
  onClick,
  isSelected,
}: ButtonMenuProps) => {
  return (
    <Box
      sx={{
        backgroundColor: isSelected ? "var(--lpv-core-black-1)" : "none",
        ":hover": {
          backgroundColor: "var(--lpv-core-black-1)",
        },
      }}
    >
      <Button
        onClick={onClick}
        variant="outlined"
        sx={{
          width: "100%",
          color: "var(--lpv-core-white-0)",
          textTransform: "none",
          display: "flex",
          justifyContent: "start",
          outline: "none",
          border: "none",
          "&:hover": {
            backgroundColor: "transparent",
            boxShadow: "none",
            border: "none",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              pl: 0.5,
              pr: 0.5,
              pt: 0.8,
              pb: 0.8,
            }}
          >
            {icon}
          </Box>
          <Typography
            fontSize="0.9rem"
            fontWeight={700}
            sx={{
              alignItems: "center",
              pl: 2,
            }}
          >
            {label}
          </Typography>
        </Box>
      </Button>
    </Box>
  );
};
