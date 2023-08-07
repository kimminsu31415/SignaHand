import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Work from "./components/Work";
import {PdfContextProvider} from "./components/PdfContext";

function App() {
    return (
        <PdfContextProvider>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/work" element={<Work/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </PdfContextProvider>

    );
}

export default App;
