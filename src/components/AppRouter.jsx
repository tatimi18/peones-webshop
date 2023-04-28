import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import ErrorPage from "../pages/ErrorPage";
import CatalogItemPage from "../pages/CatalogItemPage";
import MyTabs from '../components/TabList';
import Catalog from '../components/catalog/Catalog';
import Contacts from '../components/Contacts';
import About from '../components/About';
import Gallery from '../components/Gallery';


const AppRouter = function() {
    return (
        <Routes>
            <Route path='/' element={<Catalog/>} />
            <Route path='/delivery-payment' element={<MyTabs/>} />
            <Route path='/cart' element={<ShoppingCartPage />} />
            <Route path='/error' element={<ErrorPage />} />
            <Route path='/contacts' element={<Contacts/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/gallery' element={<Gallery/>} />
         
            <Route path='catalog/:name_en' element={<CatalogItemPage />} />

            <Route path="/*" element={<Navigate to="/error" replace />} />
        </Routes>
    )
}

export default AppRouter;
