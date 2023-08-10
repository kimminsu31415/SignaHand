import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Work from "./components/Work";
import Test from "./components/Test";
import PDFView from "./components/PDFView";
import Modal from './components/Modal';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/work" element={<Work/>}/>
                    <Route path="/Test" element={<Test/>}/>
                    <Route path="/work/PDFView" element={<PDFView/>}/>
                    <Route path="/Modal" element={<Modal/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
