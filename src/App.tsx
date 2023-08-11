import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { HandContextProvider } from './contexts/HandContext';
import Home from "./components/Home";
import Work from "./components/Work";

function App() {
    return (
        <div className="App">
            <HandContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/work" element={<Work/>}/>
                    </Routes>
                </BrowserRouter>
            </HandContextProvider>
        </div>
    );
}

export default App;