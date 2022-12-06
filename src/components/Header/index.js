import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CustomSearch from "./CustomSearch";
import CustomElevator from "./CustomElevator";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";

import { useNavigate } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fab from "@mui/material/Fab";

const pages = ["Home", "Explore"];
const settings = ["View Profile", "Edit Profile", "Log out"];

function Header(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [auth, setAuth] = React.useState(false);

  const navigate = useNavigate();

  const handleConnectClick = (event) => {
    setAuth(true);
  };
  const handleCreateClick = (event) => {
    navigate("/create-nft");
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box component="header">
      <Container maxWidth="lg">
        <CustomElevator {...props}>
          <AppBar
            sx={{
              alignItems: "center",
              color: "grey",
              backgroundColor: "rgba(33,36,40,1)",
            }}
          >
            <Toolbar id="back-to-top-anchor">
              {/*logo here*/}
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { md: "flex" },
                  fontFamily: "sans",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "#fff",
                  textDecoration: "none",

                  textTransform: "uppercase",
                }}
              >
                Moerphous
              </Typography>
              <CustomSearch />
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  ml: "100px",
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    <Link
                      underline="none"
                      color="inherit"
                      href={`/${page}`.toLowerCase()}
                      sx={{
                        fontWeight: 700,
                        "&:hover": {
                          cursor: "pointer",
                          color: "#ff4458",
                          textDecoration: "none",
                          borderBottomWidth: "100%",
                          borderBottomStyle: "solid",
                          paddingBottom: "1px",
                          listStyleType: "none",
                          position: "relative",
                          bottom: "4px",
                        },
                      }}
                    >
                      {page}
                    </Link>
                  </Button>
                ))}
              </Box>

              {auth ? (
                <Box sx={{ flexGrow: 0 }}>
                  <Button
                    onClick={handleCreateClick}
                    sx={{
                      right: "0px",
                      color: "white",
                      backgroundColor: "rgba(255, 50, 63 ,1)",
                      borderRadius: "10px",
                      p: "5px",
                      px: "15px",
                      ml: "20px",
                      mr: "10px",
                      fontWeight: 800,
                      "&:hover": {
                        color: "#fff",
                        borderRadius: "10px",
                        backgroundColor: "rgba(255, 50, 63 ,1)",
                        boxShadow: "0 0.5em 0.5em -0.4em red",
                        transform: "translateY(-0.25em)",
                      },
                    }}
                  >
                    Create
                  </Button>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ ml: 0 }}>
                      <Avatar alt="user name" src="user profile pic" />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem
                        key={setting}
                        onClick={handleCloseUserMenu}
                        sx={{
                          backgroundColor: "rgba(33,36,40,1)",
                          color: "white",
                          fontWeight: 800,
                          "&:hover": {
                            cursor: "pointer",
                            color: "#ff4458",
                            textDecoration: "none",
                            borderBottomWidth: "100%",
                            borderBottomStyle: "solid",
                            paddingBottom: "1px",
                            listStyleType: "none",
                            position: "relative",
                            bottom: "4px",
                          },
                        }}
                      >
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ) : (
                <Button
                  onClick={handleConnectClick}
                  sx={{
                    right: "0px",
                    color: "white",
                    backgroundColor: "rgba(255, 50, 63 ,1)",
                    borderRadius: "10px",
                    p: "5px",
                    px: "15px",
                    ml: "20px",
                    mr: "10px",
                    fontWeight: 800,
                    "&:hover": {
                      color: "#fff",
                      borderRadius: "10px",
                      backgroundColor: "rgba(255, 50, 63 ,1)",
                      boxShadow: "0 0.5em 0.5em -0.4em red",
                      transform: "translateY(-0.25em)",
                    },
                  }}
                >
                  Connect Wallet
                </Button>
              )}
              <Box sx={{ flexGrow: 1, display: { sm: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", sm: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{
                        backgroundColor: "rgba(33, 36, 40, 1)",
                        color: "#fff",
                      }}
                    >
                      <Button
                        textAlign="center"
                        sx={{
                          color: "#fff",
                          "&:hover": { cursor: "pointer", color: "#000" },
                        }}
                      >
                        <Link
                          underline="none"
                          color="inherit"
                          href={`/${page}`.toLowerCase()}
                          sx={{
                            fontWeight: 700,
                            "&:hover": {
                              cursor: "pointer",
                              color: "#ff4458",
                              textDecoration: "none",
                              borderBottomWidth: "100%",
                              borderBottomStyle: "solid",
                              paddingBottom: "1px",
                              listStyleType: "none",
                              position: "relative",
                              bottom: "4px",
                            },
                          }}
                        >
                          {page}
                        </Link>
                      </Button>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </AppBar>
        </CustomElevator>
      </Container>
      <ScrollToTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollToTop>
    </Box>
  );
}
export default Header;
