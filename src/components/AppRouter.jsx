import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import ErrorPage from "../pages/ErrorPage";
import CatalogItemPage from "../pages/CatalogItemPage";
import TabsPage from '../pages/TabsPage';
import CatalogPage from '../pages/CatalogPage';
import ContactsPage from '../pages/ContactsPage';
import AboutPage from '../pages/AboutPage';
import GalleryPage from '../pages/GalleryPage';


const AppRouter = function() {
    return (
        <Routes>
            <Route path='/' element={<CatalogPage/>} />
            <Route path='/delivery-payment' element={<TabsPage/>} />
            <Route path='/cart' element={<ShoppingCartPage />} />
            <Route path='/error' element={<ErrorPage />} />
            <Route path='/contacts' element={<ContactsPage/>} />
            <Route path='/about' element={<AboutPage/>} />
            <Route path='/gallery' element={<GalleryPage/>} />
         
            <Route path='catalog/:name_en' element={<CatalogItemPage />} />

            <Route path="/*" element={<Navigate to="/error" replace />} />
        </Routes>
    )
}

export default AppRouter;
