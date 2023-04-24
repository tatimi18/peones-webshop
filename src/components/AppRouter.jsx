import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import ErrorPage from "../pages/ErrorPage";
import PromoPage from "../pages/PromoPage";
import CatalogItemPage from "../pages/CatalogItemPage";


const AppRouter = function() {
    return (
        <Routes>
            <Route path='/' element={<PromoPage />} />
            <Route path='/cart' element={<ShoppingCartPage />} />
            <Route path='/error' element={<ErrorPage />} />
         
            <Route path='/:name_en' element={<CatalogItemPage />} />

            <Route path="/*" element={<Navigate to="/error" replace />} />
        </Routes>
    )
}

export default AppRouter;
