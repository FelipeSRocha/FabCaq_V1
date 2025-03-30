import { Box } from "@mui/material";

export default function MainBanner({
  children,
  sx,
}: Readonly<{
  children: React.ReactNode;
  sx?: object;
}>) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "70vh",
        width: "100vw",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
