// Home.tsx 파일에서 'work' 버튼을 누르면 나오는 페이지

import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useHandContext } from "../contexts/HandContext";
import SignButton from './SignButton';
import SignHand from "./SignHand";
import ResizeHand from "./ResizeHand";
import {useLocation} from "react-router";
import PdfViewer from "./PdfViewer";

const Work: React.FC = () => {
    const { canvas, baseDataUrl, handleBaseDataUrlChange } = useHandContext();
    const { signWidth, signHeight } = useHandContext();

    /* Home 컴포넌트에서 사용자에게 입력받은 PDF 파일 넘겨받기*/
    const location = useLocation();
    const file = location.state.file;

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
                <SignButton />
            
                <PdfViewer file={file}/>
                <div>
                    {canvas === "view" &&  (
                        <SignHand onBaseDataUrlChange={handleBaseDataUrlChange} />
                    )}
                </div>
                <div style={{ position: "absolute", top: "0px", left:"1300px" }}>
                    {baseDataUrl != "" && (
                        <img 
                            src={baseDataUrl}
                            width={signWidth}
                            height={signHeight}
                        />
                    )}
                </div>
                <div>
                    {canvas ==="non-view" && (
                        <ResizeHand />
                    )}
                </div>
            </div>
        </>
    );
};

export default Work;