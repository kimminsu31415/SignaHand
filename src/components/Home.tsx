import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="grid grid-cols-3 h-screen">
                <div className="col-span-2 flex items-center justify-center">
                    <div className="w-3/4 h-auto relative">
                        <div className="w-full h-full absolute inset-0 bg-gradient-to-b from-transparent to-transparent"></div>
                        <img
                            src="assets/images/img.png"
                            className="w-full h-auto rounded-lg"
                            alt="Sample Image"
                        />
                    </div>

                </div>
                <div className="col-span-1 h-screen flex items-center justify-center">
                    <div className="w-full">
                        <Link to="/work">
                            <p className="btn btn-primary w-full text-2xl font-bold font-mono">work</p>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Home;