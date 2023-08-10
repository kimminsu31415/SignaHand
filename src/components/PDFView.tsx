//PDF 사인 작업 파일
//'사인하기' 버튼을 누르면 모달창 생성

import React, {useState} from "react";
import ModalBasic from './ModalBasic';

const PDFView = () => {
    // 모달창 노출 여부 state
    const [modalOpen, setModalOpen] = useState(false);

    // 모달창 노출
    const showModal = () => {
        setModalOpen(true);
    };

    return(
        <>
            <div className="grid grid-cols-3 h-screen flex" style={{backgroundColor:"red"}}>
                <div className="m-8" style={{backgroundColor:"yellow"}}>
                    <p>사인란</p>
                    <div>
                            <p className="btn btn-primary w-full text-2xl font-bold font-mono" onClick={showModal}>
                                사인하기 +
                            </p>
                            {modalOpen &&  <ModalBasic
                                setModalOpen={setModalOpen}
                                id={1} // 실제 데이터로 변경하기..
                                title="모달 제목"
                                content="모달 내용"
                                writer="작성자"
                            />}
                    </div>
                </div>
                <div className="m-8" style={{backgroundColor:"green"}}>PDF 보여주기 기능</div>
                <div className="m-8" style={{backgroundColor:"#1EDDFF"}}>PDF View 기능</div>
            </div>
        </>
    );
}

export default PDFView;