import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setAuthors } from "./redux/authorsReducer/actions";

const App = () => {
  const Explore = lazy(() => import("./pages/Explore"));
  const Landing = lazy(() => import("./pages/Landing"));
  const CreateNFT = lazy(() => import("./pages/CreateNFT"));

  const dispatch = useDispatch();

  useEffect(() => {
    // TODO: Change fake db to api get authors
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
