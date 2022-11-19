import React from "react";
import { useSelector } from "react-redux";
import "./nav.css";
import { AppBar, Toolbar, IconButton, Button, Box, Badge } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Nav = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          My Page
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          {isLoggedIn && (
            <>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <Badge badgeContent={4} color="error">
                    <MailIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 1 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={1} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              </Box>
            </>
          )}
          {/* check if user is logged in   */}
          <Box>
            {isLoggedIn ? (
              <Button color="inherit">Logout</Button>
            ) : (
              <Button color="inherit">Login</Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    // <nav>
    //     <div className="nav-wrapper">
    //       <ul>
    //         <li><a href="/">Home</a></li>
    //         <li><a href="/user">My page</a></li>
    //         <li><a href="/form">Register/Login</a></li>
    //       </ul>
    //     </div>

    // </nav>
  );
};

export default Nav;
