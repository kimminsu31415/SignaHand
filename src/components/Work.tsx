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
            <SignButton onChangeCanvas={handleCanvasChange} />
            <div>
                {canvas=="view" && <Hand></Hand>}
            </div>
        </>
    );
};

export default Work;