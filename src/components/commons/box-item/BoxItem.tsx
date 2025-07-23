"use client";

import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

interface BoxItemProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  color?: string;
  text?: string;
  isDecimal?: boolean;
}

export const BoxItem = ({
  title,
  value,
  icon,
  color,
  text,
  isDecimal,
}: BoxItemProps) => {
  const [shouldStart, setShouldStart] = useState(false);
  useEffect(() => {
    if (value !== undefined) {
      setShouldStart(true);
    }
  }, [value]);
  return (
    <Box
      sx={{
        backgroundColor: "#444",
        p: { xs: 1.5, md: 2 },
        borderRadius: 2,
        flex: 1,
        m: { xs: 0.5, md: 1 },
        minWidth: { xs: "45%", sm: "auto" },
        transition: "all 0.3s ease",

        ":hover": {
          backgroundColor: "#5891aaff",
          cursor: "pointer",
          boxShadow: "0 0 15px #5891aa",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        <Box
          sx={{
            p: { xs: 1.5, md: 2 },
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            backgroundColor: color || "var(--lpv-core-black-2)",
            borderRadius: 4,
            mr: { xs: 0, sm: 1 },
            mb: { xs: 1, sm: 0 },
          }}
        >
          {icon}
        </Box>
        <Box>
          <Typography
            sx={{
              color: "var(--lpv-core-white-0)",
              fontWeight: 700,
              fontSize: { xs: "0.9rem", md: "1.1rem" },
            }}
          >
            {!shouldStart ? (
              <span>0</span>
            ) : isDecimal ? (
              <CountUp end={value!} duration={4} decimals={2} />
            ) : (
              <CountUp end={value!} duration={4} />
            )}

            {text && (
              <span style={{ paddingLeft: "4px", fontSize: "0.9rem" }}>
                {text}
              </span>
            )}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          mt: { xs: 1, md: 2 },
          color: "var(--lpv-core-white-0)",
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: "0.85rem", md: "1rem" },
            display: {
              xs: "flex",
              sm: "block",
            },
            justifyContent: "center",
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};
