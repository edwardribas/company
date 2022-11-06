import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Main } from '../components/Main';

// Pages
import { Hero } from '../pages/Hero';
import { ProjectCreation } from '../pages/ProjectCreation';
import { Projects } from '../pages/Projects';
import { ProjectsDetails } from '../pages/ProjectsDetails';

export const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Main>
                    <Routes>
                        <Route path="/" element={<Hero/>}/>
                        <Route path="/projects" element={<Projects/>}/>
                        <Route path="/creation" element={<ProjectCreation/>}/>
                        <Route path="/details" element={<ProjectsDetails/>}/>
                    </Routes>
                </Main>
            </BrowserRouter>
            <Footer/>
        </>
    )
}