/*
* export default component name: Edit
* dev: kimminsu31415
* description: Home.tsx 파일에서 'work' 버튼을 누르면 나오는 페이지
* */
import React from "react";
import { useHandContext, useResizeContext } from "../../context/HandContext";
import {useLocation} from "react-router";
import PdfDisplay from "./layout/pdfDisplay/PdfDisplay";
import SignatureDisplay from "./layout/signatureDisplay/SignatureDisplay";
import PreviewDisplay from "./layout/previewDisplay/PreviewDisplay";
import SignHand from "./layout/modal/components/SignHand"

const Edit: React.FC = () => {
    const { canvas, baseDataUrlArr, handleBaseDataUrlChange } = useHandContext();
    const { imgRef, imgRef2, signWidth, signHeight } = useResizeContext();


    /* Home 컴포넌트에서 사용자에게 입력받은 PDF 파일 넘겨받기*/
    const location = useLocation();
    const file = location.state.file;

    return (
        <>
            <div className="grid grid-cols-5 h-screen flex">
                <div className="col-span-1">
                    <SignatureDisplay/>
                    {baseDataUrlArr[0] != "" && (
                    <img 
                        src={baseDataUrlArr[0]}
                        ref = {imgRef}
                        style={{width:signWidth}}
                    />
                    )}
                    {baseDataUrlArr[1] != "" && (
                    <img 
                        src={baseDataUrlArr[1]}
                        ref = {imgRef2}
                        style={{width:signWidth}}
                    />
                    )}
                </div>
                <div className="col-span-3">
                    <PdfDisplay file={file}/>
                </div>
                <div className="col-span-1">
                    <PreviewDisplay/>
                </div>
            </div>
        </>
    );
};

export default Edit;