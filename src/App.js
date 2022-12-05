import React, { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const App = () => {
  const Explore = lazy(() => import("./pages/Explore"));
  const Landing = lazy(() => import("./pages/Landing"));

  return (
    <Suspense>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/explore" element={<Explore />} />
        <Route exact path="/home" element={<Navigate to={"/"} replace />} />
      </Routes>
    </Suspense>
  );
};

export default App;
