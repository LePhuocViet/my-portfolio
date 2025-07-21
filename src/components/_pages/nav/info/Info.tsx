import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const Info = () => {
  return (
    <Box
      sx={{
        backgroundColor: "var(--lpv-core-black-0)",
        width: "100%",
        height: "100%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      }}
    >
      <Box sx={{ padding: 2, display: "flex" }}>
        <Image
          src="/me/me.jpg"
          alt="Description"
          width={100}
          height={100}
          style={{ borderRadius: "50%", objectFit: "cover" }}
        />
      </Box>
      <Box sx={{ pl: 2, pr: 2 }}>
        <Typography
          sx={{ color: "var(--lpv-core-white-0)" }}
          fontWeight={700}
          fontSize="1.3rem"
        >
          Le Phuoc Viet
        </Typography>
        <Typography
          fontSize="0.9rem"
          sx={{ color: "var(--lpv-core-white-0)" }}
          fontWeight={700}
        >
          FullStack Developer
        </Typography>
      </Box>

      <Box
        sx={{
          padding: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant="outlined"
          sx={{
            width: "100%",
            color: "var(--lpv-core-white-0)",
            textTransform: "none",
            border: "0.5px solid var(--lpv-core-white-0)",
          }}
        >
          Resume
        </Button>
      </Box>
    </Box>
  );
};
