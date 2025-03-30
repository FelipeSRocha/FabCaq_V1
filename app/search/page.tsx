"use client";
import MainBanner from "@/app_ui/MainBanner";
import SideMenu from "@/app_ui/search/SideMenu";
import { Box, Stack } from "@mui/material";
import React from "react";

export default function RootPage() {
  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      test
      {/* <AppNavbar /> */}
      {/* Main content */}
      {/* <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            backgroundColor: theme.vars
              ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
              : alpha(theme.palette.background.default, 1),
            overflow: 'auto',
          })}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: 'center',
              mx: 3,
              pb: 5,
              mt: { xs: 8, md: 0 },
            }}
          >
            <Header />
            <MainGrid />
          </Stack>
        </Box> */}
    </Box>
  );
}
