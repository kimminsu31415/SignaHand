import React from "react";
import {Link} from "react-router-dom";
import PdfUploader from "./PdfUploader";

const Home = () => {
    return (
        <>
            <div className="grid grid-row-3  h-screen">
                <div className="row-span-2 flex items-center justify-center">
                    <div className="grid grid-cols-3">
                        <div className="col-span-2">
                            <div className="container mx-auto p-8">
                                <h1 className="text-4xl font-bold mb-4">Signahand</h1>
                                <p className="text-lg text-gray-700">프로젝트 설명</p>
                                <div className="mt-4">
                                    <h2 className="text-2xl font-bold mb-2">주요 기능</h2>
                                    <ul className="list-disc list-inside">
                                        <li>기능 1</li>
                                        <li>기능 2</li>
                                        <li>기능 3</li>
                                    </ul>
                                </div>
                                <div className="mt-4">
                                    <h2 className="text-2xl font-bold mb-2">프로젝트 링크</h2>
                                    <a href="#" className="text-blue-500">프로젝트 링크</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <img src="assets/images/img.png" className="w-full h-auto rounded-lg" alt="Sample Image"/>
                        </div>
                    </div>
                </div>
                <div className="row-span-1 flex items-center justify-center">
                    <div className="w-full">
                        {/*<Link to="/work">*/}
                        {/*    <p className="btn btn-primary w-full text-2xl font-bold font-mono">work</p>*/}
                        {/*</Link>*/}
                        <PdfUploader />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;