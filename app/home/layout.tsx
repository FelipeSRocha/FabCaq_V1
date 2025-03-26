"use client";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <React.Fragment>
      <Box
        sx={{
          backgroundColor: "background.default",
          boxShadow: 0,
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          width: "100vw",
        }}
      >
        <AppBar
          position="static"
          sx={{ backgroundColor: "inherit", boxShadow: 0 }}
        >
          <Toolbar
            variant="regular"
            sx={{
              color: "text.secondary",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h3"
              color="inherit"
              component="div"
              sx={{ fontWeight: "bold", letterSpacing: 1 }}
            >
              Fabri Caqui
            </Typography>
          </Toolbar>
        </AppBar>
        <Box sx={{ flex: 1, p: 2 }}>{children}</Box>
      </Box>
    </React.Fragment>
  );
}
