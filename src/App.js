import React, { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";

import ArticlePage from "./components/ArticlePage/ArticlePage";
import { fetchArticles } from "./redux/article/articleOperation";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const HomePage = lazy(() => import("./components/HomePage/HomePage"));

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
  palette: {
    primary: {
      main: "#363636",
    },
    text: {
      primary: "#363636",
    },
    typography: {
      h5: {
        lineHeight: "1.2",
      },
    },
  },
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
