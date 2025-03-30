"use client";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../style/theme";
import { Inter } from "next/font/google";
import HeaderBar from "@/app_ui/HeaderBar";
import { Box } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: 0 }}>
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100vh",
              width: "100vw",
            }}
          >
            {/* <HeaderBar /> */}
            <Box sx={{ flex: 1 }}>{children}</Box>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
