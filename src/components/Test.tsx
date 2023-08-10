// 테스트를 위한 파일
// 신경 쓸 필요 없음

import React from "react";

const Test = () => {
    return(
        <>
            <div className="grid grid-cols-3 h-screen flex" style={{backgroundColor:"red"}}>
                <div className="m-8" style={{backgroundColor:"yellow"}}>
                    <p>사인란</p>
                    <p className="btn m-8 text-2xl">+</p>
                </div>
                <div className="m-8" style={{backgroundColor:"green"}}>PDF 보여주기 기능</div>
                <div className="m-8" style={{backgroundColor:"#1EDDFF"}}>PDF View 기능</div>
            </div>
        </>
    );
}

export default Test;