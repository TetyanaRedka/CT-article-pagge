import React, { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";

import { ThemeProvider, createTheme } from "@mui/material/styles";

// const Homepage = lazy(() => import("./views/Homepage"));

import HomePage from "./components/HomePage/HomePage";
import ArticlePage from "./components/ArticlePage/ArticlePage";
import { fetchArticles } from "./redux/article/articleOperation";

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif'
  },
  spacing: 5
});

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Suspense fallback={<p>...</p>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/:id" element={<ArticlePage />} />
            </Routes>
          </Suspense>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}
