import React, {useRef, useState} from "react";
import SignatureModal from "../modal/SignatureModal";
import SignButton from "./components/SignButton";
import {useHandContext} from "../../../../context/HandContext";

const SignatureDisplay: React.FC = () => {
    const signModal = useRef<HTMLDialogElement | null>(null);

    // 모달창 노출 여부 state
    const { setCanvas } = useHandContext();

    // 서명 캔버스 띄우기
    const openModal = () => {
        setCanvas("view");
        if (signModal.current) {
            signModal.current.showModal();
        }
    }

    return (
        <>
            <div>
                <button className="btn" onClick={openModal}>+</button>
                <dialog ref={signModal} className="modal">
                    <SignatureModal
                        // setModalOpen={setModalOpen}
                        id={1} // 실제 데이터로 변경하기..
                        title="모달 제목"
                        content="모달 내용"
                        writer="작성자"
                        modal={signModal}
                    />
                </dialog>
            </div>
        </>
    );
};

export default SignatureDisplay;