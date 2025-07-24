import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const AboutInfo = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: 2,
        }}
      >
        <Box
          sx={{
            flex: 1,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            fill
            alt="About Me"
            src="/home/home.jpg"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
          }}
        >
          <Box
            sx={{
              paddingLeft: {
                md: "130px",
                xs: "130px",
              },
              mt: "10px",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "1.3rem",
                  color: "var(--lpv-core-white-0)",
                  fontWeight: 700,
                }}
              >
                Le Phuoc Viet
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  color: "var(--lpv-core-white-0)",
                  fontWeight: 500,
                }}
              >
                FullStack Developer
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            position: " absolute",
            top: "30%",
            left: "3%",
            width: "103px",
            height: "103px",
            zIndex: 999,
          }}
        >
          <Image
            fill
            alt="About Me"
            src="/me/me.jpg"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "50%",
              border: "3px solid var(--lpv-core-black-0)",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
