import React, { memo } from "react";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import SellIcon from "@mui/icons-material/Sell";

const Info = () => {
  const grid = {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 3,
  };

  return (
    <Box
      component="section"
      sx={{
        alignItems: "center",
        color: "grey",
        backgroundColor: "rgba(33,36,40,1)",
        paddingTop: "50px",
        paddingLeft: { lg: "0px", md: "70px", sm: "10px", xs: "70px" },
        paddingRight: { lg: "40px", md: "30px" },
        display: "flex",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          alignItems: { md: "center", xs: "left" },
          paddingTop: "5px",
          paddingBottom: "50px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          paddingBottom="40px"
          sx={{
            paddingLeft: { md: "0px", xs: "25px" },
            paddingRight: { md: "50px", lg: "0px" },
            textAlign: { sm: "center", xs: "left" },
          }}
          color="white"
          fontWeight="800"
        >
          Create, Buy or Sell NFTs
        </Typography>
        <Grid container justifyContent="center" spacing={15}>
          <Grid item {...grid}>
            <Card
              sx={{
                color: "grey",
                backgroundColor: "rgba(33,36,40,1)",
                border: "2px solid green",
                borderRadius: "20px",
                paddingBotton: "50px",
                display: "flex",
                width: "300px",
                height: "200px",
              }}
            >
              <CardActionArea alignItems="center">
                <CardMedia component="Box" height="200">
                  <AccountBalanceWalletIcon
                    sx={{
                      cursor: "pointer",
                      padding: "40px",
                      paddingTop: "0px",
                      position: "relative",
                      height: "60px",
                      width: "60px",
                      marginLeft: "70px",
                      left: "10px",
                      top: "25px",
                      "& > *": {
                        color: "#fff",
                        opacity: "1",
                      },
                    }}
                  />
                </CardMedia>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    textAlign="center"
                    component="div"
                    color="white"
                    fontWeight="800"
                  >
                    Set Up Your Wallet
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item {...grid}>
            <Card
              sx={{
                color: "grey",
                backgroundColor: "rgba(33,36,40,1)",
                border: "2px solid green",
                borderRadius: "20px",
                paddingBotton: "50px",
                display: "flex",
                width: "300px",
                height: "200px",
              }}
            >
              <CardActionArea alignItems="center">
                <CardMedia component="Box" height="200">
                  <LibraryAddIcon
                    sx={{
                      cursor: "pointer",
                      padding: "40px",
                      paddingTop: "0px",
                      position: "relative",
                      height: "60px",
                      width: "60px",
                      marginLeft: "70px",
                      left: "10px",
                      top: "25px",
                      "& > *": {
                        color: "#fff",
                        opacity: "1",
                      },
                    }}
                  />
                </CardMedia>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    textAlign="center"
                    component="div"
                    color="white"
                    fontWeight="800"
                  >
                    Create Your Collections
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item {...grid}>
            <Card
              sx={{
                color: "grey",
                backgroundColor: "rgba(33,36,40,1)",
                border: "2px solid green",
                borderRadius: "20px",
                paddingBotton: "50px",
                display: "flex",
                width: "300px",
                height: "200px",
              }}
            >
              <CardActionArea alignItems="center">
                <CardMedia component="Box" height="200">
                  <FolderCopyIcon
                    sx={{
                      cursor: "pointer",
                      padding: "40px",
                      paddingTop: "0px",
                      position: "relative",
                      height: "60px",
                      width: "60px",
                      marginLeft: "70px",
                      left: "10px",
                      top: "25px",
                      "& > *": {
                        color: "#fff",
                        opacity: "1",
                      },
                    }}
                  />
                </CardMedia>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    textAlign="center"
                    component="div"
                    color="white"
                    fontWeight="800"
                  >
                    Add Your Collections
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item {...grid}>
            <Card
              sx={{
                color: "grey",
                backgroundColor: "rgba(33,36,40,1)",
                border: "2px solid green",
                borderRadius: "20px",
                paddingBotton: "50px",
                display: "flex",
                width: "300px",
                height: "200px",
              }}
            >
              <CardActionArea alignItems="center">
                <CardMedia component="Box" height="200">
                  <SellIcon
                    sx={{
                      cursor: "pointer",
                      padding: "40px",
                      paddingTop: "0px",
                      position: "relative",
                      height: "60px",
                      width: "60px",
                      marginLeft: "70px",
                      left: "10px",
                      top: "25px",
                      "& > *": {
                        color: "#fff",
                        opacity: "1",
                      },
                    }}
                  />
                </CardMedia>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    textAlign="center"
                    component="div"
                    color="white"
                    fontWeight="800"
                  >
                    Sell Your Collections
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default memo(Info);
