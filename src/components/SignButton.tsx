import React from "react";

// canvas를 렌더링할 지 결정하기 위한 props
interface CanvasType {
    onChangeCanvas: (CanvasType: string) => void;
}

const SignButton: React.FC<CanvasType> = (props) => {
    const buttonHandler = () => {
        props.onChangeCanvas("view");
    }

    return(
        <>
            <button onClick={buttonHandler}>
                add Sign
            </button>
        </>
    );
}

export default SignButton;