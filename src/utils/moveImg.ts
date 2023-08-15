import { Results, NormalizedLandmark } from "@mediapipe/hands";

export const moveImg = (results: Results) => {

    let x : number;
    let y : number;

    // 손의 랜드마크 그리기
    if (results.multiHandLandmarks) {
        for (const handLandmarks of results.multiHandLandmarks) {
            if (handLandmarks[8]) {
                x = handLandmarks[8].x * 1920;
                y = handLandmarks[8].y * 1080;
                return [x, y];
            }
        }

            
        // else 예외 처리 코드 추가
        
    }
}