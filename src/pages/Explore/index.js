import React from "react";
import Header from "../../components/Header";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Footer from "../../components/Footer";
import CheckboxFilter from "../../components/CheckboxFilter";

const Explore = () => (
  <div className="greyscheme">
    <Header />
    <Box
      component="section"
      sx={{
        alignItems: "center",
        borderTop: "1px solid rgba(255,255,255,0.25)",
        color: "grey",
        backgroundColor: "rgba(33,36,40,1)",
        paddingTop: "50px",
        marginLeft: { lg: "-350px", md: "-110px", sm: "-100px", xs: "-100px" },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={20}>
          <Grid item md={6} sm={12} xs={12}>
            <CheckboxFilter />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            {/*TODO: filter items*/}
          </Grid>
        </Grid>
      </Container>
    </Box>
    <Footer />
  </div>
);
export default Explore;
