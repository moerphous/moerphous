import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { CardActionArea } from "@mui/material";

const Landing = (handleDrawerToggle) => {
  const grid = {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 3,
    xl: 3,
  };

  return (
    <Box>
      <Header />
      <Box
        component="section"
        sx={{
          alignItems: "center",
          color: "grey",
          backgroundColor: "rgba(33,36,40,1)",
          //paddingLeft: { md: "250px", sm: "100px", xs: "150px" },
          display: "flex",
          paddingTop: "250px",
          paddingBottom: "104px",
          background: `url(${"./images/background.jpg"}) no-repeat center center fixed`,
          backgroundSize: "cover",
        }}
      >
        <Banner />
      </Box>
      <Box
        component="section"
        sx={{
          alignItems: "center",
          color: "grey",
          backgroundColor: "rgba(33,36,40,1)",
          paddingTop: "50px",
          paddingLeft: { lg: "0px", md: "150px", sm: "100px", xs: "150px" },
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
              textAlign: { sm: "center", xs: "left" },
            }}
            color="white"
            fontWeight="800"
          >
            Wallets
          </Typography>
          <Grid container justifyContent="center" spacing={20}>
            <Grid item {...grid}>
              <Card
                sx={{
                  color: "grey",
                  backgroundColor: "rgba(33,36,40,1)",
                  border: "2px solid grey",
                  borderRadius: "20px",
                  paddingBotton: "50px",
                  display: "flex",
                  width: "200px",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image="./images/metamask.png"
                    alt="metamask"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      textAlign="center"
                      component="div"
                      color="white"
                      fontWeight="800"
                    >
                      Metamask
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
                  border: "2px solid grey",
                  borderRadius: "20px",
                  paddingBotton: "50px",
                  display: "flex",
                  width: "200px",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="180"
                    image="./images/coinbase.png"
                    alt="coinbase"
                  />
                  <CardContent background="transparent">
                    <Typography
                      gutterBottom
                      variant="h5"
                      textAlign="center"
                      component="div"
                      color="white"
                      fontWeight="800"
                    >
                      Coinbase
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
                  border: "2px solid grey",
                  borderRadius: "20px",
                  paddingBotton: "50px",
                  display: "flex",
                  width: "200px",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image="./images/bitski.png"
                    alt="Bitski"
                  />
                  <CardContent background="transparent">
                    <Typography
                      gutterBottom
                      variant="h5"
                      textAlign="center"
                      component="div"
                      color="white"
                      fontWeight="800"
                    >
                      Bitski
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Landing;
