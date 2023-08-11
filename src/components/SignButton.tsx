import React from "react";
import { useHandContext } from "../contexts/HandContext";

const SignButton: React.FC = () => {
    const { setCanvas } = useHandContext();

    // 서명 캔버스 띄우기
    const buttonHandler = () => {
        setCanvas("view");
    }

    return(
        <>
            <button onClick={buttonHandler} >
                add Sign
            </button>
        </>
    );
}

export default SignButton;