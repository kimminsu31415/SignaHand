import React, {ChangeEvent, useState} from "react";

/* PdfUploader.tsx
* 사용자가 pdf 파일을 입력하는 컴포넌트*/
const PdfUploader: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        setSelectedFile(file);
    }

    return (
        <>
            <div>
                <input className="file-input file-input-bordered" type="file" accept=".pdf" onChange={handleFileChange} />
                {selectedFile && <p>Selected file: {selectedFile.name}</p>}
            </div>
        </>
    );
};

export default PdfUploader;