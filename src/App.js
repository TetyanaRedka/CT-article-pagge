import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";

// const Homepage = lazy(() => import("./views/Homepage"));

import HomePage from "./components/HomePage/HomePage";
import ArticlePage from "./components/ArticlePage/ArticlePage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<p>...</p>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:id" element={<ArticlePage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}
