import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContentLoader from "../../components/ContentLoader";
import React, { useState, useEffect, useMemo } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { useDropzone } from "react-dropzone";

// TODO: move all css objects into index.css file

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderWidth: 3,
  borderRadius: 8,
  borderColor: "rgb(210, 206, 210)",
  borderStyle: "dashed",
  color: "rgb(162, 151, 151)",
  outline: "none",
  transition: "border .24s ease-in-out",
  height: "100px",
  width: "140px",
};
const thumbsContainer = {
  display: "grid",
  gridTemplateColumns: "auto auto auto",
  gridTemplateRows: "auto auto",
  gridAutoRows: "0px",
  paddingTop: "20px",
  paddingBottom: "20px",
};
const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};
const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 100,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

const CreateNFT = () => {
  const grid = {
    xs: 12,
    sm: 12,
    md: 4,
  };

  const [nftInfo, setNftInfo] = useState({
    nftPicture: "",
    title: "",
    description: "",
    price: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setNftInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      accept: {
        "image/*": [],
      },
      onDrop: (acceptedFiles) => {
        setFiles(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );
        setNftInfo((prevState) => ({
          ...prevState,
          // eslint-disable-next-line
          ["nftPicture"]: acceptedFiles[0],
        }));
      },
    });

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          alt={file.name}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));
  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );
  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);
  return (
    <Box>
      <Header />
      <Typography
        variant="h4"
        sx={{
          borderBottom: "1px solid grey",
          cursor: "default",
          left: "100px",
          display: "flex",
          justifyContent: "center",
          fontStyle: "italic",
          paddingTop: "120px",
          paddingBottom: "40px",
          color: "white",
          fontWeight: "800",
        }}
      >
        CREATE NFT
      </Typography>

      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          paddingBottom: "100px",
        }}
      >
        <Grid container justifyContent="center" spacing={5}>
          <Grid item {...grid}>
            <Box
              component="form"
              autoComplete="off"
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
              onSubmit={handleSubmit}
            >
              <Box
                component="section"
                autoComplete="off"
                sx={{
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  paddingTop: "100px",
                  width: { md: "720px", sm: "320px" },
                  textAlign: "start",
                }}
                onSubmit={handleSubmit}
              >
                <Typography variant="label">NFT Picture</Typography>
                <div style={thumbsContainer}>
                  <div {...getRootProps({ style })}>
                    <input {...getInputProps()} />
                    {thumbs[0]}
                  </div>
                </div>
                <Typography variant="label">Title</Typography>
                <TextField
                  id="title"
                  type="text"
                  name="title"
                  placeholder="NFT Name"
                  sx={{
                    marginBottom: "10px",
                    "& .MuiOutlinedInput-root": {
                      color: "#fff",
                      "& > fieldset": {
                        padding: "15px 30px",
                        margin: "10px 0",
                        fontSize: "15px",
                        border: "solid 2px rgb(219, 219, 219)",
                        borderRadius: "10px",
                      },
                    },
                  }}
                  required={true}
                  value={nftInfo.title}
                  onChange={handleChange}
                />

                <Typography variant="label">Description</Typography>
                <TextField
                  id="description"
                  type="text"
                  name="description"
                  placeholder="NFT Description"
                  sx={{
                    marginBottom: "15px",
                    "& .MuiOutlinedInput-root": {
                      color: "#fff",
                      "& > fieldset": {
                        height: "50px",
                        margin: "10px 0",
                        fontSize: "15px",
                        border: "solid 2px rgb(219, 219, 219)",
                        borderRadius: "10px",
                      },
                    },
                  }}
                  required={true}
                  value={nftInfo.description}
                  onChange={handleChange}
                />

                <Typography variant="label">Price</Typography>
                <TextField
                  id="price"
                  type="text"
                  name="price"
                  placeholder="NFT Price (e.g. 1.1514 XRP)"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      color: "#fff",
                      "& > fieldset": {
                        padding: "15px 30px",
                        margin: "10px 0",
                        fontSize: "15px",
                        border: "solid 2px rgb(219, 219, 219)",
                        borderRadius: "10px",
                      },
                    },
                  }}
                  required={true}
                  value={nftInfo.price}
                  onChange={handleChange}
                />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    type="submit"
                    sx={{
                      right: "0px",
                      color: "white",
                      backgroundColor: "rgba(255, 50, 63 ,1)",
                      borderRadius: "10px",
                      p: "10px",
                      px: "20px",
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
                      marginTop: 5,
                      cursor: "pointer",
                      "&:disabled": {
                        cursor: "default",
                        backgroundColor: "#656e7b",
                        color: "#fff",
                      },
                    }}
                    disabled={
                      !nftInfo.nftPicture ||
                      !nftInfo.title ||
                      !nftInfo.description ||
                      !nftInfo.price
                    }
                  >
                    Create
                  </Button>
                  <ContentLoader />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
};

export default CreateNFT;
