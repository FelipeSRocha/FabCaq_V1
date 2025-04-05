"use client";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../style/theme";
import { Inter } from "next/font/google";
import HeaderBar from "@/app_ui/HeaderBar";
import { Box } from "@mui/material";
import SideMenu from "@/app_ui/search/SideMenu";
import FilterSection from "@/app_ui/search/FilterSection";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
      }}
    >
      {/* <SideMenu /> */}
      <FilterSection />
      {children}
    </Box>
  );
}
