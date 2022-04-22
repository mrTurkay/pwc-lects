import React from "react";
import { Route, Routes } from "react-router-dom";
import ArticlesPage from "./pages/ArticlesPage";
import ArticleFormPage from "./pages/ArticleFormPage";
import Inventories from "./pages/Inventories";
import InventoryDetails from "./pages/InventoryDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ArticlesPage />} />
      <Route path="articleFormPage" element={<ArticleFormPage />} />
      <Route path="inventories" element={<Inventories />} />
      {/* <Route path="inventories/:id" element={<InventoryDetails />} /> */}
    </Routes>
  );
}

export default App;
