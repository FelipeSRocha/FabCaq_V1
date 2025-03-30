import { Box, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function HeaderBar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "inherit", boxShadow: 0 }}>
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
  );
}
