import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ArticlesPage from "./pages/ArticlesPage";
import ArticleFormPage from "./pages/ArticleFormPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ArticlesPage />} />
      <Route path="articleFormPage" element={<ArticleFormPage />} />
    </Routes>
  );
}

export default App;
