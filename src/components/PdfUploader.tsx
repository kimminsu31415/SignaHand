import React, {ChangeEvent, useState} from "react";
import {Link} from "react-router-dom";

/* PdfUploader.tsx
* 사용자가 pdf 파일을 입력하는 컴포넌트*/
const PdfUploader: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        setSelectedFile(file);
    }

    return (
        <div className="grid justify-center place-content-center h-full">
            <label className="relative cursor-pointer bg-gray-500 text-white py-2 px-10 rounded-lg">
                파일 담기
                <input
                    className="opacity-0 cursor-pointer absolute top-0 left-0 w-full h-full"
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                />
            </label>
            {selectedFile && (
                <Link to="/work" className="btn text-xl">
                    work
                </Link>
            )}
        </div>
    );
};

export default PdfUploader;