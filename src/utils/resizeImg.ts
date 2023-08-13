import { Results, NormalizedLandmark } from "@mediapipe/hands";

export const resizeImg = (results: Results) => {

    // 손 동작 모드 : up, down
    let resizeMode;
    // 손가락 상태 판단을 위한 변수
    let index_finger;
    let middle_finger;
    let ring_finger;

    // 두 점 거리 계산 함수
    const calculateDistance = (p1: NormalizedLandmark, p2: NormalizedLandmark): number => {
        const deltaX = p2.x - p1.x;
        const deltaY = p2.y - p1.y;
        const distance= Math.sqrt(deltaX * deltaX + deltaY * deltaY );
        return distance;
    }



    // 손의 랜드마크 그리기
    if (results.multiHandLandmarks) {
        for (const handLandmarks of results.multiHandLandmarks) {
            // 손가락을 접은 경우 true
            index_finger = calculateDistance(handLandmarks[8], handLandmarks[0]) < calculateDistance(handLandmarks[5], handLandmarks[0]);
            middle_finger = calculateDistance(handLandmarks[12], handLandmarks[0]) < calculateDistance(handLandmarks[9], handLandmarks[0]);
            ring_finger = calculateDistance(handLandmarks[16], handLandmarks[0]) < calculateDistance(handLandmarks[13], handLandmarks[0]);
            if (!index_finger && !middle_finger && !ring_finger){
            resizeMode = "up";
            }else if (index_finger && middle_finger && ring_finger){
            resizeMode = "down";
            }
        }

        if (resizeMode === "up"){
            return "up"; // break point 지정해서 up이나 down이 한 번만 반환되도록 수정해서 과부하 줄여보기.
        }
        
        else if (resizeMode === "down"){
            return "down";
            }
            
        // else 예외 처리 코드 추가
        
    }
}