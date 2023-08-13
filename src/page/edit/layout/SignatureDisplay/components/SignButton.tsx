import React from "react";
import { useHandContext } from "../../../../../context/HandContext";

interface SignButtonProps {
    showMadal: () => void
}

const SignButton: React.FC<SignButtonProps> = ({showMadal}: SignButtonProps) => {
    const { setCanvas } = useHandContext();

    // 서명 캔버스 띄우기
    const buttonHandler = () => {
        setCanvas("view");
    }

    return(
        <>
            <button onClick={buttonHandler} className="btn btn-primary" >
                add Sign
            </button>
        </>
    );
}

export default SignButton;