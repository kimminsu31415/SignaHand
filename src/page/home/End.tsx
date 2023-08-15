import exp from 'constants';
import React from 'react';
import { Link } from "react-router-dom";

const End = () => {
    return(
        <>
            {/* 전체 배경 div 행 2줄 나누기 - 빨간색 */}
            <div className="grid grid-row-2 h-screen" style={{backgroundColor:"red"}}>
                <div className="m-8" style={{backgroundColor:"yellow"}}>End.tsx 파일 - 다운로드가 완료되었습니다. 감사합니다.</div>
                <div className="m-8" style={{backgroundColor:"green"}}>
                    <p>처음 페이지로 버튼</p>
                    <Link to="/"> {/* Home.tsx의 링크는 '/' */}
                        <p className="btn m-8 text-2xl">처음 페이지로</p>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default End;