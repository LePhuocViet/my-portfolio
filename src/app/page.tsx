import { Info } from "@/components/_pages/info/Info";
import "./globals.css";
import { Box } from "@mui/material";
import { Menu } from "@/components/_pages/menu/Menu";
import { Footer } from "@/components/_pages/footer/Footer";
import { HomePage } from "@/components/_pages/home/Home";

export default function Home() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "var(--lpv-core-black-1)",
        paddingX: "20%",
        paddingTop: 2,
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          width: "20%",
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
          width: "20%",
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
            backgroundColor: "gray",
            borderRadius: 2,
            boxShadow: 10,
          }}
        >
          Right
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          pb: 2,
          borderRadius: 2,
        }}
      >
        <HomePage />
      </Box>
    </Box>
  );
}
