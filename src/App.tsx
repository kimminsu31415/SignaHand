import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { HandContextProvider } from './context/HandContext';
import Home from "./page/home/Home";
import Edit from "./page/edit/Edit";

function App() {
    return (
        <div className="App">
            <HandContextProvider>    
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/work" element={<Edit/>}/>
                    </Routes>
                </BrowserRouter>
            </HandContextProvider>
        </div>
    );
}

export default App;