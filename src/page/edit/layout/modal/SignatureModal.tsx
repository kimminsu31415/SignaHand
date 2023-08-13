//모달창 생성 파일
//document 에 mousedown 이벤트핸들러를 등록하고, 모달창 영역이 아닐 경우에만, modalOpen 상태를 false로 전환
import styles from './style/SignatureModal.module.css';
import React, { useEffect, useRef } from 'react';
import {useHandContext} from "../../../../context/HandContext";
import SignHand from './components/SignHand';

interface SignatureModalProps {
    // setModalOpen: (isOpen: boolean) => void,
    id: number,
    title: string,
    content: string,
    writer: string,
    modal: React.MutableRefObject<HTMLDialogElement | null>
}

const SignatureModal: React.FC<SignatureModalProps> = ({ id, title, content, writer, modal }) => {
    const {handleBaseDataUrlChange} = useHandContext();
    // 모달 끄기 (X버튼 onClick 이벤트 핸들러)

    // useEffect(() => {
    //     //이벤트 핸들러 함수
    //     const handler = (event: MouseEvent) => {
    //         // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
    //         if (modal.current && !modal.current.contains(event.target as Node)) {
    //             setModalOpen(false);
    //         }
    //     };
    //
    //     //이벤트 핸들러 등록
    //     document.addEventListener('mousedown', handler);
    //
    //     return () => {
    //         // 이벤트 핸들러 해제
    //         document.removeEventListener('mousedown', handler);
    //     };
    // });

    const closeModal = () => {
        if (modal.current) {
            modal.current.close();
        }
    };

    return (
        <>
            <div>
                <p>손으로 그리기!</p>
                <SignHand onBaseDataUrlChange={handleBaseDataUrlChange}/>
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <button className="btn" onClick={closeModal}>x</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default SignatureModal;