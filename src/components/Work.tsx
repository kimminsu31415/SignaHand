import React, { useState } from "react";
import SignButton from './SignButton';
import Hand from './Hand';
import {useLocation} from "react-router";
import PdfViewer from "./PdfViewer";

const Work: React.FC = () => {
    const [canvas, setCanvas] = useState<string>("non-view");

    /* Home 컴포넌트에서 사용자에게 입력받은 PDF 파일 넘겨받기*/
    const location = useLocation();
    const file = location.state.file;

    const handleCanvasChange = (canvasType: string) => {
        setCanvas(canvasType);
    }

    return (
        <>
            <SignButton onChangeCanvas={handleCanvasChange} />
            <PdfViewer file={file}/>
            <div>
                {canvas=="view" && <Hand></Hand>}
            </div>
        </>

    );
};

export default Work;