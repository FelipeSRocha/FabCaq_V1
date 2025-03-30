import * as React from "react";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {
  Select,
  selectClasses,
  ListSubheader,
  MenuItem,
  ListItemAvatar,
  ListItemText,
  ListItemIcon,
  SelectChangeEvent,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";

const mainListItems = [
  { text: "Home", icon: <HomeRoundedIcon /> },
  { text: "Analytics", icon: <AnalyticsRoundedIcon /> },
  { text: "Clients", icon: <PeopleRoundedIcon /> },
  { text: "Tasks", icon: <AssignmentRoundedIcon /> },
];

export default function SideMenu() {
  const [company, setCompany] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCompany(event.target.value as string);
  };

  return (
    <Stack
      sx={{
        display: { xs: "none", md: "flex" },
        backgroundColor: "background.default",
        border: "1px solid",
        borderColor: "primary.light",
        borderTop: 0,
        width: "12%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          p: 1.5,
        }}
      >
        <Typography
          variant="h5"
          color="inherit"
          component="div"
          sx={{ fontWeight: "bold", letterSpacing: 1, color: "text.primary" }}
        >
          Fabri Caqui
        </Typography>
      </Box>
      <Divider sx={{ borderColor: "primary.light" }} />
      <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
        <List dense sx={{ backgroundColor: "background.default" }}>
          {mainListItems.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                selected={index === 0}
                sx={(theme) => ({
                  "&.Mui-selected": {
                    backgroundColor: theme.palette.primary.light, // Cor quando selecionado
                    color: theme.palette.common.white, // Cor do texto quando selecionado
                    "&:hover": {
                      backgroundColor: theme.palette.primary.main, // Cor ao passar o mouse no item selecionado
                    },
                  },
                  "&:hover": {
                    backgroundColor: theme.palette.action.hover, // Cor ao passar o mouse no item normal
                  },
                })}
              >
                <ListItemIcon sx={{ color: "primary.dark" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  sx={(theme) => ({
                    color: theme.palette.text.primary,
                    // "&.Mui-selected": {
                    //   color: theme.palette.text.secondary,
                    //   "&:hover": {
                    //     color: theme.palette.text.secondary,
                    //   },
                    // },
                    // "&:hover": {
                    //   color: theme.palette.text.secondary,
                    // },
                  })}
                  primary={item.text}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Stack>
      <Stack
        direction="row"
        sx={{
          p: 2,
          gap: 1,
          alignItems: "center",
          borderTop: "1px solid",
          borderColor: "primary.light",
        }}
      >
        <Avatar
          sizes="small"
          alt="Riley Carter"
          src="/static/images/avatar/7.jpg"
          sx={{ width: 36, height: 36 }}
        />
        <Box sx={{ mr: "auto" }}>
          <Typography
            variant="body2"
            sx={{ fontWeight: 500, lineHeight: "16px" }}
          >
            Riley Carter
          </Typography>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            riley@email.com
          </Typography>
        </Box>
        {/* <OptionsMenu /> */}
      </Stack>
    </Stack>
  );
}
