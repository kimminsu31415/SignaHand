import React from "react";
import Hand from "./Hand";

const Work: React.FC = () => {
    return (
        <>
            <ul className="steps flex justify-center w-full">
                <li className="step step-primary"></li>
                <li className="step step-primary"></li>
                <li className="step"></li>
                <li className="step"></li>
            </ul>
            <Hand></Hand>
        </>
    );
};

export default Work;