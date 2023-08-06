import React, { useState } from "react";
import SignButton from './SignButton';
import Hand from './Hand';

const Work: React.FC = () => {
    const [canvas, setCanvas] = useState<string>("non-view"); // 서명 추가 상태 관리
    const [baseDataUrl, setBaseDataUrl] = useState<string>("");

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
            <ul className="steps flex justify-center w-full">
                <li className="step step-primary"></li>
                <li className="step step-primary"></li>
                <li className="step"></li>
                <li className="step"></li>
            </ul>
            <div style={{ position: "absolute", top: "0px", left:"600px" }}>
                <SignButton onChangeCanvas={handleCanvasChange} />
            </div>
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