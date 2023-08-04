import React, { useState } from "react";
import SignButton from './SignButton';
import Hand from './Hand';

const Work: React.FC = () => {
    const [canvas, setCanvas] = useState<string>("non-view");

    const handleCanvasChange = (canvasType: string) => {
        setCanvas(canvasType);
    }

    return (
        <>
            <ul className="steps flex justify-center w-full">
                <li className="step step-primary"></li>
                <li className="step step-primary"></li>
                <li className="step"></li>
                <li className="step"></li>
            </ul>
            <SignButton onChangeCanvas={handleCanvasChange} />
            <div>
                {canvas=="view" && <Hand></Hand>}
            </div>
        </>
    );
};

export default Work;