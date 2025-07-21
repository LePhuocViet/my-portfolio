import React from "react";
import { Box, Typography, Collapse } from "@mui/material";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
export interface BoxDropItemProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  color?: string;
  isOpen: boolean;
  onClick: () => void;
}

export const BoxDropItem = ({
  title,
  description,
  icon,
  color,
  isOpen,
  onClick,
}: BoxDropItemProps) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        onClick={onClick}
        sx={{
          pl: 2,
          pr: 2,
          flex: 1,
          borderBottom: "1px solid var(--lpv-core-black-1)",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "10vh",
          cursor: "pointer",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              p: 0.7,
              borderRadius: 2,
              backgroundColor: color || "inherit",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--lpv-core-white-0)",
            }}
          >
            {icon}
          </Box>
          <Typography
            fontSize="0.9rem"
            fontWeight="bold"
            sx={{
              pl: 1,
              color: "var(--lpv-core-white-0)",
            }}
          >
            {title}
          </Typography>
        </Box>

        <KeyboardArrowDownOutlinedIcon
          sx={{
            color: "var(--lpv-core-white-0)",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        />
      </Box>

      <Collapse in={isOpen}>
        <Box
          sx={{
            px: 2,
            py: 1,
            color: "var(--lpv-core-white-0)",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
          }}
        >
          <Typography fontSize="0.8rem">{description}</Typography>
        </Box>
      </Collapse>
    </Box>
  );
};
