import React from 'react'
import Home from './Pages/Home'
import Sobre from './Pages/Sobre/Sobre'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from "./Components/Menu";
import Cardapio from './Pages/Cardapio/Cardapio';
import Users from './Pages/Users/Users';

export default function Router() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/cardapio" element={<Cardapio />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </BrowserRouter>
    )
}