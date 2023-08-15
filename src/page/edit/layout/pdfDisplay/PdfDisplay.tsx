/*
* export default comonent name: pdfDisplay
* dev: codeartitect
* description: pdf파일을 보여주고 서명 데이터를 입력시킬 수 있는 컴포넌트
* */
import React, { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import Loading from "../loading/Loading";

pdfjsLib.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.js`;

interface PdfDisplayProps {
    file: File;
}

const PdfDisplay: React.FC<PdfDisplayProps> = ({ file }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(true);

    /* PDF 파일을 뷰어에 띄우기 위해서는 URL을 사용해야함 */
    const pdfUrl = URL.createObjectURL(file);

    useEffect(() => {
        /* PDF 불러오기 */
        const loadPDF = async () => {
            /* pdf를 보여줄 container Element 불러오기 */
            const container = containerRef.current;
            if (!container) return; // 컨테이너가 없다면 종료

            try {
                /* PDF 문서 업로딩 */
                const loadingTask = pdfjsLib.getDocument(pdfUrl);
                /* PDF 문서 객체 */
                const pdf = await loadingTask.promise;

                // for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                //     const page = await pdf.getPage(pageNum);
                const page = await pdf.getPage(1);
                    const scale = 1;
                    const viewport = page.getViewport({ scale });

                    const canvas = document.createElement("canvas");
                    canvas.width = viewport.width;
                    canvas.height = viewport.height;

                    const context = canvas.getContext("2d");
                    if (!context) return;

                    const renderContext = {
                        canvasContext: context,
                        viewport: viewport,
                    };

                    container.appendChild(canvas);

                    await page.render(renderContext).promise;
                // }
            } catch (error) {
                console.error("Error loading PDF:", error);
            } finally {
                setTimeout(() => {
                    setLoading(false); // 로딩이 끝났음을 표시
                }, 1000);
            }
        };

        loadPDF();
    }, []);

    return (
        <>
            {loading && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-white opacity-100">
                    <Loading fileName={file.name}/>
                </div>
            )}
            <div>
                <div ref={containerRef}></div>
            </div>
        </>
    );
};

export default PdfDisplay;
