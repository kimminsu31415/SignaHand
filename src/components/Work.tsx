// Home.tsx 파일에서 'work' 버튼을 누르면 나오는 페이지

import React from "react";
import { Link } from "react-router-dom";

const Work: React.FC = () => {
    return (
        <>
            <div className="grid grid-row-3 h-screen" style={{backgroundColor:"red"}}>
                <div className="grid grid-rows-2 place-content-stretch">
                    <div className="grid grid-cols-2 place-items-stretch m-8" style={{backgroundColor:"yellow"}}>
                        <div className="m-8" style={{backgroundColor:"#B4B4FF"}}>03</div>
                        <div className="m-8" style={{backgroundColor:"#d2d2d2"}}>04</div>
                    </div>
                    <div className="place-content-center m-8" style={{backgroundColor:"green"}}>
                        <Link to="/work/PDFView">
                            <p className="btn m-8 text-2xl">파일 담기</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Work;