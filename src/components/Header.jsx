import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import "@fontsource/roboto";
import Links from "./Links";

const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#1976d257",
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
      }}
    >
      <Toolbar
        sx={{
          width: "100vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Links/>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
