/*
* export default component name: Edit
* dev: kimminsu31415
* description: Home.tsx 파일에서 'work' 버튼을 누르면 나오는 페이지
* */
import React from "react";
// import { useHandContext } from "../../context/HandContext";
import {useLocation} from "react-router";
import PdfDisplay from "./layout/PdfDisplay/PdfDisplay";
import SignatureDisplay from "./layout/SignatureDisplay/SignatureDisplay";
import PreviewDisplay from "./layout/PreviewDisplay/PreviewDisplay";

const Edit: React.FC = () => {
    // const { canvas, baseDataUrl, handleBaseDataUrlChange } = useHandContext();
    // const { signWidth, signHeight } = useHandContext();

    /* Home 컴포넌트에서 사용자에게 입력받은 PDF 파일 넘겨받기*/
    const location = useLocation();
    const file = location.state.file;

    return (
        <>
            <div className="grid grid-cols-5 h-screen flex">
                <div className="col-span-1">
                    <SignatureDisplay/>
                </div>
                <div className="col-span-3">
                    <PdfDisplay file={file}/>
                </div>
                <div className="col-span-1">
                    <PreviewDisplay/>
                </div>
            </div>
            {/*****************************************************************************************/}
            {/*<div>*/}
            {/*    {canvas === "non-view" && (*/}
            {/*        <ResizeHand/>*/}
            {/*    )}*/}
            {/*</div>*/}
        </>
    );
};

export default Edit;