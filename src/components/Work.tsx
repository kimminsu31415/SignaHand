import React, { useState } from "react";
import SignButton from './SignButton';
import Hand from './Hand';
import {useLocation} from "react-router";
import PdfViewer from "./PdfViewer";

const Work: React.FC = () => {
    const [canvas, setCanvas] = useState<string>("non-view"); // 서명 추가 상태 관리
    const [baseDataUrl, setBaseDataUrl] = useState<string>("");

    /* Home 컴포넌트에서 사용자에게 입력받은 PDF 파일 넘겨받기*/
    const location = useLocation();
    const file = location.state.file;

    // 서명 추가 버튼 클릭 이벤트 함수
    const handleCanvasChange = (canvasType: string) => {
        setCanvas(canvasType);
    }

    // base64 서명 문자열 관리 함수
    const handleBaseDataUrlChange = (baseDataUrl: string) => {
        setBaseDataUrl(baseDataUrl);
        if (baseDataUrl != "") { 
            setCanvas("non-view");
        }
        
    };

    return (
        <>
            <SignButton onChangeCanvas={handleCanvasChange} />
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