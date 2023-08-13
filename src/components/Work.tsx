import React, { useState, useRef } from "react";
import { useHandContext, useResizeContext } from "../contexts/HandContext";
import SignButton from './SignButton';
import SignHand from "./SignHand";
import ResizeHand from "./ResizeHand";
import HandTest from "./HandTest";
import {useLocation} from "react-router";
import PdfViewer from "./PdfViewer";

const Work: React.FC = () => {
    const { canvas, baseDataUrl, handleBaseDataUrlChange } = useHandContext();
    const { imgRef } = useResizeContext();

    /* Home 컴포넌트에서 사용자에게 입력받은 PDF 파일 넘겨받기*/
    const location = useLocation();
    const file = location.state.file;

    return (
        <>
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
                        ref = {imgRef}
                    />
                )}
            </div>
            <div>
                {canvas ==="non-view" && (
                    <ResizeHand />
                )}
            </div>
        </>

    );
};

export default Work;