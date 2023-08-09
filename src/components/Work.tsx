import React, { useState } from "react";
import { useHandContext } from "../contexts/HandContext";
import SignButton from './SignButton';
import Hand from './Hand';
import {useLocation} from "react-router";
import PdfViewer from "./PdfViewer";

const Work: React.FC = () => {
    const { canvas, baseDataUrl, handleBaseDataUrlChange } = useHandContext();

    /* Home 컴포넌트에서 사용자에게 입력받은 PDF 파일 넘겨받기*/
    const location = useLocation();
    const file = location.state.file;

    return (
        <>
            <SignButton />
            <PdfViewer file={file}/>
            <div>
                {canvas === "view" &&  (
                    <Hand onBaseDataUrlChange={handleBaseDataUrlChange} />
                )}
            </div>
            <div style={{ position: "absolute", top: "0px", left:"1300px" }}>
                {baseDataUrl != "" && (
                    <img src={baseDataUrl}/>
                )}
            </div>
        </>

    );
};

export default Work;