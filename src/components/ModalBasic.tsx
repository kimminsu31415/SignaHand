//모달창 생성 파일
//document 에 mousedown 이벤트핸들러를 등록하고, 모달창 영역이 아닐 경우에만, modalOpen 상태를 false로 전환

import styles from '../ModalMasic.module.css';
import React from 'react';
import { useEffect, useRef } from 'react';

interface ModalBasicProps {
    setModalOpen: (isOpen: boolean) => void;
    id: number;
    title: string;
    content: string;
    writer: string;
}


function ModalBasic({ setModalOpen, id, title, content, writer }: ModalBasicProps) {
    // 모달 끄기 (X버튼 onClick 이벤트 핸들러)
    const closeModal = () => {
        setModalOpen(false);
    };

    // 모달 외부 클릭시 끄기 처리
    // Modal 창을 useRef로 취득
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        //이벤트 핸들러 함수
        const handler = (event: MouseEvent) => {
            // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
            if(modalRef.current && !modalRef.current.contains(event.target as Node)){
                setModalOpen(false);
            }
        };

        //이벤트 핸들러 등록
        document.addEventListener('mousedown', handler);

        return () => {
            // 이벤트 핸들러 해제
            document.removeEventListener('mousedown', handler);
        };
    });

    return (
        // 모달창을 useRef로 잡아준다.
        <div ref={modalRef} className={styles.container}>
            <button className={styles.close} onClick={closeModal}>
                X
            </button>
            <p>손으로 그리기</p>
        </div>
    );
}

export default ModalBasic;