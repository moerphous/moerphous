import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setAuthors } from "./redux/authorsReducer/actions";
import { setNfts } from "./redux/nftsReducer/actions";

const App = () => {
  const Explore = lazy(() => import("./pages/Explore"));
  const Landing = lazy(() => import("./pages/Landing"));
  const CreateNFT = lazy(() => import("./pages/CreateNFT"));

  const dispatch = useDispatch();

  useEffect(() => {
    // TODO: Change fake db to api get authors
    dispatch(
      setNfts([
        {
          id: 1,
          title: "NFT",
          url: "./images/author.jpeg",
          status: "on_auction",
          likes: "4",
          price: "3",
          bid_url: "",
          bid: "1",
          max_bid: "20",
          end_date: "Jan 25, 2023 3:30",
          author_url: "./images/author.jpeg",
          author_avatar: "./images/author.jpeg",
          image_url: "./images/background.jpg",
        },
        {
          id: 2,
          title: "NFT",
          url: "./images/author.jpeg",
          status: "has_offers",
          likes: "4",
          price: "3",
          bid_url: "",
          bid: "1",
          max_bid: "20",
          end_date: "Jan 25, 2023 3:30",
          author_url: "./images/author.jpeg",
          author_avatar: "./images/author.jpeg",
          image_url: "./images/background.jpg",
        },
        {
          id: 3,
          title: "NFT",
          url: "./images/author.jpeg",
          status: "has_offers",
          likes: "4",
          price: "3",
          bid_url: "",
          bid: "1",
          max_bid: "20",
          author_url: "./images/author.jpeg",
          author_avatar: "./images/author.jpeg",
          image_url: "./images/background1.jpg",
        },
        {
          id: 4,
          title: "NFT",
          url: "./images/author.jpeg",
          status: "has_offers",
          likes: "4",
          price: "3",
          bid_url: "",
          bid: "1",
          max_bid: "20",
          author_url: "./images/author.jpeg",
          author_avatar: "./images/author.jpeg",
          image_url: "./images/background1.jpg",
        },
      ])
    );
    dispatch(
      setAuthors([
        {
          first_name: "Mahmoud",
          profile_picture: "./images/author.jpeg",
          author_sales: "4",
          nb_items: "3",
        },
        {
          first_name: "Mahmoud",
          profile_picture: "./images/author.jpeg",
          author_sales: "4",
          nb_items: "3",
        },
        {
          first_name: "Mahmoud",
          profile_picture: "./images/author.jpeg",
          author_sales: "4",
          nb_items: "3",
        },
        {
          first_name: "Mahmoud",
          profile_picture: "./images/author.jpeg",
          author_sales: "4",
          nb_items: "3",
        },
        {
          first_name: "Mahmoud",
          profile_picture: "./images/author.jpeg",
          author_sales: "4",
          nb_items: "3",
        },
        {
          first_name: "Mahmoud",
          profile_picture: "./images/author.jpeg",
          author_sales: "4",
          nb_items: "3",
        },
        {
          first_name: "Mahmoud",
          profile_picture: "./images/author.jpeg",
          author_sales: "4",
          nb_items: "3",
        },
      ])
    );
  }, [dispatch]);

  return (
    <Suspense>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/explore" element={<Explore />} />
        <Route exact path="/create-nft" element={<CreateNFT />} />
        <Route exact path="/home" element={<Navigate to={"/"} replace />} />
      </Routes>
    </Suspense>
  );
};

export default App;
