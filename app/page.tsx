import MainBanner from "@/app_ui/MainBanner";
import { Box, Stack } from "@mui/material";
import React from "react";

export default function RootPage() {
  return (
    <Stack>
      <MainBanner
        sx={{
          backgroundColor: "background.primary",
        }}
      >
        test
      </MainBanner>
    </Stack>
  );
}
