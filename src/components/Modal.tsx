// 모달창 노출 여부 결정 페이지
// ModalBasic.tsx 파일과 이어짐

import { useState } from 'react';
import ModalBasic from './ModalBasic';
import React from 'react';

const Modal = () => {
    // 모달창 노출 여부 state
    const [modalOpen, setModalOpen] = useState(false);

    // 모달창 노출
    const showModal = () => {
        setModalOpen(true);
    };

    return (
        <div>
            <button onClick={showModal}>모달 띄우기</button>
            {/* 어떤 코드인지 정리하기 */}
            {modalOpen &&  <ModalBasic
                    setModalOpen={setModalOpen}
                    id={1} // 실제 데이터로 변경하기..
                    title="모달 제목"
                    content="모달 내용"
                    writer="작성자"
                />}
        </div>
    );
}

export default Modal;