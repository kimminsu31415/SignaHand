/*
* export default component name: Edit
* dev: kimminsu31415
* description: Home.tsx 파일에서 '파일담기' 버튼을 누르면 나오는 페이지
* */
import React from "react";
// import { useHandContext } from "../../context/HandContext";
import {useLocation} from "react-router";
import PdfDisplay from "./layout/pdfDisplay/PdfDisplay";
import SignatureDisplay from "./layout/signatureDisplay/SignatureDisplay";
import PreviewDisplay from "./layout/previewDisplay/PreviewDisplay";

const Edit: React.FC = () => {
    // const { canvas, baseDataUrl, handleBaseDataUrlChange } = useHandContext();
    // const { signWidth, signHeight } = useHandContext();

    /* Home 컴포넌트에서 사용자에게 입력받은 PDF 파일 넘겨받기*/
    const location = useLocation();
    const file = location.state.file;

    return (
        <>
            <div className="grid grid-cols-5 h-screen flex">
                <div className="col-span-1" style={{backgroundColor:"#78EAFF"}}>
                    <SignatureDisplay/>
                </div>
                <div className="col-span-3" style={{backgroundColor:"#D5C2EE"}}>
                    <PdfDisplay file={file}/>
                </div>
                <div className="col-span-1" style={{backgroundColor:"#FFE4E1"}}>
                    <PreviewDisplay/>
                </div>
            </div>
        </>
    );
};

export default Edit;