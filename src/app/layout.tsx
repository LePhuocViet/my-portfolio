// app/layout.tsx
"use client";

import { Info } from "@/components/_pages/nav/info/Info";
import { Footer } from "@/components/_pages/nav/footer/Footer";
import { Menu } from "@/components/_pages/nav/menu/Menu";
import { MobileNav } from "@/components/_pages/nav/mobile-nav/MobileNav";
import { Box } from "@mui/material";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Mobile Navigation */}
        <MobileNav />

        <Box
          sx={{
            width: "100%",
            backgroundColor: "var(--lpv-core-black-1)",
            paddingX: {
              xs: "2%",
              sm: "5%",
              md: "20%",
            },
            paddingTop: {
              xs: "70px", // Space for mobile nav
              md: 2,
            },
            boxSizing: "border-box",
            minHeight: "100vh",
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
              left: 0,
              top: 0,
              padding: 2,
              boxSizing: "border-box",
            }}
          >
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                boxShadow: 10,
                borderRadius: 2,
                backgroundColor: "#1e1e1e",
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Info />
              </Box>
              <Box sx={{ flex: 3 }}>
                <Menu />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Footer />
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              // ml: { md: "20%" },
              boxSizing: "border-box",
            }}
          >
            {children}
          </Box>
        </Box>
      </body>
    </html>
  );
}
