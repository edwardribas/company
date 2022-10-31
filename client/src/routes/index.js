import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<h1>home</h1>}/>
                    <Route path="/projects" element={<h1>projects</h1>}/>
                    <Route path="/creation" element={<h1>new project</h1>}/>
                    <Route path="/details" element={<h1>project details</h1>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </>
    )
}