import { Box, Typography } from "@mui/material";
import React from "react";
import Technologies from "../technologies/Technologies";
import { Experience } from "../experience/Experience";
import { HomePage } from "../page/Home";
import CropRotateOutlinedIcon from "@mui/icons-material/CropRotateOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import { HomeFooter } from "../footer/HomeFooter";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
export const MenuHome = () => {
  return (
    <Box
      sx={{
        paddingTop: { xs: 1, md: 0 }, // Extra padding for mobile nav
      }}
    >
      <Box
        sx={{
          width: {
            xs: "0%",
            md: "20%",
          },
          display: {
            xs: "none",
            md: "block",
          },
          height: "100vh",
          position: "fixed",
          right: 0,
          top: 0,
          padding: 2,
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            height: "100%",
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              flex: 1.5,
              backgroundColor: "var(--lpv-core-black-0)",
              borderRadius: 2,
              boxShadow: 10,
              mb: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{ display: "flex", padding: 2, width: "100%" }}>
              <CropRotateOutlinedIcon
                sx={{ color: "var(--lpv-core-white-0)" }}
              />
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  paddingLeft: 1,
                  color: "var(--lpv-core-white-0)",
                }}
              >
                Skill Set
              </Typography>
            </Box>
            <Box>
              <Technologies />
            </Box>
          </Box>
          <Box
            sx={{
              flex: 3,
              backgroundColor: "var(--lpv-core-black-0)",
              borderRadius: 2,
              boxShadow: 10,
              mb: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{ display: "flex", padding: 2, width: "100%" }}>
              <GroupsOutlinedIcon sx={{ color: "var(--lpv-core-white-0)" }} />
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  paddingLeft: 1,
                  color: "var(--lpv-core-white-0)",
                }}
              >
                Experience
              </Typography>
            </Box>
            <Box>
              <Experience />
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              backgroundColor: "var(--lpv-core-black-0)",
              borderRadius: 2,
              boxShadow: 10,
              mb: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box>
              <Box sx={{ display: "flex", padding: 2, width: "100%" }}>
                <MailOutlineOutlinedIcon
                  sx={{ color: "var(--lpv-core-white-0)" }}
                />
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    paddingLeft: 1,
                    color: "var(--lpv-core-white-0)",
                  }}
                >
                  Get In Touch
                </Typography>
              </Box>
              <Box>
                <HomeFooter />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: {
            xs: "100%",
            md: "100%",
          },
          pb: 2,
          borderRadius: 2,
        }}
      >
        <HomePage />
      </Box>

      <Box
        sx={{
          display: { xs: "block", md: "none" },
          mt: 2,
        }}
      >
        <Box
          sx={{
            backgroundColor: "var(--lpv-core-black-0)",
            borderRadius: 2,
            boxShadow: 10,
            mb: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "flex", padding: 2, width: "100%" }}>
            <CropRotateOutlinedIcon sx={{ color: "var(--lpv-core-white-0)" }} />
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "1.1rem",
                paddingLeft: 1,
                color: "var(--lpv-core-white-0)",
              }}
            >
              Skill Set
            </Typography>
          </Box>
          <Box>
            <Technologies />
          </Box>
        </Box>

        <Box
          sx={{
            backgroundColor: "var(--lpv-core-black-0)",
            borderRadius: 2,
            boxShadow: 10,
            mb: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "flex", padding: 2, width: "100%" }}>
            <GroupsOutlinedIcon sx={{ color: "var(--lpv-core-white-0)" }} />
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "1.1rem",
                paddingLeft: 1,
                color: "var(--lpv-core-white-0)",
              }}
            >
              Experience
            </Typography>
          </Box>
          <Box>
            <Experience />
          </Box>
        </Box>

        <Box
          sx={{
            backgroundColor: "var(--lpv-core-black-0)",
            borderRadius: 2,
            boxShadow: 10,
            mb: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "flex", padding: 2, width: "100%" }}>
            <MailOutlineOutlinedIcon
              sx={{ color: "var(--lpv-core-white-0)" }}
            />
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "1.1rem",
                paddingLeft: 1,
                color: "var(--lpv-core-white-0)",
              }}
            >
              Get In Touch
            </Typography>
          </Box>
          <Box>
            <HomeFooter />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
